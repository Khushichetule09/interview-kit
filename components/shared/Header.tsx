"use client";

import { Menu, X } from "lucide-react";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useClickOutside } from "@/hooks/use-click-outside";
import { useIsMobile } from "@/hooks/use-mobile";
import { PlaceholderLogo } from "@/components/ui/placeholder-logo";
import Link from "next/link";
import { ModeToggle } from "../ui/mode-toggle";

// Defaults to Tailwind's md: breakpoint.
// Change to 1024 + use lg: classes for 1024px breakpoint or whatever breakpoint you want to use
const MOBILE_BREAKPOINT = 768;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const navigationContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile(MOBILE_BREAKPOINT);

  useClickOutside(navigationContainerRef, () => {
    if (isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  });

  return (
    // To make this a sticky navigation, you can add `sticky top-0 z-50` classes to the parent div
    <div
      className="w-full bg-background py-3.5 transition-all ease-in-out"
      role="navigation"
      aria-label="Website top navigation"
      ref={navigationContainerRef}
    >
      <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-x-5 px-5 md:flex-row lg:gap-x-9 lg:px-8">
        {/* Logo and Toggle Mobile Nav Button */}
        <div className="flex items-center justify-between">
          {/* Replace with actual logo */}
          <Link href="/" aria-label="Go to home page">
            <PlaceholderLogo />
          </Link>

          {/* Toggle Mobile Nav Button - Visible on screen sizes < 768px */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMenuOpen ? (
              <X className="animate-in zoom-in-50" />
            ) : (
              <Menu className="animate-in zoom-in-50" />
            )}
          </Button>
        </div>

        {/* Desktop Navigation - Visible on screen sizes ≥ 768px */}
        <div className="hidden flex-1 justify-between gap-4 md:flex md:items-center">
          <nav className="mx-auto flex items-center gap-2">
            {NAV_ITEMS.map((item) => {
              // Replace with actual active link detection

              const isActive = item.href === "/pathname";
              return (
                // Replace with actual navigation link
                <a
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-foreground text-foreground/70",
                    isActive && "bg-accent text-accent-foreground"
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <ActionButtons />
        </div>

        {/* Mobile Navigation - Visible on screen sizes < 768px */}
        <div
          className={cn(
            "grid transition-all duration-300 ease-in-out md:hidden",
            isMenuOpen
              ? "grid-rows-[1fr] pt-5 opacity-100"
              : "pointer-events-none grid-rows-[0fr] opacity-0"
          )}
        >
          <div
            className={cn(isMenuOpen ? "overflow-visible" : "overflow-hidden")}
            inert={!isMenuOpen || undefined}
            aria-hidden={!isMenuOpen}
          >
            <div className="flex flex-col gap-9">
              <nav className="flex flex-col gap-2">
                {NAV_ITEMS.map((item) => {
                  // Replace with actual active link detection

                  const isActive = item.href === "/pathname";
                  return (
                    // Replace with actual navigation link
                    <a
                      key={item.label}
                      href={item.href}
                      className={cn(
                        "rounded-md px-2 py-3.5 text-base font-medium transition-colors hover:bg-accent/50 hover:text-accent-foreground",
                        isActive && "bg-accent text-accent-foreground"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>

              <ActionButtons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="flex flex-col gap-2 md:flex-row">
      <ModeToggle />
    </div>
  );
}

const NAV_ITEMS = [
  { label: "Questions", href: "/questions" },
  { label: "AI Chatbot", href: "/ai" }
];
