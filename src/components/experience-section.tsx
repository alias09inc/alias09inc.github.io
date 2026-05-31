import { SectionHeading } from "@/components/section-heading";
import { TimelineItem } from "@/components/timeline-item";
import { experience } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="container mx-auto px-4 py-20">
      <SectionHeading
        eyebrow="Career"
        title="Professional Experience"
        align="left"
      />
      <div className="mx-auto max-w-3xl pl-2">
        {experience.map((exp, index) => (
          <TimelineItem
            key={`${exp.title}-${exp.period}`}
            title={exp.title}
            subtitle={exp.company}
            period={exp.period}
            description={exp.description}
            tags={exp.technologies}
            isLast={index === experience.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
