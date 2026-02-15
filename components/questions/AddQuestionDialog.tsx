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
import { QuestionDifficulty } from "@/types/question";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Sparkles, Wand2, Plus } from "lucide-react";
import { SelectWithSearch } from "./SelectWithSearch";
import { AddTagDialog } from "./AddTagDialog";

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
  const [difficulties, setDifficulties] = useState<QuestionDifficulty[]>([]);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [showAddTagDialog, setShowAddTagDialog] = useState(false);
  const [tagType, setTagType] = useState<"role" | "language">("role");

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

  const handleAnswerWithAI = () => {
    console.log("Answer with AI - to be implemented");
  };

  const handleEnhance = () => {
    console.log("Enhance - to be implemented");
  };

  const handleAddTag = (type: "role" | "language") => {
    setTagType(type);
    setShowAddTagDialog(true);
  };

  const handleSaveNewTag = (tagValue: string) => {
    console.log(`Add new ${tagType} tag:`, tagValue);
  };

  const handleSubmit = () => {
    const submissionData = {
      question: question.trim(),
      answer: answer.trim(),
      difficulties,
      roleTags: selectedRoles,
      subjectTags: selectedSubjects,
    };
    
    console.log("=== Submit for Review ===");
    console.log("Question:", submissionData.question);
    console.log("Answer:", submissionData.answer);
    console.log("Difficulties:", submissionData.difficulties);
    console.log("Role Tags:", submissionData.roleTags);
    console.log("Subject Tags:", submissionData.subjectTags);
    console.log("Full Data:", submissionData);
    console.log("========================");
    
    // Reset form
    setQuestion("");
    setAnswer("");
    setDifficulties([]);
    setSelectedRoles([]);
    setSelectedSubjects([]);
    onOpenChange(false);
  };

  const isFormValid = 
    question.trim() !== "" &&
    answer.trim() !== "" &&
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
          {/* LEFT SIDE - Question and Answer */}
          <div className="space-y-4">
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
                  >
                    <Sparkles className="size-3.5" />
                    Ask AI
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handleEnhance}
                    className="gap-1.5"
                    type="button"
                  >
                    <Wand2 className="size-3.5" />
                    Enhance
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
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!isFormValid}
          >
            Submit for Review
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
