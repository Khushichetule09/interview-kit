"use client";

import { useState, useEffect } from "react";
import { PasswordProtection } from "@/components/main/password-protection";
import { Panel, PanelHeader, PanelTitle, PanelContent } from "@/components/shared/Panel";
import Separator from "@/components/shared/Separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X, Mail, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import {sileo} from "sileo";

interface Question {
  id: string;
  question: string;
  answer: string;
  difficulty: string;
  role_tags: string[];
  subject_tags: string[];
  email: string;
  status: string;
  created_at: string;
}

export default function AdminPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [processingIds, setProcessingIds] = useState<Set<string>>(new Set());

  const fetchQuestions = async () => {
    try {
      const response = await fetch("/api/questions?status=drafted");
      if (!response.ok) throw new Error("Failed to fetch questions");
      
      const data = await response.json();
      setQuestions(data.questions || []);
    } catch (error) {
      console.error("Error fetching questions:", error);
      sileo.error({
        title: "Something went wrong",
        description: "Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleAction = async (id: string, action: "approve" | "reject") => {
    setProcessingIds(prev => new Set(prev).add(id));
    
    try {
      const response = await fetch("/api/questions/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, action }),
      });

      if (!response.ok) throw new Error("Failed to update question");

      sileo.success({ 
        title: action === "approve" ? "Question approved" : "Question rejected" 
      });

      // Remove from list
      setQuestions(prev => prev.filter(q => q.id !== id));
    } catch (error) {
      console.error("Error updating question:", error);
      sileo.error({
        title: "Something went wrong",
        description: "Please try again later.",
      });
    } finally {
      setProcessingIds(prev => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20";
      case "Medium":
        return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20";
      case "Hard":
        return "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20";
      default:
        return "";
    }
  };

  return (
    <PasswordProtection>
      <Panel className="pt-16">
          <PanelHeader className="py-4">
            <PanelTitle>Admin Dashboard</PanelTitle>
          </PanelHeader>
</Panel>

          <Separator />
          <Panel>
          <PanelContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold">
                  Pending Questions
                  {questions.length > 0 && (
                    <span className="ml-2 text-muted-foreground">({questions.length})</span>
                  )}
                </h2>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={fetchQuestions}
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Refresh"}
                </Button>
              </div>

              
            </div>
          </PanelContent>
        </Panel>
        <Separator />

        <Panel>
          <PanelContent>
            {isLoading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              ) : questions.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <p className="text-sm">No pending questions</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {questions.map((q) => {
                    const isProcessing = processingIds.has(q.id);
                    
                    return (
                      <div
                        key={q.id}
                        className="border border-border bg-card p-4 space-y-3"
                      >
                        {/* Header with metadata */}
                        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Mail className="size-3" />
                            <span>{q.email}</span>
                          </div>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Calendar className="size-3" />
                            <span>{new Date(q.created_at).toLocaleDateString()}</span>
                          </div>
                          <span className="ml-auto">
                            <Badge variant="outline" className={cn("text-xs", getDifficultyColor(q.difficulty))}>
                              {q.difficulty}
                            </Badge>
                          </span>
                        </div>

                        {/* Question */}
                        <div className="bg-muted/50 p-3 border border-border">
                          <h3 className="text-xs font-semibold text-muted-foreground mb-1">Question</h3>
                          <p className="text-sm text-foreground">{q.question}</p>
                        </div>

                        {/* Answer */}
                        <div className="bg-accent/30 p-3 border border-accent/50">
                          <h3 className="text-xs font-semibold text-muted-foreground mb-1">Answer</h3>
                          <p className="text-sm text-foreground">{q.answer}</p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {q.role_tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {q.subject_tags.map((tag) => (
                            <Badge key={tag} variant="default" className="text-xs bg-muted text-muted-foreground">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2 pt-2">
                          <Button
                            size="sm"
                            variant="default"
                            onClick={() => handleAction(q.id, "approve")}
                            disabled={isProcessing}
                            className="gap-1.5"
                          >
                            <Check className="size-3.5" />
                            Approve
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleAction(q.id, "reject")}
                            disabled={isProcessing}
                            className="gap-1.5"
                          >
                            <X className="size-3.5" />
                            Reject
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
              </PanelContent>
              </Panel>
              <Separator/>
    </PasswordProtection>
  );
}
