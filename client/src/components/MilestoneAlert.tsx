import { AlertCircle, Award, CheckCircle, Trophy, X, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface MilestoneAlertProps {
  title: string
  description: string
  type: "achievement" | "streak" | "feedback" | "career" | "community"
}

export function MilestoneAlert({ title, description, type }: MilestoneAlertProps) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  const getIcon = () => {
    switch (type) {
      case "achievement":
        return <Trophy className="h-6 w-6 text-amber-500" />
      case "streak":
        return <CheckCircle className="h-6 w-6 text-green-500" />
      case "feedback":
        return <AlertCircle className="h-6 w-6 text-blue-500" />
      case "career":
        return <Award className="h-6 w-6 text-purple-500" />
      case "community":
        return <Users className="h-6 w-6 text-indigo-500" />
      default:
        return <Trophy className="h-6 w-6 text-amber-500" />
    }
  }

  const getBgColor = () => {
    switch (type) {
      case "achievement":
        return "bg-amber-50 border-amber-200"
      case "streak":
        return "bg-green-50 border-green-200"
      case "feedback":
        return "bg-blue-50 border-blue-200"
      case "career":
        return "bg-purple-50 border-purple-200"
      case "community":
        return "bg-indigo-50 border-indigo-200"
      default:
        return "bg-amber-50 border-amber-200"
    }
  }

  return (
    <div className={`relative rounded-lg border p-4 ${getBgColor()}`}>
      <Button 
        variant="ghost" 
        size="icon" 
        className="absolute right-2 top-2 h-6 w-6 text-muted-foreground hover:text-foreground"
        onClick={() => setIsVisible(false)}
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Dismiss</span>
      </Button>
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white">
          {getIcon()}
        </div>
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-auto flex gap-2">
          <Button size="sm">Share</Button>
          <Button size="sm" variant="outline">View Details</Button>
        </div>
      </div>
    </div>
  )
}
