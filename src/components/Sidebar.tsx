
import { cn } from "../lib/utils"
import {
  BarChart3,
  Wallet,
  ArrowLeftRight,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "./ui/button"
import { useSidebarStore } from "../store/sidebar"

const sidebarItems = [
  { icon: BarChart3, label: "Markets", id: "markets" },
  { icon: Wallet, label: "Portfolio", id: "portfolio" },
  { icon: ArrowLeftRight, label: "Transactions", id: "transactions" },
  { icon: Settings, label: "Settings", id: "settings" },
  { icon: HelpCircle, label: "Help", id: "help" },
]

interface SidebarProps {
  onNavigate: (page: string) => void
  currentPage: string
}

export function Sidebar({ onNavigate, currentPage }: SidebarProps) {
  const { isCollapsed, toggle } = useSidebarStore()

  return (
    <div className={cn(
      "fixed top-0 left-0 h-full glass-card border-r p-4 flex flex-col gap-4 transition-all duration-300",
      isCollapsed ? "w-[80px]" : "w-[240px]"
    )}>
      <div className="flex items-center gap-2 px-2">
        <div className="w-8 h-8 rounded-full bg-primary" />
        {!isCollapsed && <span className="text-lg font-semibold">TradePro</span>}
      </div>

      <div className="space-y-2">
        {sidebarItems.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            className={cn(
              "w-full justify-start gap-2 glass-button",
              currentPage === item.id && "bg-primary text-primary-foreground hover:bg-primary/90",
              isCollapsed && "justify-center"
            )}
            onClick={() => onNavigate(item.id)}
          >
            <item.icon className="h-4 w-4" />
            {!isCollapsed && item.label}
          </Button>
        ))}
      </div>

      <div className="mt-auto">
        <Button 
          variant="ghost" 
          className={cn(
            "w-full justify-start gap-2 glass-button",
            isCollapsed && "justify-center"
          )}
          onClick={toggle}
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <>
              <ChevronLeft className="h-4 w-4" />
              Collapse
            </>
          )}
        </Button>
      </div>
    </div>
  )
}