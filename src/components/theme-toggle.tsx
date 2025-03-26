
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "./theme-provider"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative h-9 w-9 rounded-full glass-button"
        >
          <Sun className={cn(
            "h-4 w-4 transition-all duration-300",
            theme === "light" ? "scale-100 rotate-0" : "scale-0 -rotate-90",
          )} />
          <Moon className={cn(
            "absolute h-4 w-4 transition-all duration-300",
            theme === "dark" ? "scale-100 rotate-0" : "scale-0 rotate-90",
          )} />
          <Monitor className={cn(
            "absolute h-4 w-4 transition-all duration-300",
            theme === "system" ? "scale-100 rotate-0" : "scale-0 rotate-90",
          )} />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="glass-card">
        <DropdownMenuItem 
          onClick={() => setTheme("light")}
          className={cn(
            "cursor-pointer transition-colors",
            theme === "light" && "text-success"
          )}
        >
          <Sun className="h-4 w-4 mr-2" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")}
          className={cn(
            "cursor-pointer transition-colors",
            theme === "dark" && "text-success"
          )}
        >
          <Moon className="h-4 w-4 mr-2" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("system")}
          className={cn(
            "cursor-pointer transition-colors",
            theme === "system" && "text-success"
          )}
        >
          <Monitor className="h-4 w-4 mr-2" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}