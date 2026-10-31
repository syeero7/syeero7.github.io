import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  base: "https://syeero7.github.io",
  plugins: [tailwindcss()],
})
