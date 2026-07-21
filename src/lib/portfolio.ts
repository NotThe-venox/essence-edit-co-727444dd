export type Project = {
  id: string;
  title: string;
  category: "Short Form" | "Long Form" | "Commercial" | "Motion Graphics";
  tone: string; // for gradient
};

export const projects: Project[] = [
  { id: "p1", title: "Neon Nights — Brand Film", category: "Commercial", tone: "from-neutral-800 to-black" },
  { id: "p2", title: "Creator Reel — 30s Cut", category: "Short Form", tone: "from-zinc-700 to-neutral-950" },
  { id: "p3", title: "Product Launch — Aurora", category: "Motion Graphics", tone: "from-stone-800 to-black" },
  { id: "p4", title: "Podcast Highlights Vol.4", category: "Long Form", tone: "from-neutral-700 to-zinc-950" },
  { id: "p5", title: "Fashion Week Recap", category: "Short Form", tone: "from-zinc-800 to-black" },
  { id: "p6", title: "Studio Documentary", category: "Long Form", tone: "from-neutral-900 to-stone-950" },
  { id: "p7", title: "Startup Story — Series A", category: "Commercial", tone: "from-stone-700 to-black" },
  { id: "p8", title: "Kinetic Type Reel", category: "Motion Graphics", tone: "from-zinc-900 to-neutral-950" },
  { id: "p9", title: "Athlete Feature", category: "Short Form", tone: "from-neutral-800 to-zinc-950" },
];
