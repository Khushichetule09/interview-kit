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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface AddTagDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tagType: "role" | "language";
  onSave: (tagValue: string) => void;
}

export function AddTagDialog({
  open,
  onOpenChange,
  tagType,
  onSave,
}: AddTagDialogProps) {
  const [newTagValue, setNewTagValue] = useState("");

  const handleSave = () => {
    if (newTagValue.trim()) {
      onSave(newTagValue.trim());
      setNewTagValue("");
      onOpenChange(false);
    }
  };

  const handleClose = () => {
    setNewTagValue("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-base font-semibold">
            Add New {tagType === "role" ? "Role" : "Language"} Tag
          </DialogTitle>
          <DialogDescription>
            Add a custom tag to the {tagType === "role" ? "role" : "language"} list
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="newTag" className="text-sm font-semibold">
              Tag Name
            </Label>
            <Input
              id="newTag"
              placeholder={`Enter ${tagType} tag name...`}
              value={newTagValue}
              onChange={(e) => setNewTagValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSave();
                }
              }}
            />
          </div>
        </div>

        <DialogFooter className="flex-row gap-2 justify-end sm:justify-end">
          <Button variant="outline" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={!newTagValue.trim()}>
            Add Tag
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
