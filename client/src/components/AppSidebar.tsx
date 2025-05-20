import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem, 
  SidebarTrigger 
} from "@/components/ui/sidebar"
import { BarChart3, Flag, GraduationCap, Home, Lightbulb, Settings, Trophy, Users } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

interface AppSidebarProps {
  onViewChange: (view: "student" | "mentor" | "goals" | "progress" | "milestones") => void
  userType: "student" | "mentor"
  onUserTypeChange: (type: "student" | "mentor") => void
}

export function AppSidebar({ onViewChange, userType, onUserTypeChange }: AppSidebarProps) {
  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <div className="flex items-center gap-2 px-2 py-3">
          <GraduationCap className="h-6 w-6 text-primary" />
          <div className="font-semibold text-lg">CareerPath</div>
          <SidebarTrigger className="ml-auto" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={userType === "student"}
                  onClick={() => onViewChange("student")}
                >
                  <Home />
                  <span>Student Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={userType === "mentor"}
                  onClick={() => onViewChange("mentor")}
                >
                  <Users />
                  <span>Mentor Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Career Tools</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={false}
                  onClick={() => onViewChange("goals")}
                >
                  <Flag />
                  <span>Goal Setting</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={false}
                  onClick={() => onViewChange("progress")}
                >
                  <BarChart3 />
                  <span>Progress Tracking</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={false}
                  onClick={() => onViewChange("milestones")}
                >
                  <Trophy />
                  <span>Milestones</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Resources</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Lightbulb />
                  <span>Learning Resources</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Settings />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Jane Doe</span>
            <span className="text-xs text-muted-foreground">Software Developer</span>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <Label htmlFor="user-mode" className="text-xs">View as Mentor</Label>
          <Switch 
            id="user-mode" 
            checked={userType === "mentor"}
            onCheckedChange={(checked) => onUserTypeChange(checked ? "mentor" : "student")}
          />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
