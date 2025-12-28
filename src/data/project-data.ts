type Project = {
  title: string;
  source: string;
  view?: string;
  image: string;
  description: string;
  languages: string[];
};

export const projects: Project[] = [];

projects.push({
  title: "File Crow",
  source: "https://github.com/syeero7/filecrow",
  image: "/project-filecrow.webp",
  description:
    "A peer-to-peer file server for sharing files over the local network.",
  languages: ["Go", "TypeScript", "HTML", "CSS"],
});
projects.push({
  title: "Chess",
  source: "https://github.com/syeero7/chess-game",
  image: "/project-chess.webp",
  view: "https://xchess.netlify.app",
  description:
    "A client-side chess game featuring offline modes for player vs player and player vs AI gameplay.",
  languages: ["TypeScript", "HTML", "CSS"],
});
projects.push({
  title: "Deliverer",
  source: "https://github.com/syeero7/odin-msg-app",
  image: "/project-deliverer.webp",
  view: "https://deliverer.netlify.app",
  description: "Mobile responsive real-time messaging app built using React.",
  languages: ["React", "TypeScript", "NodeJS", "Prisma"],
});
