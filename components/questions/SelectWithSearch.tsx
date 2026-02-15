"use client";

import * as React from "react";
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox";

interface SelectWithSearchProps {
  items: string[];
  value?: string[];
  onValueChange?: (value: string[] | null) => void;
  placeholder?: string;
  emptyMessage?: string;
  maxSelections?: number;
  className?: string;
}

export function SelectWithSearch({
  items,
  value,
  onValueChange,
  placeholder = "Select items...",
  emptyMessage = "No items found.",
  maxSelections = 5,
  className = "w-full",
}: SelectWithSearchProps) {
  const anchor = useComboboxAnchor();

  const handleValueChange = (newValue: string[] | null) => {
    // Prevent selecting more than maxSelections
    if (newValue && newValue.length > maxSelections) {
      return;
    }
    onValueChange?.(newValue);
  };

  const isMaxReached = value && value.length >= maxSelections;

  return (
    <div className="space-y-1 relative">
      <Combobox
        multiple
        items={items}
        value={value}
        onValueChange={handleValueChange}
      >
        <ComboboxChips ref={anchor} className={className}>
          <ComboboxValue placeholder={placeholder}>
            {(values) => (
              <React.Fragment>
                {(values as string[]).map((val: string) => (
                  <ComboboxChip key={val}>{val}</ComboboxChip>
                ))}
                <ComboboxChipsInput placeholder={!values || values.length === 0 ? placeholder : ""} />
              </React.Fragment>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxContent anchor={anchor}>
          <ComboboxEmpty>{emptyMessage}</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem 
                key={item} 
                value={item}
              >
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      {isMaxReached && (
        <p className="text-xs text-muted-foreground">
          Maximum {maxSelections} selections reached
        </p>
      )}
    </div>
  );
}
