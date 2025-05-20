import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Calendar, CheckCircle, Clock, Flag, MessageSquare } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { GoalCard } from "@/components/GoalCard"
import { MilestoneAlert } from "@/components/MilestoneAlert"

export function StudentDashboard() {
  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-4 md:flex-row">
        <Card className="flex-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Career Progress</CardTitle>
            <CardDescription>Your journey to becoming a Senior Developer</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mt-2 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Overall Progress</span>
                  <span className="text-sm text-muted-foreground">42%</span>
                </div>
                <Progress value={42} className="h-2" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">Completed Goals</span>
                  </div>
                  <p className="text-2xl font-bold">12</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Flag className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Active Goals</span>
                  </div>
                  <p className="text-2xl font-bold">5</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <BarChart className="h-4 w-4 text-blue-500" />
                    <span className="text-sm font-medium">Skills Gained</span>
                  </div>
                  <p className="text-2xl font-bold">18</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-amber-500" />
                    <span className="text-sm font-medium">Learning Hours</span>
                  </div>
                  <p className="text-2xl font-bold">124</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="flex-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Upcoming Sessions</CardTitle>
            <CardDescription>Scheduled mentoring sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-lg border p-3">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Mentor" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Goal Review Session</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>Tomorrow</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">With Sarah Miller</p>
                  <div className="flex items-center gap-2 pt-2">
                    <Button size="sm" variant="default">Join</Button>
                    <Button size="sm" variant="outline">Reschedule</Button>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-4 rounded-lg border p-3">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Mentor" />
                  <AvatarFallback>JT</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Technical Interview Prep</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>Fri, 10:00 AM</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">With James Thompson</p>
                  <div className="flex items-center gap-2 pt-2">
                    <Button size="sm" variant="default">Join</Button>
                    <Button size="sm" variant="outline">Reschedule</Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <MilestoneAlert 
        title="Congratulations! You've completed the React Advanced course"
        description="You've reached a learning milestone. This puts you one step closer to your 'Master Frontend Development' goal."
        type="achievement"
      />
      
      <Tabs defaultValue="active-goals">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="active-goals">Active Goals</TabsTrigger>
            <TabsTrigger value="recent-progress">Recent Progress</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>
          <Button size="sm">
            <Flag className="mr-2 h-4 w-4" />
            Create New Goal
          </Button>
        </div>
        
        <TabsContent value="active-goals" className="mt-6 space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <GoalCard 
              title="Master React.js" 
              category="Learning"
              progress={75}
              dueDate="2 weeks left"
              tasks={{completed: 6, total: 8}}
              collaborators={3}
            />
            
            <GoalCard 
              title="Build Portfolio Website" 
              category="Project"
              progress={40}
              dueDate="1 month left"
              tasks={{completed: 4, total: 10}}
              collaborators={1}
            />
            
            <GoalCard 
              title="Complete System Design Course" 
              category="Learning"
              progress={20}
              dueDate="2 months left"
              tasks={{completed: 2, total: 10}}
              collaborators={0}
            />
            
            <GoalCard 
              title="Attend Tech Conference" 
              category="Experience"
              progress={10}
              dueDate="3 months left"
              tasks={{completed: 1, total: 5}}
              collaborators={2}
            />
            
            <GoalCard 
              title="Contribute to Open Source" 
              category="Project"
              progress={30}
              dueDate="Ongoing"
              tasks={{completed: 3, total: 10}}
              collaborators={0}
            />
          </div>
        </TabsContent>
        
        <TabsContent value="recent-progress" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4 border-b pb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Completed React Router Module</p>
                      <span className="text-xs text-muted-foreground">2 days ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Part of "Master React.js" goal</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 border-b pb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                    <BarChart className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Added 8 hours of learning time</p>
                      <span className="text-xs text-muted-foreground">3 days ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground">System Design fundamentals</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 border-b pb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                    <Flag className="h-4 w-4 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Created new goal: "Contribute to Open Source"</p>
                      <span className="text-xs text-muted-foreground">1 week ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Project goal with 10 tasks</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100">
                    <MessageSquare className="h-4 w-4 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Received feedback from mentor</p>
                      <span className="text-xs text-muted-foreground">1 week ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground">On your portfolio website design</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="messages" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4 border-b pb-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Mentor" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Sarah Miller</p>
                      <span className="text-xs text-muted-foreground">Yesterday</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Great progress on your React project! I've left some comments on your code review.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 border-b pb-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Mentor" />
                    <AvatarFallback>JT</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">James Thompson</p>
                      <span className="text-xs text-muted-foreground">3 days ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Let's prepare for your upcoming technical interview. I've shared some resources to help you get ready.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="System" />
                    <AvatarFallback>CP</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">CareerPath System</p>
                      <span className="text-xs text-muted-foreground">1 week ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Your goal "Master React.js" is 75% complete. Keep up the good work!</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
