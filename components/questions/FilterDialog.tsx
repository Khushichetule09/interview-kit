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
import { QuestionDifficulty } from "@/types/question";
import { cn } from "@/lib/utils";
import Separator from "../shared/Separator";
import { Panel } from "../shared/Panel";
import { SelectWithSearch } from "./SelectWithSearch";

export interface FilterState {
  roles: string[];
  subjects: string[];
  difficulties: QuestionDifficulty[];
}

interface FilterDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  availableFilters: {
    roles: string[];
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
      roles: [],
      subjects: [],
      difficulties: [],
    });
  };

  const hasActiveFilters =
    filters.roles.length > 0 ||
    filters.subjects.length > 0 ||
    filters.difficulties.length > 0;

  const difficulties: QuestionDifficulty[] = ["Easy", "Medium", "Hard"];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl! max-h-[80vh] overflow-y-auto overflow-x-hidden">
        <DialogHeader>
          <DialogTitle className="text-base font-semibold">All Filters</DialogTitle>
          <DialogDescription>
            Filter questions by various criteria
          </DialogDescription>
        </DialogHeader>

        <div className="overflow-x-hidden">
          {/* Difficulty */}
          <Panel className="bg-muted/30 p-4 border border-border">
            <h3 className="text-sm font-semibold text-foreground mb-3">Difficulty</h3>
            <div className="flex flex-wrap gap-2">
              {difficulties.map((difficulty) => (
                <Badge
                  key={difficulty}
                  variant={filters.difficulties.includes(difficulty) ? "default" : "secondary"}
                  className={cn(
                    "cursor-pointer hover:opacity-80 transition-opacity",
                    filters.difficulties.includes(difficulty) && difficulty === "Easy" && "bg-emerald-400 text-black",
                    filters.difficulties.includes(difficulty) && difficulty === "Medium" && "bg-yellow-400 text-black",
                    filters.difficulties.includes(difficulty) && difficulty === "Hard" && "bg-red-400 text-black"
                  )}
                  onClick={() => toggleFilter("difficulties", difficulty)}
                >
                  {difficulty}
                </Badge>
              ))}
            </div>
          </Panel>

          <Separator />

          {/* Roles */}
          <div className="bg-accent/20 p-4 border border-accent/40">
            <h3 className="text-sm font-semibold text-foreground mb-3">Roles</h3>
            <SelectWithSearch
              items={availableFilters.roles}
              value={filters.roles}
              onValueChange={(value) => onFiltersChange({ ...filters, roles: value || [] })}
              placeholder="Search and select roles..."
              emptyMessage="No roles found"
              maxSelections={999}
            />
          </div>

          <Separator />

          {/* Subjects */}
          <div className="bg-muted/30 p-4 border border-border">
            <h3 className="text-sm font-semibold text-foreground mb-3">Language</h3>
            <SelectWithSearch
              items={availableFilters.subjects}
              value={filters.subjects}
              onValueChange={(value) => onFiltersChange({ ...filters, subjects: value || [] })}
              placeholder="Search and select languages..."
              emptyMessage="No languages found"
              maxSelections={999}
            />
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
