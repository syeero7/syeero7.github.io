type Project = {
  title: string
  source: string
  view?: string
  image: string
  description: string
  languages: string[]
}

export const projects: Project[] = []

projects.push({
  title: "Bash Language Server",
  source: "https://github.com/syeero7/bash_ls",
  image: "/project-bash_ls.webp",
  description:
    "Bash language server that supports hover, completion, go to definition, and find references",
  languages: ["Zig"],
})
projects.push({
  title: "ADB Explorer",
  source: "https://github.com/syeero7/adb-explorer",
  image: "/project-adb-explorer.webp",
  description:
    "A cross-platform desktop app built for file transfer and management between PC and Android mobile devices using Android Debug Bridge (ADB) protocol.",
  languages: ["Go", "Svelte", "TypeScript", "CSS"],
})
projects.push({
  title: "File Crow",
  source: "https://github.com/syeero7/filecrow",
  image: "/project-filecrow.webp",
  description: "A peer-to-peer file server for sharing files over the local network.",
  languages: ["Go", "Svelte", "TypeScript", "CSS"],
})
projects.push({
  title: "Deliverer",
  source: "https://github.com/syeero7/odin-msg-app",
  image: "/project-deliverer.webp",
  view: "https://deliverer.netlify.app",
  description: "Mobile responsive real-time messaging app built using React.",
  languages: ["React", "TypeScript", "NodeJS", "Prisma"],
})
