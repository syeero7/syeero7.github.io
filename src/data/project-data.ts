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
  source: "https://github.com/syeero7/file-crow",
  image: "/project-file-crow.webp",
  description: "A file server for sharing files over a local network via HTTP.",
  languages: ["Go"],
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
