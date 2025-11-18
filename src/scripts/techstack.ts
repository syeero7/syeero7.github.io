const techstack: Record<string, string> = {};

function set(name: string, url: string) {
  techstack[name] = url;
}

export function get(name: string) {
  if (!techstack[name]) throw new Error(`"${name}" is not in the techstack`);
  return techstack[name];
}

export function getAll() {
  return Object.entries(techstack).map((t) => ({ name: t[0], url: t[1] }));
}

set(
  "HTML",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
);
set(
  "CSS",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
);
set(
  "JavaScript",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
);
set(
  "Git",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
);
set(
  "TypeScript",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
);
set(
  "React",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
);
set(
  "NodeJS",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
);
set(
  "PostgreSQL",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
);
set(
  "Prisma",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
);
set(
  "Go",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg",
);
