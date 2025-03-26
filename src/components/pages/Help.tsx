
import { Card } from "../ui/card"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Search, ChevronRight } from "lucide-react"

const faqItems = [
  {
    question: "How do I get started with trading?",
    answer: "Start by completing your account verification, adding funds, and exploring the Markets page."
  },
  {
    question: "What are the trading fees?",
    answer: "Trading fees vary by volume and asset. Check our fee schedule for detailed information."
  },
  {
    question: "How to secure my account?",
    answer: "Enable 2FA, use a strong password, and regularly update your security settings."
  },
]

const quickLinks = [
  { title: "Trading Guide", description: "Learn the basics of trading" },
  { title: "Security Tips", description: "Keep your account safe" },
  { title: "API Documentation", description: "Integrate with our platform" },
]

export function Help() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Help Center</h1>

      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search help articles..."
          className="pl-8 glass-button"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="glass-card">
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <div className="space-y-4">
              {quickLinks.map((link) => (
                <Button
                  key={link.title}
                  variant="ghost"
                  className="w-full justify-between glass-button"
                >
                  <div className="text-left">
                    <p className="font-medium">{link.title}</p>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </div>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </div>
        </Card>

        <Card className="glass-card">
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <div key={item.question} className="space-y-2">
                  <h3 className="font-medium">{item.question}</h3>
                  <p className="text-sm text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      <Card className="glass-card">
        <div className="p-6 text-center">
          <h2 className="text-lg font-semibold mb-2">Need More Help?</h2>
          <p className="text-muted-foreground mb-4">Our support team is available 24/7</p>
          <Button className="glass-button">Contact Support</Button>
        </div>
      </Card>
    </div>
  )
}