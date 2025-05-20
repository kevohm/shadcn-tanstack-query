import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar, CheckCircle, Clock, Flag, GraduationCap, MessageSquare, Trophy, Users } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MilestoneAlert } from "@/components/MilestoneAlert"

interface MilestoneViewProps {
  userType: "student" | "mentor"
}

export function MilestoneView({ userType }: MilestoneViewProps) {
  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold tracking-tight">Milestones</h2>
        <p className="text-muted-foreground">
          {userType === "student" 
            ? "Track your achievements and celebrate your progress." 
            : "Monitor and recognize your mentees' achievements."}
        </p>
      </div>
      
      {userType === "student" && (
        <MilestoneAlert 
          title="Congratulations! You've completed the React Advanced course"
          description="You've reached a learning milestone. This puts you one step closer to your 'Master Frontend Development' goal."
          type="achievement"
        />
      )}
      
      <Tabs defaultValue="upcoming">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="achieved">Achieved</TabsTrigger>
          <TabsTrigger value="all">All Milestones</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4 border-b pb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                    <Trophy className="h-5 w-5 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Complete React.js Mastery</h3>
                      <Badge variant="outline" className="bg-amber-50 text-amber-700">Achievement</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Complete all tasks in the "Master React.js" goal</p>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <Flag className="h-4 w-4 text-primary" />
                        <span>75% Complete</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>Expected in 2 weeks</span>
                      </div>
                    </div>
                    
                    {userType === "student" && (
                      <Button size="sm" variant="outline" className="mt-4">
                        View Remaining Tasks
                      </Button>
                    )}
                    
                    {userType === "mentor" && (
                      <div className="mt-4 flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Mentee" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">Jane Doe</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex items-start gap-4 border-b pb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <GraduationCap className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">System Design Certification</h3>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700">Learning</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Complete the System Design course and pass the certification</p>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <Flag className="h-4 w-4 text-primary" />
                        <span>20% Complete</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>Expected in 2 months</span>
                      </div>
                    </div>
                    
                    {userType === "student" && (
                      <Button size="sm" variant="outline" className="mt-4">
                        View Remaining Tasks
                      </Button>
                    )}
                    
                    {userType === "mentor" && (
                      <div className="mt-4 flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Mentee" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">Jane Doe</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <Award className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">First Open Source Contribution</h3>
                      <Badge variant="outline" className="bg-green-50 text-green-700">Experience</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Make your first contribution to an open source project</p>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <Flag className="h-4 w-4 text-primary" />
                        <span>30% Complete</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>Expected in 1 month</span>
                      </div>
                    </div>
                    
                    {userType === "student" && (
                      <Button size="sm" variant="outline" className="mt-4">
                        View Remaining Tasks
                      </Button>
                    )}
                    
                    {userType === "mentor" && (
                      <div className="mt-4 flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Mentee" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">Jane Doe</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="achieved" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4 border-b pb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">React Fundamentals Mastery</h3>
                      <Badge variant="outline" className="bg-green-50 text-green-700">Achievement</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Completed the React Fundamentals course with distinction</p>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Achieved 2 weeks ago</span>
                      </div>
                      
                      {userType === "mentor" && (
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="outline">Send Congratulations</Button>
                        </div>
                      )}
                    </div>
                    
                    {userType === "student" && (
                      <div className="mt-4 rounded-lg bg-muted p-3">
                        <div className="flex items-start gap-3">
                          <Avatar>
                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Mentor" />
                            <AvatarFallback>SM</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium">Sarah Miller</span>
                              <span className="text-xs text-muted-foreground">Mentor</span>
                            </div>
                            <p className="text-sm mt-1">Great job on completing the React Fundamentals! Your final project showed excellent understanding of component architecture.</p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {userType === "mentor" && (
                      <div className="mt-4 flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Mentee" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">Jane Doe</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex items-start gap-4 border-b pb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">First Mentoring Session</h3>
                      <Badge variant="outline" className="bg-purple-50 text-purple-700">Milestone</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Completed your first mentoring session and established goals</p>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Achieved 3 months ago</span>
                      </div>
                    </div>
                    
                    {userType === "mentor" && (
                      <div className="mt-4 flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Mentee" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">Jane Doe</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <MessageSquare className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">First Code Review</h3>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700">Feedback</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Received and implemented feedback from your first code review</p>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Achieved 2 months ago</span>
                      </div>
                    </div>
                    
                    {userType === "mentor" && (
                      <div className="mt-4 flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Mentee" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">Jane Doe</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="all" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Milestone Timeline</CardTitle>
              <CardDescription>Your career journey visualized</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative border-l border-muted pl-6 pb-6">
                <div className="mb-10 relative">
                  <div className="absolute -left-[25px] flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="pt-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">React Fundamentals Mastery</h3>
                      <Badge variant="outline" className="bg-green-50 text-green-700">Achievement</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Completed the React Fundamentals course with distinction</p>
                    <p className="text-xs text-muted-foreground mt-1">2 weeks ago</p>
                  </div>
                </div>
                
                <div className="mb-10 relative">
                  <div className="absolute -left-[25px] flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <MessageSquare className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="pt-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">First Code Review</h3>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700">Feedback</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Received and implemented feedback from your first code review</p>
                    <p className="text-xs text-muted-foreground mt-1">2 months ago</p>
                  </div>
                </div>
                
                <div className="mb-10 relative">
                  <div className="absolute -left-[25px] flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="pt-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">First Mentoring Session</h3>
                      <Badge variant="outline" className="bg-purple-50 text-purple-700">Milestone</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Completed your first mentoring session and established goals</p>
                    <p className="text-xs text-muted-foreground mt-1">3 months ago</p>
                  </div>
                </div>
                
                <div className="mb-10 relative">
                  <div className="absolute -left-[25px] flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                    <Trophy className="h-5 w-5 text-amber-600" />
                  </div>
                  <div className="pt-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">Complete React.js Mastery</h3>
                      <Badge variant="outline" className="bg-amber-50 text-amber-700">Achievement</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Complete all tasks in the "Master React.js" goal</p>
                    <p className="text-xs text-muted-foreground mt-1">Expected in 2 weeks</p>
                  </div>
                </div>
                
                <div className="mb-10 relative">
                  <div className="absolute -left-[25px] flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <Award className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="pt-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">First Open Source Contribution</h3>
                      <Badge variant="outline" className="bg-green-50 text-green-700">Experience</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Make your first contribution to an open source project</p>
                    <p className="text-xs text-muted-foreground mt-1">Expected in 1 month</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-[25px] flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <GraduationCap className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="pt-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">System Design Certification</h3>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700">Learning</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Complete the System Design course and pass the certification</p>
                    <p className="text-xs text-muted-foreground mt-1">Expected in 2 months</p>
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
