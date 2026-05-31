"use client";

import { GitHubIcon } from "@/components/brand-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { navItems, socialLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
};

export function SiteHeader({ activeSection, onNavigate }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <button
          type="button"
          onClick={() => onNavigate("hero")}
          className="flex items-center gap-3 text-left transition-opacity hover:opacity-80"
        >
          <Avatar className="h-11 w-11 ring-2 ring-primary/20">
            <AvatarImage src="/user_img.png" alt="Kent" />
            <AvatarFallback>K</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-bold tracking-tight">Kent</p>
            <p className="text-muted-foreground text-sm">AI/ML Engineer</p>
          </div>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={cn(
                "relative rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                activeSection === item.id
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="bg-primary absolute inset-x-3 -bottom-[13px] h-0.5 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="hidden h-9 w-9 md:inline-flex"
            onClick={() => window.open(socialLinks.github.url, "_blank")}
            title="GitHub"
          >
            <GitHubIcon className="h-4 w-4" />
          </Button>
          <ThemeToggle />
          <MobileNav activeSection={activeSection} onNavigate={onNavigate} />
        </div>
      </div>
    </header>
  );
}
