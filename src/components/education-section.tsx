import { SectionHeading } from "@/components/section-heading";
import { TimelineItem } from "@/components/timeline-item";
import { education } from "@/lib/data";

export function EducationSection() {
  return (
    <section id="education" className="container mx-auto px-4 py-20">
      <SectionHeading eyebrow="Background" title="Education" align="left" />
      <div className="mx-auto max-w-3xl pl-2">
        {education.map((edu, index) => (
          <TimelineItem
            key={edu.title}
            title={edu.title}
            subtitle={edu.institution}
            period={edu.period}
            description={edu.description}
            status={edu.status}
            isLast={index === education.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
