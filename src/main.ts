import "./style.css"

const html = document.querySelector("html")!
const menu = document.querySelector<HTMLUListElement>("[data-toggle-menu]")
const btn = document.querySelector<HTMLButtonElement>("[data-toggle-drop]")
const paths = document.querySelectorAll("[data-toggle] > svg > path")
const marquee = document.querySelector<HTMLUListElement>("[data-marquee]")

marquee?.style.setProperty("--marquee-width", `${marquee?.scrollWidth}px`)
const fragment = document.createDocumentFragment()
marquee?.childNodes.forEach((node) => {
  fragment.appendChild(node.cloneNode(true))
})
marquee?.appendChild(fragment)

menu?.addEventListener("click", (e) => {
  if (!(e.target instanceof HTMLButtonElement)) return
  changeTheme(e.target.textContent.trim().toLowerCase())
  menu?.parentElement?.hidePopover()
})

const themes: Record<string, string> = {}
paths.forEach((e) => {
  const theme = e.parentElement?.parentElement?.dataset.toggle || ""
  themes[theme] = e.getAttribute("d") || ""
})

const STORAGE_KEY = "user_theme"
function changeTheme(theme?: string) {
  const t = window.localStorage.getItem(STORAGE_KEY)
  const preferredDark = window.matchMedia("(prefers-color-scheme: dark)")
  if (t && t === theme) return
  if (t && !theme) theme = t

  switch (theme) {
    case "dark":
    case "light":
      html.dataset.theme = theme
      window.localStorage.setItem(STORAGE_KEY, theme)
      break
    default:
      window.localStorage.setItem(STORAGE_KEY, "system")
      html.dataset.theme = preferredDark ? "dark" : "light"
  }

  const tmp = window.localStorage.getItem(STORAGE_KEY) || "system"
  btn?.querySelector("svg > path")?.setAttribute("d", themes[tmp]!)
  btn!.querySelector("span")!.textContent = tmp[0]?.toUpperCase() + tmp.slice(1)
}

changeTheme()
