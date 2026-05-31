"use client";

import {
  Brain,
  FlaskConical,
  Globe,
  MapPin,
  Search,
  type LucideIcon,
} from "lucide-react";
import { GitHubIcon } from "@/components/brand-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ProjectIcon } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap: Record<ProjectIcon, LucideIcon> = {
  brain: Brain,
  search: Search,
  globe: Globe,
  flask: FlaskConical,
  "map-pin": MapPin,
};

type Project = {
  title: string;
  description: string;
  tech: string[];
  status: "Completed" | "In Progress";
  github?: string;
  gradient: string;
  icon: ProjectIcon;
  featured?: boolean;
};

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  const Icon = iconMap[project.icon];

  return (
    <Card
      className={cn(
        "border-border/50 bg-card/80 group flex flex-col overflow-hidden p-0 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-lg",
        className
      )}
    >
      <div
        className={cn(
          "relative flex h-32 items-center justify-center bg-gradient-to-br",
          project.gradient
        )}
      >
        <Icon className="h-12 w-12 text-white/90" />
        <div className="absolute top-3 right-3">
          <Badge
            variant={project.status === "Completed" ? "secondary" : "outline"}
            className="border-white/20 bg-black/20 text-white backdrop-blur"
          >
            {project.status}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        {project.github && (
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={() => window.open(project.github, "_blank")}
          >
            <GitHubIcon className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
