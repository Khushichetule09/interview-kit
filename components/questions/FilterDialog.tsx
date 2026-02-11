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
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { QuestionDifficulty, QuestionType } from "@/types/question";
import { cn } from "@/lib/utils";

export interface FilterState {
  companies: string[];
  roles: string[];
  topics: string[];
  subjects: string[];
  types: QuestionType[];
  difficulties: QuestionDifficulty[];
}

interface FilterDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  availableFilters: {
    companies: string[];
    roles: string[];
    topics: string[];
    subjects: string[];
  };
}

export function FilterDialog({
  open,
  onOpenChange,
  filters,
  onFiltersChange,
  availableFilters,
}: FilterDialogProps) {
  const toggleFilter = <K extends keyof FilterState>(
    category: K,
    value: FilterState[K][number]
  ) => {
    const current = filters[category] as string[];
    const updated = current.includes(value as string)
      ? current.filter((v) => v !== value)
      : [...current, value as string];

    onFiltersChange({
      ...filters,
      [category]: updated,
    });
  };

  const clearAllFilters = () => {
    onFiltersChange({
      companies: [],
      roles: [],
      topics: [],
      subjects: [],
      types: [],
      difficulties: [],
    });
  };

  const hasActiveFilters =
    filters.companies.length > 0 ||
    filters.roles.length > 0 ||
    filters.topics.length > 0 ||
    filters.subjects.length > 0 ||
    filters.types.length > 0 ||
    filters.difficulties.length > 0;

  const types: QuestionType[] = ["Behavioral", "Technical", "Coding"];
  const difficulties: QuestionDifficulty[] = ["Easy", "Medium", "Hard"];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl! max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-base font-semibold">All Filters</DialogTitle>
          <DialogDescription className="sr-only">
            Filter questions by various criteria
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Question Type */}
          <div className="bg-muted/30 p-4 border border-border">
            <h3 className="text-sm font-semibold text-foreground mb-3">Question Type</h3>
            <div className="flex flex-wrap gap-2">
              {types.map((type) => (
                <Badge
                  key={type}
                  variant={filters.types.includes(type) ? "default" : "secondary"}
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => toggleFilter("types", type)}
                >
                  {type}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* Difficulty */}
          <div className="bg-muted/30 p-4 border border-border">
            <h3 className="text-sm font-semibold text-foreground mb-3">Difficulty</h3>
            <div className="flex flex-wrap gap-2">
              {difficulties.map((difficulty) => (
                <Badge
                  key={difficulty}
                  variant={filters.difficulties.includes(difficulty) ? "default" : "secondary"}
                  className={cn(
                    "cursor-pointer hover:opacity-80 transition-opacity",
                    filters.difficulties.includes(difficulty) && difficulty === "Easy" && "bg-accent text-accent-foreground",
                    filters.difficulties.includes(difficulty) && difficulty === "Medium" && "bg-primary text-primary-foreground",
                    filters.difficulties.includes(difficulty) && difficulty === "Hard" && "bg-destructive text-destructive-foreground"
                  )}
                  onClick={() => toggleFilter("difficulties", difficulty)}
                >
                  {difficulty}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* Companies */}
          <div className="bg-primary/5 p-4 border border-primary/20">
            <h3 className="text-sm font-semibold text-foreground mb-3">Companies</h3>
            <div className="flex flex-wrap gap-2">
              {availableFilters.companies.map((company) => (
                <Badge
                  key={company}
                  variant={filters.companies.includes(company) ? "default" : "secondary"}
                  className={cn(
                    "cursor-pointer hover:opacity-80 transition-opacity",
                    filters.companies.includes(company) && "bg-primary text-primary-foreground"
                  )}
                  onClick={() => toggleFilter("companies", company)}
                >
                  {company}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* Roles */}
          <div className="bg-accent/20 p-4 border border-accent/40">
            <h3 className="text-sm font-semibold text-foreground mb-3">Roles</h3>
            <div className="flex flex-wrap gap-2">
              {availableFilters.roles.map((role) => (
                <Badge
                  key={role}
                  variant={filters.roles.includes(role) ? "default" : "secondary"}
                  className={cn(
                    "cursor-pointer hover:opacity-80 transition-opacity",
                    filters.roles.includes(role) && "bg-accent text-accent-foreground"
                  )}
                  onClick={() => toggleFilter("roles", role)}
                >
                  {role}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* Topics */}
          <div className="bg-muted/30 p-4 border border-border">
            <h3 className="text-sm font-semibold text-foreground mb-3">Topics</h3>
            <div className="flex flex-wrap gap-2">
              {availableFilters.topics.map((topic) => (
                <Badge
                  key={topic}
                  variant={filters.topics.includes(topic) ? "default" : "secondary"}
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => toggleFilter("topics", topic)}
                >
                  {topic}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* Subjects */}
          <div className="bg-muted/30 p-4 border border-border">
            <h3 className="text-sm font-semibold text-foreground mb-3">Subjects</h3>
            <div className="flex flex-wrap gap-2">
              {availableFilters.subjects.map((subject) => (
                <Badge
                  key={subject}
                  variant={filters.subjects.includes(subject) ? "default" : "secondary"}
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => toggleFilter("subjects", subject)}
                >
                  {subject}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <DialogFooter className="flex-row gap-2 justify-between sm:justify-between">
          <Button
            variant="outline"
            onClick={clearAllFilters}
            disabled={!hasActiveFilters}
          >
            Clear All
          </Button>
          <Button onClick={() => onOpenChange(false)}>Apply Filters</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
