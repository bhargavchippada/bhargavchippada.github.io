import type { SiteData } from "@/types";

export const siteData: SiteData = {
  name: "Bhargav Chippada",
  bio: "SOUL.md",
  location: "Mountain View, US",
  email: "bhargavchippada19@gmail.com",
  avatarUrl: "/images/profile-photo.jpg",
  aboutText: [
    "I am a Software Engineer specializing in Machine Learning at Google, where I currently develop multi-modal search experiences for Google Lens and advanced video understanding for Shopping Video Search.",
    "I hold a Master of Science in Computer Science with an AI concentration from the University of Massachusetts Amherst and a Bachelor of Technology in Computer Science and Engineering from IIT Bombay.",
    "Throughout my career at companies like Microsoft, Amazon, and Ola Cabs, I have developed a deep expertise in large-scale distributed systems, geospatial technologies, and deep learning. In my free time I build agentic systems.",
  ],
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/bhargavchippada",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/bhargavchippada",
      icon: "linkedin",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/bhargavchips",
      icon: "instagram",
    },
    {
      name: "Facebook",
      url: "https://facebook.com/bhargavchippada",
      icon: "facebook",
    },
  ],
  projects: [
    {
      title: "ForceAtlas2",
      description:
        "Fastest Python implementation of Gephi's ForceAtlas2 graph layout algorithm. Supports NetworkX, igraph, and raw adjacency matrices with Cython optimization for 10-100x speedup.",
      imageUrl: "/images/forceatlas2-animation.gif",
      liveUrl: "https://github.com/bhargavchippada/forceatlas2",
      repoUrl: "https://github.com/bhargavchippada/forceatlas2",
      tags: ["Python", "Cython", "NetworkX", "Graph Visualization"],
      stars: 308,
    },
    {
      title: "Faster Whisper Dictation",
      description:
        "Real-time speech-to-text dictation powered by faster-whisper. Fully offline, privacy-first — no cloud APIs, no data leaves your machine. Cross-platform with hotkey support.",
      imageUrl: "/images/faster-whisper-dictation-demo-cropped.gif",
      liveUrl: "https://github.com/bhargavchippada/faster-whisper-dictation",
      repoUrl: "https://github.com/bhargavchippada/faster-whisper-dictation",
      tags: ["Python", "Whisper", "Speech-to-Text", "Privacy"],
    },
  ],
};
