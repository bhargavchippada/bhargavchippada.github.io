export interface SocialLink {
  readonly name: string;
  readonly url: string;
  readonly icon: "github" | "linkedin" | "instagram" | "facebook" | "email" | "resume";
}

export interface Project {
  readonly title: string;
  readonly description: string;
  readonly imageUrl: string;
  readonly liveUrl?: string;
  readonly repoUrl?: string;
  readonly tags: readonly string[];
  readonly stars?: number;
}

export interface SiteData {
  readonly name: string;
  readonly bio: string;
  readonly location: string;
  readonly email: string;
  readonly avatarUrl: string;
  readonly resumeUrl: string;
  readonly aboutText: readonly string[];
  readonly socialLinks: readonly SocialLink[];
  readonly projects: readonly Project[];
}
