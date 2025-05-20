import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  CheckCircle,
  Clock,
  Download,
  Flag,
  LineChart,
  PieChart,
} from "lucide-react";

interface ProgressTrackingViewProps {
  userType: "student" | "mentor";
}

export function ProgressTrackingView({ userType }: ProgressTrackingViewProps) {
  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold tracking-tight">Progress Tracking</h2>
        <p className="text-muted-foreground">
          {userType === "student"
            ? "Track your progress towards your career goals."
            : "Monitor your mentees' progress towards their career goals."}
        </p>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <Card className="flex-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Overall Progress</CardTitle>
            <CardDescription>Career path completion</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mt-2 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">
                    Senior Developer Path
                  </span>
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
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">Progress Insights</CardTitle>
                <CardDescription>Key metrics and patterns</CardDescription>
              </div>
              <Select defaultValue="month">
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Time period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="quarter">This Quarter</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mt-2 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <LineChart className="h-5 w-5 text-primary" />
                  <span className="font-medium">Learning Consistency</span>
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-700">
                  Excellent
                </Badge>
              </div>

              <div className="h-[160px] w-full rounded-md bg-muted/40 flex items-center justify-center">
                <PieChart className="h-24 w-24 text-muted-foreground/70" />
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span>Ahead of schedule</span>
                  <span className="font-medium text-green-600">2 goals</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>On track</span>
                  <span className="font-medium text-blue-600">2 goals</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Behind schedule</span>
                  <span className="font-medium text-amber-600">1 goal</span>
                </div>
              </div>

              <Button variant="outline" size="sm" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Export Progress Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="goals">
        <TabsList>
          <TabsTrigger value="goals">Goal Progress</TabsTrigger>
          <TabsTrigger value="skills">Skills Development</TabsTrigger>
          <TabsTrigger value="time">Time Investment</TabsTrigger>
        </TabsList>

        <TabsContent value="goals" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4 border-b pb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Flag className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Master React.js</h3>
                      <Badge>Learning Goal</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Learning and becoming proficient in React.js
                    </p>

                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Overall Progress</span>
                        <span>75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>

                    <div className="mt-4 space-y-2">
                      <h4 className="text-sm font-medium">Tasks</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">
                            Complete React Fundamentals Course
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">
                            Build Todo App with React
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Learn React Hooks</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Learn React Router</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">
                            Learn State Management with Redux
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">
                            Build E-commerce Frontend with React
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full border-2 border-muted-foreground" />
                          <span className="text-sm">
                            Learn Server Components
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full border-2 border-muted-foreground" />
                          <span className="text-sm">
                            Pass React Certification
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 border-b pb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Flag className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Build Portfolio Website</h3>
                      <Badge>Project Goal</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Creating a professional portfolio website to showcase
                      skills
                    </p>

                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Overall Progress</span>
                        <span>40%</span>
                      </div>
                      <Progress value={40} className="h-2" />
                    </div>

                    <div className="mt-4 space-y-2">
                      <h4 className="text-sm font-medium">Tasks</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Design Mockups</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">
                            Setup Project Structure
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">
                            Implement Header and Navigation
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Create About Section</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full border-2 border-muted-foreground" />
                          <span className="text-sm">
                            Create Projects Section
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full border-2 border-muted-foreground" />
                          <span className="text-sm">Create Skills Section</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full border-2 border-muted-foreground" />
                          <span className="text-sm">Create Contact Form</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full border-2 border-muted-foreground" />
                          <span className="text-sm">Optimize for Mobile</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full border-2 border-muted-foreground" />
                          <span className="text-sm">Deploy Website</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full border-2 border-muted-foreground" />
                          <span className="text-sm">
                            Get Feedback and Iterate
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Flag className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">
                        Complete System Design Course
                      </h3>
                      <Badge>Learning Goal</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Learning system design principles and patterns
                    </p>

                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Overall Progress</span>
                        <span>20%</span>
                      </div>
                      <Progress value={20} className="h-2" />
                    </div>

                    <div className="mt-4 space-y-2">
                      <h4 className="text-sm font-medium">Tasks</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">
                            Complete Introduction to System Design
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">
                            Learn about Scalability
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full border-2 border-muted-foreground" />
                          <span className="text-sm">Study Load Balancing</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full border-2 border-muted-foreground" />
                          <span className="text-sm">Learn about Caching</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full border-2 border-muted-foreground" />
                          <span className="text-sm">
                            Study Database Sharding
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full border-2 border-muted-foreground" />
                          <span className="text-sm">
                            Learn about Microservices
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full border-2 border-muted-foreground" />
                          <span className="text-sm">Study API Design</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full border-2 border-muted-foreground" />
                          <span className="text-sm">
                            Complete System Design Case Studies
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Skills Development</h3>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder="Filter by category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Skills</SelectItem>
                      <SelectItem value="technical">
                        Technical Skills
                      </SelectItem>
                      <SelectItem value="soft">Soft Skills</SelectItem>
                      <SelectItem value="domain">Domain Knowledge</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">Frontend Development</h4>
                      <Badge variant="outline">Technical</Badge>
                    </div>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>HTML/CSS</span>
                        <span>95%</span>
                      </div>
                      <Progress value={95} className="h-1.5" />

                      <div className="flex items-center justify-between text-sm">
                        <span>JavaScript</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} className="h-1.5" />

                      <div className="flex items-center justify-between text-sm">
                        <span>React.js</span>
                        <span>75%</span>
                      </div>
                      <Progress value={75} className="h-1.5" />

                      <div className="flex items-center justify-between text-sm">
                        <span>TypeScript</span>
                        <span>60%</span>
                      </div>
                      <Progress value={60} className="h-1.5" />
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">Backend Development</h4>
                      <Badge variant="outline">Technical</Badge>
                    </div>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Node.js</span>
                        <span>70%</span>
                      </div>
                      <Progress value={70} className="h-1.5" />

                      <div className="flex items-center justify-between text-sm">
                        <span>Express</span>
                        <span>65%</span>
                      </div>
                      <Progress value={65} className="h-1.5" />

                      <div className="flex items-center justify-between text-sm">
                        <span>Databases</span>
                        <span>60%</span>
                      </div>
                      <Progress value={60} className="h-1.5" />

                      <div className="flex items-center justify-between text-sm">
                        <span>API Design</span>
                        <span>55%</span>
                      </div>
                      <Progress value={55} className="h-1.5" />
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">Soft Skills</h4>
                      <Badge variant="outline">Soft</Badge>
                    </div>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Communication</span>
                        <span>80%</span>
                      </div>
                      <Progress value={80} className="h-1.5" />

                      <div className="flex items-center justify-between text-sm">
                        <span>Problem Solving</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} className="h-1.5" />

                      <div className="flex items-center justify-between text-sm">
                        <span>Teamwork</span>
                        <span>90%</span>
                      </div>
                      <Progress value={90} className="h-1.5" />

                      <div className="flex items-center justify-between text-sm">
                        <span>Time Management</span>
                        <span>75%</span>
                      </div>
                      <Progress value={75} className="h-1.5" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="time" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Time Investment</h3>
                  <Select defaultValue="month">
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder="Time period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="week">This Week</SelectItem>
                      <SelectItem value="month">This Month</SelectItem>
                      <SelectItem value="quarter">This Quarter</SelectItem>
                      <SelectItem value="year">This Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="rounded-lg border p-4">
                  <h4 className="font-medium">Total Learning Hours</h4>
                  <p className="text-3xl font-bold mt-2">124 hours</p>

                  <div className="mt-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-primary"></div>
                        <span className="text-sm">React.js</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">48 hours</span>
                        <span className="text-xs text-muted-foreground">
                          (39%)
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                        <span className="text-sm">Portfolio Website</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">32 hours</span>
                        <span className="text-xs text-muted-foreground">
                          (26%)
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        <span className="text-sm">System Design</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">24 hours</span>
                        <span className="text-xs text-muted-foreground">
                          (19%)
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                        <span className="text-sm">Other Skills</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">20 hours</span>
                        <span className="text-xs text-muted-foreground">
                          (16%)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <h4 className="font-medium">Weekly Learning Pattern</h4>

                  <div className="mt-4 grid grid-cols-7 gap-2">
                    <div className="flex flex-col items-center">
                      <div className="h-24 w-full rounded-t-sm bg-muted relative">
                        <div
                          className="absolute bottom-0 w-full bg-primary"
                          style={{ height: "30%" }}
                        ></div>
                      </div>
                      <span className="text-xs mt-1">Mon</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="h-24 w-full rounded-t-sm bg-muted relative">
                        <div
                          className="absolute bottom-0 w-full bg-primary"
                          style={{ height: "60%" }}
                        ></div>
                      </div>
                      <span className="text-xs mt-1">Tue</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="h-24 w-full rounded-t-sm bg-muted relative">
                        <div
                          className="absolute bottom-0 w-full bg-primary"
                          style={{ height: "45%" }}
                        ></div>
                      </div>
                      <span className="text-xs mt-1">Wed</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="h-24 w-full rounded-t-sm bg-muted relative">
                        <div
                          className="absolute bottom-0 w-full bg-primary"
                          style={{ height: "75%" }}
                        ></div>
                      </div>
                      <span className="text-xs mt-1">Thu</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="h-24 w-full rounded-t-sm bg-muted relative">
                        <div
                          className="absolute bottom-0 w-full bg-primary"
                          style={{ height: "50%" }}
                        ></div>
                      </div>
                      <span className="text-xs mt-1">Fri</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="h-24 w-full rounded-t-sm bg-muted relative">
                        <div
                          className="absolute bottom-0 w-full bg-primary"
                          style={{ height: "90%" }}
                        ></div>
                      </div>
                      <span className="text-xs mt-1">Sat</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="h-24 w-full rounded-t-sm bg-muted relative">
                        <div
                          className="absolute bottom-0 w-full bg-primary"
                          style={{ height: "80%" }}
                        ></div>
                      </div>
                      <span className="text-xs mt-1">Sun</span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      Most productive: Saturday (4.5 hours)
                    </span>
                    <span className="font-medium">Avg: 3.1 hours/day</span>
                  </div>
                </div>

                {userType === "mentor" && (
                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium">Mentee Comparison</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Anonymous comparison with peers on similar paths
                    </p>

                    <div className="mt-4 space-y-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between text-sm">
                            <span>Jane Doe</span>
                            <span>124 hours</span>
                          </div>
                          <Progress value={80} className="h-1.5 mt-1" />
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>P1</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between text-sm">
                            <span>Peer 1</span>
                            <span>156 hours</span>
                          </div>
                          <Progress value={100} className="h-1.5 mt-1" />
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>P2</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between text-sm">
                            <span>Peer 2</span>
                            <span>110 hours</span>
                          </div>
                          <Progress value={70} className="h-1.5 mt-1" />
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>P3</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between text-sm">
                            <span>Peer 3</span>
                            <span>92 hours</span>
                          </div>
                          <Progress value={60} className="h-1.5 mt-1" />
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>P4</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between text-sm">
                            <span>Peer 4</span>
                            <span>78 hours</span>
                          </div>
                          <Progress value={50} className="h-1.5 mt-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
