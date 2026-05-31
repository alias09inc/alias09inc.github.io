"use client";

import Image from "next/image";
import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { socialLinks } from "@/lib/data";

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H6.131l-2.303 9.258-3.42-9.258H.75l8.163-9.336L.75 2.25H6.68l4.713 6.231 5.841-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-background/80 backdrop-blur">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full"
              onClick={() => window.open(socialLinks.twitter.url, "_blank")}
              title="X (Twitter)"
            >
              <XIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full"
              onClick={() => window.open(socialLinks.linkedin.url, "_blank")}
              title="LinkedIn"
            >
              <LinkedInIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full"
              onClick={() => window.open(socialLinks.github.url, "_blank")}
              title="GitHub"
            >
              <GitHubIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full"
              onClick={() => window.open(socialLinks.note.url, "_blank")}
              title="note"
            >
              <Image
                src="/notion.svg"
                alt="note"
                width={16}
                height={16}
                className="dark:invert"
              />
            </Button>
          </div>
          <Separator className="max-w-xs" />
          <p className="text-muted-foreground text-sm">
            © 2025 Kent. Built with Next.js and shadcn/ui.
          </p>
        </div>
      </div>
    </footer>
  );
}
