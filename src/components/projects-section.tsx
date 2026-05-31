import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p !== featured);

  return (
    <section id="projects" className="container mx-auto px-4 py-20">
      <SectionHeading
        eyebrow="Portfolio"
        title="Featured Projects"
        description="Research, internships, and products I've built."
      />
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          project={featured}
          className={cn("md:col-span-2 lg:col-span-2")}
        />
        {rest.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
