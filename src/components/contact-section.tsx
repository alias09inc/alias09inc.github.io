"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { socialLinks } from "@/lib/data";

export function ContactSection() {
  const handleSendMessage = () => {
    const message = encodeURIComponent(socialLinks.twitter.message);
    window.open(`${socialLinks.twitter.url}?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="container mx-auto px-4 py-20">
      <SectionHeading
        eyebrow="Connect"
        title="Let's Work Together"
        description="I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas to life."
      />
      <div className="mx-auto max-w-2xl">
        <div className="from-primary via-violet-500 to-indigo-600 rounded-2xl bg-gradient-to-r p-[1px]">
          <div className="bg-card/95 rounded-2xl p-8 text-center backdrop-blur md:p-12">
            <div className="bg-primary/10 text-primary mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full">
              <MessageCircle className="h-7 w-7" />
            </div>
            <p className="text-muted-foreground mb-8 text-lg">
              Ready to collaborate on AI/ML projects? Reach out and let&apos;s
              start a conversation.
            </p>
            <Button size="lg" className="gap-2 text-base" onClick={handleSendMessage}>
              <MessageCircle className="h-4 w-4" />
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
