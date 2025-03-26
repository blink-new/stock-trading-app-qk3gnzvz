
import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"
import { Button } from "./ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative h-9 w-9 rounded-full glass-button"
    >
      <Sun 
        className="h-4 w-4 rotate-0 scale-100 transition-transform duration-300 ease-in-out dark:-rotate-90 dark:scale-0" 
      />
      <Moon 
        className="absolute h-4 w-4 rotate-90 scale-0 transition-transform duration-300 ease-in-out dark:rotate-0 dark:scale-100" 
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}