import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  align?: "center" | "left";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 space-y-3",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <p className="text-sm font-medium uppercase tracking-wider text-primary">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {description && (
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
