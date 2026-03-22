import { siteData } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="px-6 py-12">
      <div className="reveal mx-auto max-w-2xl">
        <h2 className="mb-8 text-2xl font-bold tracking-tight">
          <span className="mr-2 text-[var(--color-accent)]">/</span>
          About Me
        </h2>
        <div className="space-y-4">
          {siteData.aboutText.map((paragraph, i) => (
            <p
              key={paragraph.slice(0, 30)}
              className="text-lg leading-relaxed text-[var(--color-text-secondary)]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
