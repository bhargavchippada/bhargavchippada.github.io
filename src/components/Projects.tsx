import { siteData } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  if (siteData.projects.length === 0) {
    return (
      <section id="projects" className="px-6 py-12">
        <div className="reveal mx-auto max-w-2xl">
          <h2 className="mb-10 text-2xl font-bold tracking-tight">
            <span className="mr-2 text-[var(--color-accent)]">/</span>
            Projects
          </h2>
          <p className="text-[var(--color-text-muted)]">Coming soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="px-6 py-12">
      <div className="reveal mx-auto max-w-2xl">
        <h2 className="mb-10 text-2xl font-bold tracking-tight">
          <span className="mr-2 text-[var(--color-accent)]">/</span>
          Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {siteData.projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
