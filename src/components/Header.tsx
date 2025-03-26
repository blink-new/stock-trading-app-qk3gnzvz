
import { Bell, Search } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  return (
    <header className="border-b glass-card">
      <div className="flex h-16 items-center px-6 gap-4">
        <div className="flex-1">
          <form>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search markets..."
                className="pl-8 glass-button border-none"
              />
            </div>
          </form>
        </div>
        <ThemeToggle />
        <Button variant="ghost" size="icon" className="glass-button">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Notifications</span>
        </Button>
        <span className="h-6 w-px bg-border" />
        <Button className="glass-button" variant="ghost">
          <span>John Doe</span>
        </Button>
      </div>
    </header>
  )
}