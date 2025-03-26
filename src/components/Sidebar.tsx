
import { cn } from "@/lib/utils"
import {
  BarChart3,
  Wallet,
  ArrowLeftRight,
  Settings,
  HelpCircle,
  ChevronLeft,
} from "lucide-react"
import { Button } from "./ui/button"

const sidebarItems = [
  { icon: BarChart3, label: "Markets", active: true },
  { icon: Wallet, label: "Portfolio" },
  { icon: ArrowLeftRight, label: "Transactions" },
  { icon: Settings, label: "Settings" },
  { icon: HelpCircle, label: "Help" },
]

export function Sidebar() {
  return (
    <div className="w-[240px] glass-card border-r p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2 px-2">
        <div className="w-8 h-8 rounded-full bg-primary" />
        <span className="text-lg font-semibold">TradePro</span>
      </div>

      <div className="space-y-2">
        {sidebarItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            className={cn(
              "w-full justify-start gap-2 glass-button",
              item.active && "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Button>
        ))}
      </div>

      <div className="mt-auto">
        <Button variant="ghost" className="w-full justify-start gap-2 glass-button">
          <ChevronLeft className="h-4 w-4" />
          Collapse
        </Button>
      </div>
    </div>
  )
}