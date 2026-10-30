package main

import (
	"html/template"
	"log"
	"os"

	"github.com/syeero7/syeero7.github.io/templates"
)

func main() {
	var tech = make(templates.TechStack)
	tech.Set("HTML", urlDevIcons("html5/html5-original"))
	tech.Set("CSS", urlDevIcons("css3/css3-original"))
	tech.Set("JavaScript", urlDevIcons("javascript/javascript-original"))
	tech.Set("Git", urlDevIcons("git/git-original"))
	tech.Set("TypeScript", urlDevIcons("typescript/typescript-original"))
	tech.Set("React", urlDevIcons("react/react-original"))
	tech.Set("NodeJS", urlDevIcons("nodejs/nodejs-original"))
	tech.Set("PostgreSQL", urlDevIcons("postgresql/postgresql-original"))
	tech.Set("Prisma", urlDevIcons("prisma/prisma-original"))
	tech.Set("Go", urlDevIcons("go/go-original-wordmark"))
	tech.Set("Svelte", urlDevIcons("svelte/svelte-original"))
	tech.Set("Zig", urlDevIcons("zig/zig-original"))

	socials := []templates.Social{
		{
			Name: "GitHub",
			URL:  "https://github.com/syeero7",
			Icon: "/github.svg",
		},
		{
			Name: "Email",
			URL:  "mailto:emal.epic690@passinbox.com",
			Icon: "/email.svg",
		},
	}

	projects := []templates.Project{
		{
			Title:       "Bash Language Server",
			SourceURL:   ghURL("bash_ls"),
			ImageURL:    "/project-bash_ls.webp",
			Description: "A language server that supports hover, completion, go to definition, and find references for Bash",
			Languages:   []string{"Zig"},
		},
		{
			Title:       "ADB Explorer",
			SourceURL:   ghURL("adb-explore"),
			ImageURL:    "/project-adb-explorer.webp",
			Description: "A cross-platform desktop app built for file transfer and management between PC and Android mobile devices using ABD (Android Debug Bridge) protocol.",
			Languages:   []string{"Go", "Svelte", "TypeScript", "CSS"},
		},
		{
			Title:       "File Crow",
			SourceURL:   ghURL("filecrow"),
			ImageURL:    "/project-filecrow.webp",
			Description: "A peer-to-peer file server for sharing files over the local network.",
			Languages:   []string{"Go", "Svelte", "TypeScript", "CSS"},
		},
		{
			Title:       "Deliverer",
			SourceURL:   ghURL("odin-msg-app"),
			ImageURL:    "/project-deliverer.webp",
			ViewURL:     "https://deliverer.netlify.app",
			Description: "Mobile responsive real-time messaging app built using React.",
			Languages:   []string{"React", "TypeScript", "NodeJS", "Prisma"},
		},
	}

	data := templates.Index{
		About: templates.About{
			ImageURL: "https://avatars.githubusercontent.com/u/175179417?v=4",
			Content: `Hi, I'm Emal. A self-taught programmer, just like most programmers. 
      I don't know what to write in this "about me" section and I don't think anyone is even reading this. 
      If you are reading this, feel free to check out some of the stuff I built below. That's all. Have a great day!`,
			SocialLinks: templates.SocialLinks{
				Socials:  socials,
				WithName: true,
			},
		},
		Projects: projects,
		Footer: templates.Footer{
			SocialLinks: templates.SocialLinks{
				Socials: socials,
			},
		},
	}

	tmplFuncs := template.FuncMap{
		"TechStack": func() templates.TechStack {
			return tech
		},
		"SVG": func(icon string) template.HTML {
			byt, err := os.ReadFile("assets" + icon)
			if err != nil {
				log.Fatal(err)
			}

			return template.HTML(byt)
		},
	}

	tmpl, err := template.New("index.html").Funcs(tmplFuncs).ParseGlob("templates/*.tmpl")
	if err != nil {
		log.Fatal(err)
	}

	if err := tmpl.ExecuteTemplate(os.Stdout, "index.tmpl", data); err != nil {
		log.Fatal(err)
	}

}

func urlDevIcons(path string) string {
	const base = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/"
	return base + path + ".svg"
}

func ghURL(project string) string {
	const base = "https://github.com/syeero7/"
	return base + project
}
