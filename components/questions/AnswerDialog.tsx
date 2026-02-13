"use client";

import { Question } from "@/types/question";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface AnswerDialogProps {
  question: Question | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AnswerDialog({ question, open, onOpenChange }: AnswerDialogProps) {
  if (!question) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl! w-full max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-base font-semibold">Question & Answer</DialogTitle>
          <DialogDescription className="sr-only">
            View the question and its answer
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Metadata */}
          <div className="flex flex-wrap gap-2">
            <Badge variant="default" className={cn(
              "border",
              question.difficulty === "Easy" && "bg-accent text-accent-foreground border-accent",
              question.difficulty === "Medium" && "bg-primary text-primary-foreground border-primary",
              question.difficulty === "Hard" && "bg-destructive/10 text-destructive border-destructive dark:bg-destructive/20"
            )}>
              {question.difficulty}
            </Badge>
          </div>

          {/* Question */}
          <div className="bg-muted/50 p-4 border border-border">
            <h3 className="text-sm font-semibold text-foreground mb-2">Question</h3>
            <p className="text-sm text-foreground leading-relaxed">{question.question}</p>
          </div>

          <Separator />

          {/* Answer */}
          <div className="bg-accent/30 p-4 border border-accent/50">
            <h3 className="text-sm font-semibold text-foreground mb-2">Answer</h3>
            <p className="text-sm text-accent-foreground leading-relaxed">{question.answer}</p>
          </div>

          <Separator />

          {/* Tags */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-2">Tags</h3>
            <div className="space-y-2">
              {question.roleTags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-semibold text-foreground min-w-20">Roles:</span>
                  {question.roleTags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
              {question.subjectTags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-semibold text-foreground min-w-20">Language:</span>
                  {question.subjectTags.map((tag) => (
                    <Badge key={tag} variant="default" className="text-xs bg-muted text-muted-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
