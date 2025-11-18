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
  source: "https://github.com",
  image: "https://placehold.co/768x432.png",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
  languages: ["Go"],
});
projects.push({
  title: "Lorem Ipsum",
  source: "https://github.com",
  image: "https://placehold.co/768x432.png",
  view: "https.example.com",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
  languages: ["TypeScript", "HTML", "CSS"],
});
