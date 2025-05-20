import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckSquare, Clock, MoreHorizontal, Users } from 'lucide-react'

interface GoalCardProps {
  title: string
  category: "Learning" | "Project" | "Career" | "Experience"
  progress: number
  dueDate: string
  tasks: {
    completed: number
    total: number
  }
  collaborators: number
}

export function GoalCard({ title, category, progress, dueDate, tasks, collaborators }: GoalCardProps) {
  const getCategoryColor = () => {
    switch (category) {
      case "Learning":
        return "bg-blue-50 text-blue-700"
      case "Project":
        return "bg-purple-50 text-purple-700"
      case "Career":
        return "bg-green-50 text-green-700"
      case "Experience":
        return "bg-amber-50 text-amber-700"
      default:
        return "bg-gray-50 text-gray-700"
    }
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="outline" className={getCategoryColor()}>
              {category}
            </Badge>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">More options</span>
            </Button>
          </div>
          <h3 className="font-medium text-lg mb-2">{title}</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
        <div className="border-t px-4 py-3 bg-muted/30 flex items-center justify-between text-sm">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{dueDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckSquare className="h-4 w-4 text-muted-foreground" />
            <span>{tasks.completed}/{tasks.total} tasks</span>
          </div>
          {collaborators > 0 && (
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span>{collaborators}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button size="sm" className="w-full">View</Button>
        <Button size="sm" variant="outline" className="w-full">Edit</Button>
      </CardFooter>
    </Card>
  )
}
