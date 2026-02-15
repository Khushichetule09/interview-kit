"use client";

import { Question } from "@/types/question";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EyeIcon, BookmarkIcon, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-emerald-500/10 text-emerald-500 border-emerald-500 dark:bg-emerald-500/20";
      case "Medium":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500 dark:bg-yellow-500/20";
      case "Hard":
        return "bg-destructive/10 text-destructive border-destructive dark:bg-destructive/20";
      default:
        return "bg-muted text-muted-foreground border-muted";
    }
  };

  const handleAskAI = () => {
    sessionStorage.setItem("initial_message", `Answer to the question: ${question.question}`);
    router.push("/ai");
  };

  return (
    <div className="border border-border bg-card p-4 flex flex-col gap-3 hover:border-primary/50 transition-colors">
      {/* Header with difficulty and bookmark */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant="default" className={cn("border", getDifficultyColor(question.difficulty))}>
            {question.difficulty}
          </Badge>
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
        {question.roleTags.slice(0, 1).map((tag) => (
          <Badge key={tag} variant="secondary">
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
      <div className="flex justify-end gap-2">
        <Button
          size="sm"
          variant="outline"
          onClick={handleAskAI}
          className="gap-1.5"
        >
          <Sparkles className="size-3.5" />
          Ask AI
        </Button>
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
