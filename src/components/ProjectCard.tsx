import Image from "next/image";
import type { Project } from "@/types";

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export function ProjectCard({ project }: { readonly project: Project }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/30 hover:shadow-lg hover:shadow-[var(--color-accent)]/5">
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-bg-primary)]">
        <Image
          src={project.imageUrl}
          alt={`Screenshot of ${project.title}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          {project.stars != null && (
            <span className="flex items-center gap-1 text-sm text-[var(--color-text-muted)]">
              <svg
                aria-hidden="true"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-yellow-400"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              {project.stars.toLocaleString()}
            </span>
          )}
        </div>
        <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[var(--color-accent)]/15 px-3 py-1 text-xs font-medium text-[var(--color-accent)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${project.title}`}
              className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)]"
            >
              View Live
              <ArrowIcon />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code for ${project.title}`}
              className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
            >
              Source
              <ArrowIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
