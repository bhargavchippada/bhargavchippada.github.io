import Image from "next/image";
import { siteData } from "@/lib/data";
import { SocialIcon } from "./SocialIcons";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-6 pb-10 pt-24 text-center">
      <Image
        src={siteData.avatarUrl}
        alt={siteData.name}
        width={160}
        height={160}
        priority
        className="mb-6 rounded-full border-2 border-[var(--color-accent)]/30 shadow-lg shadow-[var(--color-accent)]/10"
      />

      <h1 className="mb-2 text-4xl font-bold tracking-tight sm:text-5xl">
        {siteData.name}
      </h1>

      <p className="mb-4 text-lg text-[var(--color-text-secondary)]">
        {siteData.bio}
      </p>

      <div className="mb-8 flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
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
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        {siteData.location}
      </div>

      <div className="flex items-center gap-3">
        {siteData.socialLinks.map((link) => (
          <SocialIcon key={link.name} link={link} />
        ))}
        <SocialIcon
          link={{ name: "Email", url: `mailto:${siteData.email}`, icon: "email" }}
        />
        <SocialIcon
          link={{ name: "Resume", url: siteData.resumeUrl, icon: "resume" }}
        />
      </div>

      <div className="mt-8 animate-bounce-subtle text-[var(--color-text-muted)]" aria-hidden="true">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
