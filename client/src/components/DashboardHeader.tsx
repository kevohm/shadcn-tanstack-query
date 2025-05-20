import { Bell } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

interface DashboardHeaderProps {
  currentView: "student" | "mentor" | "goals" | "progress" | "milestones"
  userType: "student" | "mentor"
}

export function DashboardHeader({ currentView, userType }: DashboardHeaderProps) {
  const getTitle = () => {
    switch (currentView) {
      case "student":
        return "Student Dashboard"
      case "mentor":
        return "Mentor Dashboard"
      case "goals":
        return "Goal Setting"
      case "progress":
        return "Progress Tracking"
      case "milestones":
        return "Milestones"
      default:
        return "Dashboard"
    }
  }

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="flex flex-1 items-center gap-4">
        <h1 className="text-xl font-semibold">{getTitle()}</h1>
        {userType === "mentor" && currentView === "mentor" && (
          <Badge variant="outline" className="ml-2">Mentor View</Badge>
        )}
      </div>
      <div className="flex flex-1 items-center justify-end gap-4">
        <div className="relative w-full max-w-sm">
          <Input
            type="search"
            placeholder="Search..."
            className="w-full bg-background pr-8"
          />
        </div>
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
            3
          </span>
        </Button>
      </div>
    </header>
  )
}
