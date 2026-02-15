"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { QuestionDifficulty } from "@/types/question";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Sparkles, Wand2, Plus } from "lucide-react";
import { SelectWithSearch } from "./SelectWithSearch";
import { AddTagDialog } from "./AddTagDialog";
import { verifyEmail } from "verifymailjs";
import {sileo} from "sileo";

interface AddQuestionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  availableFilters: {
    roles: string[];
    subjects: string[];
  };
}


export function AddQuestionDialog({
  open,
  onOpenChange,
  availableFilters,
}: AddQuestionDialogProps) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [difficulties, setDifficulties] = useState<QuestionDifficulty[]>([]);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [showAddTagDialog, setShowAddTagDialog] = useState(false);
  const [tagType, setTagType] = useState<"role" | "language">("role");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGeneratingAnswer, setIsGeneratingAnswer] = useState(false);
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [lastAICallTime, setLastAICallTime] = useState(0);

  const difficultyOptions: Array<{ value: QuestionDifficulty; color: string; label: string }> = [
    { value: "Easy", color: "bg-emerald-500", label: "Easy" },
    { value: "Medium", color: "bg-yellow-500", label: "Medium" },
    { value: "Hard", color: "bg-red-500", label: "Hard" },
  ];

  const toggleDifficulty = (difficulty: QuestionDifficulty) => {
    setDifficulties(prev =>
      prev.includes(difficulty) ? prev.filter(d => d !== difficulty) : [...prev, difficulty]
    );
  };

  const handleAnswerWithAI = async () => {
    if (!question.trim()) {
      sileo.error({
        title: "Question required",
        description: "Please enter a question first.",
      });
      return;
    }

    // Rate limiting - 5 seconds between AI calls
    const now = Date.now();
    const timeSinceLastCall = now - lastAICallTime;
    if (timeSinceLastCall < 5000) {
      const waitTime = Math.ceil((5000 - timeSinceLastCall) / 1000);
      sileo.error({
        title: "Please wait",
        description: `You can make another AI request in ${waitTime} second${waitTime > 1 ? 's' : ''}.`,
      });
      return;
    }

    setIsGeneratingAnswer(true);
    setLastAICallTime(now);
    try {
      const response = await fetch("/api/answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: question.trim() }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate answer");
      }

      const data = await response.json();
      setAnswer(data.answer);
      sileo.success({ title: "Answer generated successfully" });
    } catch (error) {
      console.error("Error generating answer:", error);
      sileo.error({
        title: "Something went wrong",
        description: "Please try again later.",
      });
    } finally {
      setIsGeneratingAnswer(false);
    }
  };

  const handleEnhance = async () => {
    if (!answer.trim()) {
      sileo.error({
        title: "Answer required",
        description: "Please enter an answer first.",
      });
      return;
    }

    // Rate limiting - 5 seconds between AI calls
    const now = Date.now();
    const timeSinceLastCall = now - lastAICallTime;
    if (timeSinceLastCall < 5000) {
      const waitTime = Math.ceil((5000 - timeSinceLastCall) / 1000);
      sileo.error({
        title: "Please wait",
        description: `You can make another AI request in ${waitTime} second${waitTime > 1 ? 's' : ''}.`,
      });
      return;
    }

    setIsEnhancing(true);
    setLastAICallTime(now);
    try {
      const response = await fetch("/api/enhance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: answer.trim() }),
      });

      if (!response.ok) {
        throw new Error("Failed to enhance answer");
      }

      const data = await response.json();
      setAnswer(data.enhanced);
      sileo.success({ title: "Answer enhanced successfully" });
    } catch (error) {
      console.error("Error enhancing answer:", error);
      sileo.error({
        title: "Something went wrong",
        description: "Please try again later.",
      });
    } finally {
      setIsEnhancing(false);
    }
  };

  const handleAddTag = (type: "role" | "language") => {
    setTagType(type);
    setShowAddTagDialog(true);
  };

  const handleSaveNewTag = (tagValue: string) => {
    console.log(`Add new ${tagType} tag:`, tagValue);
  };

  const handleSubmit = async () => {
    // Validate email
    const emailValidation = verifyEmail(email.trim(), { strict: true });
    
    if (!emailValidation.isValid || emailValidation.category === "disposable") {
      setEmailError(
        emailValidation.category === "disposable" 
          ? "Disposable emails are not allowed." 
          : emailValidation.reason || "Please enter a valid personal or educational email."
      );
      return;
    }

    setEmailError("");
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: question.trim(),
          answer: answer.trim(),
          difficulty: difficulties[0], // Take first difficulty
          roleTags: selectedRoles,
          subjectTags: selectedSubjects,
          email: email.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit question");
      }

      sileo.success({ title: "Question submitted successfully" });
      
      // Reset form
      setQuestion("");
      setAnswer("");
      setEmail("");
      setDifficulties([]);
      setSelectedRoles([]);
      setSelectedSubjects([]);
      onOpenChange(false);
    } catch (error) {
      console.error("Error submitting question:", error);
      sileo.error({
        title: "Something went wrong",
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = 
    question.trim() !== "" &&
    answer.trim() !== "" &&
    email.trim() !== "" &&
    difficulties.length > 0 &&
    selectedRoles.length > 0 &&
    selectedSubjects.length > 0;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl! w-full! max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-base font-semibold">Add New Question</DialogTitle>
          <DialogDescription className="sr-only">
            Add a new interview question to the collection
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT SIDE - Email, Question and Answer */}
          <div className="space-y-4">
            {/* Email - FIRST FIELD */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-semibold">
                Email <span className="text-xs text-muted-foreground">(required for verification)</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(""); // Clear error when user types
                }}
                className={cn(emailError && "border-red-500")}
              />
              {emailError && (
                <p className="text-sm text-red-500">{emailError}</p>
              )}
            </div>

            {/* Question */}
            <div className="space-y-2">
              <Label htmlFor="question" className="text-sm font-semibold">
                Question
              </Label>
              <Textarea
                id="question"
                placeholder="Enter your question here..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="min-h-28 resize-none"
              />
            </div>

            {/* Answer */}
            <div className="space-y-2">
              <Label htmlFor="answer" className="text-sm font-semibold">
                Answer
              </Label>
              <div className="relative">
                <Textarea
                  id="answer"
                  placeholder="Enter your answer here... (editable)"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="min-h-32 resize-none pb-12"
                />
                {/* Buttons at bottom right of textarea */}
                <div className="absolute bottom-2 right-2 flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handleAnswerWithAI}
                    className="gap-1.5"
                    type="button"
                    disabled={isGeneratingAnswer || !question.trim()}
                  >
                    <Sparkles className="size-3.5" />
                    {isGeneratingAnswer ? "Generating..." : "Ask AI"}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handleEnhance}
                    className="gap-1.5"
                    type="button"
                    disabled={isEnhancing || !answer.trim()}
                  >
                    <Wand2 className="size-3.5" />
                    {isEnhancing ? "Enhancing..." : "Enhance"}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Difficulty and Tags */}
          <div className="space-y-4">
            {/* Difficulty */}
            <div className="space-y-3">
              <Label className="text-sm font-semibold">Difficulty</Label>
              <div className="space-y-2">
                {difficultyOptions.map((option) => (
                  <div key={option.value} className="flex items-center gap-3">
                    <Checkbox
                      id={`difficulty-${option.value}`}
                      checked={difficulties.includes(option.value)}
                      onCheckedChange={() => toggleDifficulty(option.value)}
                      className={cn(
                        "data-checked:border-transparent",
                        difficulties.includes(option.value) && option.color,
                        difficulties.includes(option.value) && "data-checked:bg-current"
                      )}
                    />
                    <label
                      htmlFor={`difficulty-${option.value}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <span className={cn("size-3 rounded-full", option.color)} />
                        {option.label}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Role Tags */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-semibold">Role Tags</Label>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleAddTag("role")}
                  className="gap-1 h-7 px-2"
                  type="button"
                >
                  <Plus className="size-3.5" />
                  Add Tag
                </Button>
              </div>
              <SelectWithSearch
                items={availableFilters.roles}
                value={selectedRoles}
                onValueChange={(value) => setSelectedRoles(value || [])}
                placeholder="Select roles (max 5)"
                emptyMessage="No roles found"
                maxSelections={5}
              />
            </div>

            {/* Subject Tags */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-semibold">Language Tags</Label>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleAddTag("language")}
                  className="gap-1 h-7 px-2"
                  type="button"
                >
                  <Plus className="size-3.5" />
                  Add Tag
                </Button>
              </div>
              <SelectWithSearch
                items={availableFilters.subjects}
                value={selectedSubjects}
                onValueChange={(value) => setSelectedSubjects(value || [])}
                placeholder="Select languages (max 5)"
                emptyMessage="No languages found"
                maxSelections={5}
              />
            </div>
          </div>
        </div>

        <DialogFooter className="flex-row gap-2 justify-end sm:justify-end">
          <Button variant="outline" onClick={() => onOpenChange(false)} disabled={isSubmitting}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!isFormValid || isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit for Review"}
          </Button>
        </DialogFooter>
      </DialogContent>

      {/* Add Tag Dialog */}
      <AddTagDialog
        open={showAddTagDialog}
        onOpenChange={setShowAddTagDialog}
        tagType={tagType}
        onSave={handleSaveNewTag}
      />
    </Dialog>
  );
}
