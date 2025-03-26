
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { ThemeToggle } from "@/components/theme-toggle"

export function Settings() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>

      <Card className="glass-card">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Appearance</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="theme">Theme</Label>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </Card>

      <Card className="glass-card">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">API Configuration</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="apiKey">API Key</Label>
              <Input id="apiKey" type="password" value="••••••••••••••••" className="glass-button" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="secretKey">Secret Key</Label>
              <Input id="secretKey" type="password" value="••••••••••••••••" className="glass-button" />
            </div>
            <Button className="glass-button">Update Keys</Button>
          </div>
        </div>
      </Card>

      <Card className="glass-card">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Notifications</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="priceAlerts">Price Alerts</Label>
              <Switch id="priceAlerts" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="tradingUpdates">Trading Updates</Label>
              <Switch id="tradingUpdates" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="newsAlerts">News Alerts</Label>
              <Switch id="newsAlerts" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}