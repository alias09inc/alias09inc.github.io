"use client";

import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/data";

type HeroSectionProps = {
  onViewWork: () => void;
};

export function HeroSection({ onViewWork }: HeroSectionProps) {
  const handleGetInTouch = () => {
    const message = encodeURIComponent(socialLinks.twitter.message);
    window.open(`${socialLinks.twitter.url}?text=${message}`, "_blank");
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden px-4 py-20 md:py-28"
    >
      <div className="bg-hero-glow pointer-events-none absolute inset-0" />
      <div className="container relative mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-6">
            <div className="border-primary/20 bg-primary/5 text-primary inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              AI/ML Engineer in Tokyo
            </div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Accelerate our future{" "}
              <span className="from-primary to-violet-500 bg-gradient-to-r bg-clip-text text-transparent">
                with AI
              </span>
            </h1>
            <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">
              {`I'm Kent, an AI/ML Engineer passionate about leveraging artificial intelligence to solve real-world problems. Also, I have some experience that building LLM from scratch and deploying AI system to production.`}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="gap-2 text-base" onClick={onViewWork}>
                View My Work
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base"
                onClick={handleGetInTouch}
              >
                Get In Touch
              </Button>
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-right-4 duration-700 delay-150 flex justify-center lg:justify-end">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-full blur-2xl"
                style={{ background: "var(--glow-primary)" }}
              />
              <div className="ring-primary/30 relative rounded-2xl p-1 ring-2">
                <Image
                  src="/user_img_full.png"
                  alt="Kent"
                  width={400}
                  height={400}
                  className="relative rounded-xl object-cover shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
