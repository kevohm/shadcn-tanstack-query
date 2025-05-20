import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Calendar, CheckCircle, Clock, Flag, GraduationCap, Briefcase, Award, Plus } from 'lucide-react'
import { GoalTemplateCard } from "@/components/GoalTemplateCard"

interface GoalSettingViewProps {
  userType: "student" | "mentor"
}

export function GoalSettingView({ userType }: GoalSettingViewProps) {
  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold tracking-tight">Goal Setting</h2>
        <p className="text-muted-foreground">
          {userType === "student" 
            ? "Create and manage your career goals with guidance from your mentor." 
            : "Help your mentees set and achieve meaningful career goals."}
        </p>
      </div>
      
      <Tabs defaultValue="create">
        <TabsList>
          <TabsTrigger value="create">Create Goal</TabsTrigger>
          <TabsTrigger value="templates">Goal Templates</TabsTrigger>
          <TabsTrigger value="hierarchy">Goal Hierarchy</TabsTrigger>
        </TabsList>
        
        <TabsContent value="create" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Create New Goal</CardTitle>
              <CardDescription>
                Define a new goal using the SMART framework - Specific, Measurable, Achievable, Relevant, Time-bound.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="goal-title">Goal Title</Label>
                <Input id="goal-title" placeholder="e.g., Master React.js" />
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="goal-category">Goal Category</Label>
                  <Select>
                    <SelectTrigger id="goal-category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="career">Career Goal</SelectItem>
                      <SelectItem value="learning">Learning Goal</SelectItem>
                      <SelectItem value="project">Project Goal</SelectItem>
                      <SelectItem value="experience">Experience Goal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="goal-timeframe">Timeframe</Label>
                  <Select>
                    <SelectTrigger id="goal-timeframe">
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="short">Short-term (1-3 months)</SelectItem>
                      <SelectItem value="medium">Medium-term (3-6 months)</SelectItem>
                      <SelectItem value="long">Long-term (6+ months)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="goal-description">Description</Label>
                <Textarea id="goal-description" placeholder="Describe your goal in detail..." />
              </div>
              
              <div className="space-y-2">
                <Label>Measurable Outcomes</Label>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Checkbox id="outcome-1" />
                    <Input id="outcome-1" placeholder="e.g., Complete React course" className="flex-1" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="outcome-2" />
                    <Input id="outcome-2" placeholder="e.g., Build 3 React projects" className="flex-1" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="outcome-3" />
                    <Input id="outcome-3" placeholder="e.g., Pass React certification" className="flex-1" />
                  </div>
                  <Button variant="outline" size="sm" className="mt-2">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Outcome
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Alignment with Career Path</Label>
                <div className="rounded-md border p-4">
                  <div className="flex items-center gap-2">
                    <Checkbox id="align-senior-dev" />
                    <Label htmlFor="align-senior-dev" className="text-sm font-normal">
                      Becoming a Senior Developer
                    </Label>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Checkbox id="align-frontend" />
                    <Label htmlFor="align-frontend" className="text-sm font-normal">
                      Frontend Specialization
                    </Label>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Checkbox id="align-leadership" />
                    <Label htmlFor="align-leadership" className="text-sm font-normal">
                      Technical Leadership
                    </Label>
                  </div>
                </div>
              </div>
              
              {userType === "student" && (
                <div className="space-y-2">
                  <Label>Mentor Collaboration</Label>
                  <div className="flex items-center gap-2">
                    <Checkbox id="mentor-review" checked />
                    <Label htmlFor="mentor-review" className="text-sm font-normal">
                      Request mentor review
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="mentor-feedback" />
                    <Label htmlFor="mentor-feedback" className="text-sm font-normal">
                      Request detailed feedback
                    </Label>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Save as Draft</Button>
              <Button>Create Goal</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="templates" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <GoalTemplateCard 
              icon={<GraduationCap className="h-5 w-5" />}
              title="Master a Technical Skill"
              description="Learn and become proficient in a specific technical skill or technology."
              category="Learning"
              timeframe="3-6 months"
              outcomes={[
                "Complete online course or certification",
                "Build 2-3 projects using the skill",
                "Contribute to open source using the skill"
              ]}
            />
            
            <GoalTemplateCard 
              icon={<Briefcase className="h-5 w-5" />}
              title="Complete a Major Project"
              description="Plan and execute a significant project that demonstrates your skills."
              category="Project"
              timeframe="1-3 months"
              outcomes={[
                "Define project requirements and scope",
                "Implement core functionality",
                "Test and deploy the project",
                "Document the project and process"
              ]}
            />
            
            <GoalTemplateCard 
              icon={<Award className="h-5 w-5" />}
              title="Obtain Professional Certification"
              description="Earn an industry-recognized certification in your field."
              category="Career"
              timeframe="3-6 months"
              outcomes={[
                "Complete preparation materials",
                "Pass practice exams",
                "Schedule and pass certification exam",
                "Update resume and professional profiles"
              ]}
            />
            
            <GoalTemplateCard 
              icon={<Calendar className="h-5 w-5" />}
              title="Attend Industry Events"
              description="Participate in conferences, meetups, or workshops to expand your network."
              category="Experience"
              timeframe="6-12 months"
              outcomes={[
                "Identify relevant events to attend",
                "Prepare networking materials",
                "Attend at least 3 industry events",
                "Follow up with new connections"
              ]}
            />
            
            <GoalTemplateCard 
              icon={<CheckCircle className="h-5 w-5" />}
              title="Improve Technical Interview Skills"
              description="Enhance your ability to perform well in technical interviews."
              category="Career"
              timeframe="1-3 months"
              outcomes={[
                "Practice common interview questions",
                "Complete coding challenges regularly",
                "Participate in mock interviews",
                "Create a system design portfolio"
              ]}
            />
            
            <GoalTemplateCard 
              icon={<Clock className="h-5 w-5" />}
              title="Establish Work-Life Balance"
              description="Create sustainable habits for long-term career success."
              category="Career"
              timeframe="Ongoing"
              outcomes={[
                "Establish consistent work hours",
                "Implement productivity techniques",
                "Create boundaries between work and personal time",
                "Develop stress management strategies"
              ]}
            />
          </div>
          
          {userType === "mentor" && (
            <div className="mt-6 flex justify-center">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Create Custom Template
              </Button>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="hierarchy" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Goal Hierarchy</CardTitle>
              <CardDescription>
                Visualize how your short-term goals contribute to your long-term career aspirations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border p-6">
                <div className="flex flex-col items-center">
                  <div className="mb-8 rounded-lg bg-primary/10 p-4 text-center">
                    <h3 className="font-semibold">Long-term Career Aspiration</h3>
                    <p className="text-lg font-bold">Become a Senior Developer</p>
                    <p className="text-sm text-muted-foreground">3-5 year goal</p>
                  </div>
                  
                  <div className="mb-2 h-8 w-0.5 bg-border"></div>
                  
                  <div className="mb-8 grid w-full gap-4 md:grid-cols-3">
                    <div className="rounded-lg bg-muted p-4 text-center">
                      <h4 className="font-medium">Medium-term Goal</h4>
                      <p className="font-semibold">Frontend Specialization</p>
                      <p className="text-xs text-muted-foreground">1-2 year goal</p>
                    </div>
                    
                    <div className="rounded-lg bg-muted p-4 text-center">
                      <h4 className="font-medium">Medium-term Goal</h4>
                      <p className="font-semibold">Project Leadership</p>
                      <p className="text-xs text-muted-foreground">1-2 year goal</p>
                    </div>
                    
                    <div className="rounded-lg bg-muted p-4 text-center">
                      <h4 className="font-medium">Medium-term Goal</h4>
                      <p className="font-semibold">System Architecture</p>
                      <p className="text-xs text-muted-foreground">1-2 year goal</p>
                    </div>
                  </div>
                  
                  <div className="mb-2 h-8 w-full border-t"></div>
                  
                  <div className="grid w-full gap-4 md:grid-cols-4">
                    <div className="rounded-lg border bg-card p-3 text-center shadow-sm">
                      <div className="mb-2 flex justify-center">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-700">
                          <CheckCircle className="h-4 w-4" />
                        </span>
                      </div>
                      <h5 className="text-sm font-medium">Master React.js</h5>
                      <p className="text-xs text-muted-foreground">75% complete</p>
                    </div>
                    
                    <div className="rounded-lg border bg-card p-3 text-center shadow-sm">
                      <div className="mb-2 flex justify-center">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                          <Flag className="h-4 w-4" />
                        </span>
                      </div>
                      <h5 className="text-sm font-medium">Build Portfolio</h5>
                      <p className="text-xs text-muted-foreground">40% complete</p>
                    </div>
                    
                    <div className="rounded-lg border bg-card p-3 text-center shadow-sm">
                      <div className="mb-2 flex justify-center">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-purple-700">
                          <GraduationCap className="h-4 w-4" />
                        </span>
                      </div>
                      <h5 className="text-sm font-medium">System Design</h5>
                      <p className="text-xs text-muted-foreground">20% complete</p>
                    </div>
                    
                    <div className="rounded-lg border bg-card p-3 text-center shadow-sm">
                      <div className="mb-2 flex justify-center">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                          <Calendar className="h-4 w-4" />
                        </span>
                      </div>
                      <h5 className="text-sm font-medium">Tech Conference</h5>
                      <p className="text-xs text-muted-foreground">10% complete</p>
                    </div>
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
