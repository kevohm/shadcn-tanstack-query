import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock } from 'lucide-react'

interface GoalTemplateCardProps {
  icon: React.ReactNode
  title: string
  description: string
  category: string
  timeframe: string
  outcomes: string[]
}

export function GoalTemplateCard({ icon, title, description, category, timeframe, outcomes }: GoalTemplateCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="outline">
              {category}
            </Badge>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>{timeframe}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              {icon}
            </div>
            <h3 className="font-medium">{title}</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          <div className="space-y-2">
            <h4 className="text-xs font-medium uppercase text-muted-foreground">Key Outcomes</h4>
            <ul className="text-sm space-y-1">
              {outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button size="sm" className="w-full">Use Template</Button>
      </CardFooter>
    </Card>
  )
}
