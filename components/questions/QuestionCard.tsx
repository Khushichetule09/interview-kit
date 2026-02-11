"use client";

import { Question } from "@/types/question";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EyeIcon, BookmarkIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  question: Question;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onViewAnswer: (question: Question) => void;
}

export function QuestionCard({
  question,
  isBookmarked,
  onToggleBookmark,
  onViewAnswer,
}: QuestionCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-accent text-accent-foreground border-accent";
      case "Medium":
        return "bg-primary text-primary-foreground border-primary";
      case "Hard":
        return "bg-destructive/10 text-destructive border-destructive dark:bg-destructive/20";
      default:
        return "bg-muted text-muted-foreground border-muted";
    }
  };

  return (
    <div className="border border-border bg-card p-4 flex flex-col gap-3 hover:border-primary/50 transition-colors">
      {/* Header with difficulty and bookmark */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant="default" className={cn("border", getDifficultyColor(question.difficulty))}>
            {question.difficulty}
          </Badge>
          <Badge variant="secondary">{question.type}</Badge>
        </div>
        <Button
          size="icon-sm"
          variant="ghost"
          onClick={() => onToggleBookmark(question.id)}
          className={cn(isBookmarked && "text-foreground")}
        >
          <BookmarkIcon className={cn("size-4", isBookmarked && "fill-current")} />
        </Button>
      </div>

      {/* Question text */}
      <p className="text-sm text-card-foreground leading-relaxed font-medium">{question.question}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {question.companyTags.slice(0, 2).map((tag) => (
          <Badge key={tag} variant="default" className="bg-primary/10 text-primary border-primary/20 dark:bg-primary/20">
            {tag}
          </Badge>
        ))}
        {question.roleTags.slice(0, 1).map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
        {question.topicTags.slice(0, 2).map((tag) => (
          <Badge key={tag} variant="default" className="bg-accent text-accent-foreground">
            {tag}
          </Badge>
        ))}
        {question.subjectTags.slice(0, 2).map((tag) => (
          <Badge key={tag} variant="default" className="bg-muted text-muted-foreground">
            {tag}
          </Badge>
        ))}
      </div>

      {/* View Answer Button */}
      <div className="flex justify-end">
        <Button
          size="sm"
          variant="default"
          onClick={() => onViewAnswer(question)}
          className="gap-1.5"
        >
          <EyeIcon className="size-3.5" />
          View Answer
        </Button>
      </div>
    </div>
  );
}
