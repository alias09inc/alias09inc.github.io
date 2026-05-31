import { SectionHeading } from "@/components/section-heading";
import { skillCategories } from "@/lib/data";
import { cn } from "@/lib/utils";

export function SkillsSection() {
  return (
    <section id="skills" className="container mx-auto px-4 py-20">
      <SectionHeading
        eyebrow="Expertise"
        title="Technologies I Work With"
        description="Tools and frameworks I use to build intelligent systems."
      />
      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
        {skillCategories.map((category) => (
          <div
            key={category.name}
            className="border-border/50 bg-card/80 group rounded-xl border p-6 backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            <h3 className="text-primary mb-4 text-sm font-semibold uppercase tracking-wider">
              {category.name}
            </h3>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className={cn(
                    "text-foreground rounded-lg px-3 py-2 text-sm font-medium",
                    "bg-muted/50 transition-colors group-hover:bg-primary/5"
                  )}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
