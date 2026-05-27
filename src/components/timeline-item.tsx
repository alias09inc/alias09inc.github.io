import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type TimelineItemProps = {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  status?: "Completed" | "In Progress";
  tags?: string[];
  isLast?: boolean;
};

export function TimelineItem({
  title,
  subtitle,
  period,
  description,
  status,
  tags,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="relative flex gap-6 pb-10">
      <div className="flex flex-col items-center">
        <div className="bg-primary ring-primary/20 z-10 size-3 shrink-0 rounded-full ring-4" />
        {!isLast && (
          <div className="bg-border mt-2 w-px flex-1 min-h-[calc(100%+1rem)]" />
        )}
      </div>
      <div
        className={cn(
          "border-border/50 bg-card/80 flex-1 rounded-xl border p-6 backdrop-blur transition-all hover:shadow-md",
          "-mt-1"
        )}
      >
        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
            <p className="text-primary font-medium">{subtitle}</p>
          </div>
          <div className="flex shrink-0 flex-col items-start gap-1 sm:items-end">
            {status && (
              <Badge variant={status === "Completed" ? "default" : "secondary"}>
                {status}
              </Badge>
            )}
            <span className="text-muted-foreground text-sm font-medium">
              {period}
            </span>
          </div>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        {tags && tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
