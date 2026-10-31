package templates

import "log"

type Index struct {
	About    About
	Projects []Project
	Footer   Footer
}

type About struct {
	ImageURL    string
	Content     string
	SocialLinks SocialLinks
}

type TechStack map[string]string

func (t TechStack) Get(name string) string {
	url, ok := t[name]
	if !ok {
		log.Panicln(name, " does not exist")
	}

	return url
}

func (t TechStack) Set(key, val string) {
	t[key] = val
}

type Project struct {
	Title       string
	SourceURL   string
	ViewURL     string
	ImageURL    string
	Description string
	Languages   []string
}

type Footer struct {
	SocialLinks SocialLinks
}

type SocialLinks struct {
	Socials  []Social
	WithName bool
}

type Social struct {
	Name string
	URL  string
	Icon string
}
