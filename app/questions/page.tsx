"use client";

import { useState, useMemo, useEffect } from "react";
import { Panel, PanelHeader, PanelTitle } from "@/components/shared/Panel";
import Separator from "@/components/shared/Separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SearchIcon, FilterIcon, BookmarkIcon } from "lucide-react";
import { QUESTIONS } from "@/constants/questions";
import { Question } from "@/types/question";
import { QuestionCard } from "@/components/questions/QuestionCard";
import { AnswerDialog } from "@/components/questions/AnswerDialog";
import { FilterDialog, FilterState } from "@/components/questions/FilterDialog";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

const ITEMS_PER_PAGE = 10;

export default function QuestionsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const [showAnswerDialog, setShowAnswerDialog] = useState(false);
  const [showFilterDialog, setShowFilterDialog] = useState(false);
  const [showBookmarkedOnly, setShowBookmarkedOnly] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    roles: [],
    subjects: [],
    difficulties: [],
  });

  // Load bookmarks from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("bookmarkedQuestions");
    if (saved) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setBookmarkedIds(JSON.parse(saved));
    }
  }, []);

  // Save bookmarks to localStorage
  useEffect(() => {
    localStorage.setItem("bookmarkedQuestions", JSON.stringify(bookmarkedIds));
  }, [bookmarkedIds]);

  // Get available filter options from questions
  const availableFilters = useMemo(() => {
    const roles = new Set<string>();
    const subjects = new Set<string>();

    QUESTIONS.forEach((q: Question) => {
      q.roleTags.forEach((tag: string) => roles.add(tag));
      q.subjectTags.forEach((tag: string) => subjects.add(tag));
    });

    return {
      roles: Array.from(roles).sort(),
      subjects: Array.from(subjects).sort(),
    };
  }, []);

  // Quick filters (displayed in main view)
  const quickFilterDifficulties = ["Easy", "Medium", "Hard"];

  // Filter and search questions
  const filteredQuestions = useMemo(() => {
    let result: Question[] = QUESTIONS;

    // Apply bookmark filter
    if (showBookmarkedOnly) {
      result = result.filter((q: Question) => bookmarkedIds.includes(q.id));
    }

    // Apply search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (q: Question) =>
          q.question.toLowerCase().includes(query) ||
          q.answer.toLowerCase().includes(query) ||
          q.roleTags.some((tag: string) => tag.toLowerCase().includes(query)) ||
          q.subjectTags.some((tag: string) => tag.toLowerCase().includes(query))
      );
    }

    // Apply filters
    if (filters.difficulties.length > 0) {
      result = result.filter((q: Question) => filters.difficulties.includes(q.difficulty));
    }
    if (filters.roles.length > 0) {
      result = result.filter((q: Question) => q.roleTags.some((tag: string) => filters.roles.includes(tag)));
    }
    if (filters.subjects.length > 0) {
      result = result.filter((q: Question) =>
        q.subjectTags.some((tag: string) => filters.subjects.includes(tag))
      );
    }

    return result;
  }, [searchQuery, filters, bookmarkedIds, showBookmarkedOnly]);

  // Paginate
  const totalPages = Math.ceil(filteredQuestions.length / ITEMS_PER_PAGE);
  const paginatedQuestions = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredQuestions.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredQuestions, currentPage]);

  // Reset to page 1 when filters change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentPage(1);
  }, [searchQuery, filters, showBookmarkedOnly]);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((bookmarkId) => bookmarkId !== id) : [...prev, id]
    );
  };

  const handleViewAnswer = (question: Question) => {
    setSelectedQuestion(question);
    setShowAnswerDialog(true);
  };

  const toggleQuickFilter = (category: "difficulties", value: string) => {
    const current = filters[category];
    const updated = current.includes(value as never)
      ? current.filter((v) => v !== value)
      : [...current, value as never];

    setFilters({
      ...filters,
      [category]: updated,
    });
  };

  const hasActiveFilters =
    filters.roles.length > 0 ||
    filters.subjects.length > 0 ||
    filters.difficulties.length > 0;

  return (
    <>
      <Panel>
        <PanelHeader className="py-4">
          <PanelTitle>Interview Questions</PanelTitle>
        </PanelHeader>

        {/* Search and Filter Section */}
        <div className="px-4 py-4 space-y-4 border-t border-border bg-muted/30">
          {/* Search Bar */}
          <div className="flex gap-2">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search questions and tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 bg-background"
              />
            </div>
            <Button
              variant={showBookmarkedOnly ? "default" : "secondary"}
              size="default"
              onClick={() => setShowBookmarkedOnly(!showBookmarkedOnly)}
              className={cn(
                showBookmarkedOnly && "bg-primary text-primary-foreground"
              )}
            >
              <BookmarkIcon className={cn("size-4", showBookmarkedOnly && "fill-current")} />
            </Button>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2 items-center bg-background p-3 border border-border">
            <span className="text-xs font-semibold text-foreground">Difficulty:</span>
            {quickFilterDifficulties.map((difficulty) => (
              <Badge
                key={difficulty}
                variant={filters.difficulties.includes(difficulty as never) ? "default" : "secondary"}
                className={cn(
                  "cursor-pointer hover:opacity-80 transition-opacity",
                  filters.difficulties.includes(difficulty as never) && difficulty === "Easy" && "bg-accent text-accent-foreground",
                  filters.difficulties.includes(difficulty as never) && difficulty === "Medium" && "bg-primary text-primary-foreground",
                  filters.difficulties.includes(difficulty as never) && difficulty === "Hard" && "bg-destructive text-destructive-foreground"
                )}
                onClick={() => toggleQuickFilter("difficulties", difficulty)}
              >
                {difficulty}
              </Badge>
            ))}
            <Button
              variant="default"
              size="sm"
              onClick={() => setShowFilterDialog(true)}
              className="ml-auto gap-1.5 bg-primary text-primary-foreground"
            >
              <FilterIcon className="size-3.5" />
              All Filters
              {hasActiveFilters && (
                <Badge variant="secondary" className="ml-1 px-1.5 text-xs bg-background text-foreground">
                  {filters.roles.length +
                    filters.subjects.length +
                    filters.difficulties.length}
                </Badge>
              )}
            </Button>
          </div>
        </div>

        {/* Results Summary */}
        <div className="px-4 py-2 border-t border-border bg-accent/10">
          <p className="text-xs font-medium text-foreground">
            Showing {paginatedQuestions.length} of {filteredQuestions.length} questions
            {showBookmarkedOnly && (
              <Badge variant="secondary" className="ml-2 text-xs bg-primary/10 text-primary border-primary/20">
                {bookmarkedIds.length} bookmarked
              </Badge>
            )}
          </p>
        </div>

        {/* Questions List */}
        <div className="px-4 py-4 space-y-4 border-t border-border bg-muted/10">
          {paginatedQuestions.length === 0 ? (
            <div className="text-center py-12 bg-card border border-border p-8">
              <p className="text-sm font-medium text-foreground">No questions found</p>
              <p className="text-xs text-muted-foreground mt-1">
                Try adjusting your filters or search query
              </p>
            </div>
          ) : (
            paginatedQuestions.map((question: Question) => (
              <QuestionCard
                key={question.id}
                question={question}
                isBookmarked={bookmarkedIds.includes(question.id)}
                onToggleBookmark={toggleBookmark}
                onViewAnswer={handleViewAnswer}
              />
            ))
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="px-4 py-4 border-t border-border">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) setCurrentPage(currentPage - 1);
                    }}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>

                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter((page) => {
                    // Show first page, last page, current page, and pages around current
                    return (
                      page === 1 ||
                      page === totalPages ||
                      Math.abs(page - currentPage) <= 1
                    );
                  })
                  .map((page, index, array) => {
                    // Add ellipsis if there's a gap
                    const prevPage = array[index - 1];
                    const showEllipsis = prevPage && page - prevPage > 1;

                    return (
                      <PaginationItem key={page}>
                        {showEllipsis && (
                          <span className="px-2 text-muted-foreground">...</span>
                        )}
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(page);
                          }}
                          isActive={currentPage === page}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  })}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                    }}
                    className={
                      currentPage === totalPages ? "pointer-events-none opacity-50" : ""
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </Panel>

      <Separator />
      
      {/* Dialogs */}
      <AnswerDialog
        question={selectedQuestion}
        open={showAnswerDialog}
        onOpenChange={setShowAnswerDialog}
      />

      <FilterDialog
        open={showFilterDialog}
        onOpenChange={setShowFilterDialog}
        filters={filters}
        onFiltersChange={setFilters}
        availableFilters={availableFilters}
      />
    </>
  );
}
