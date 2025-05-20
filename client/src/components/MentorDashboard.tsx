import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, Calendar, CheckCircle, Users } from "lucide-react";

export function MentorDashboard() {
  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-4 md:flex-row">
        <Card className="flex-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Mentee Overview</CardTitle>
            <CardDescription>
              Your current mentees and their progress
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mt-2 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Active Mentees</span>
                  </div>
                  <p className="text-2xl font-bold">8</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-blue-500" />
                    <span className="text-sm font-medium">
                      Sessions This Week
                    </span>
                  </div>
                  <p className="text-2xl font-bold">5</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">Goals Completed</span>
                  </div>
                  <p className="text-2xl font-bold">24</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-500" />
                    <span className="text-sm font-medium">Needs Attention</span>
                  </div>
                  <p className="text-2xl font-bold">3</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Upcoming Sessions</CardTitle>
            <CardDescription>Your scheduled mentoring sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-lg border p-3">
                <Avatar>
                  <AvatarImage
                    src="/placeholder.svg?height=40&width=40"
                    alt="Mentee"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Goal Review Session</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>Tomorrow, 2:00 PM</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">With Jane Doe</p>
                  <div className="flex items-center gap-2 pt-2">
                    <Button size="sm" variant="default">
                      Join
                    </Button>
                    <Button size="sm" variant="outline">
                      Reschedule
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg border p-3">
                <Avatar>
                  <AvatarImage
                    src="/placeholder.svg?height=40&width=40"
                    alt="Mentee"
                  />
                  <AvatarFallback>MS</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Career Planning</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>Wed, 11:00 AM</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    With Michael Smith
                  </p>
                  <div className="flex items-center gap-2 pt-2">
                    <Button size="sm" variant="default">
                      Join
                    </Button>
                    <Button size="sm" variant="outline">
                      Reschedule
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="mentees">
        <TabsList>
          <TabsTrigger value="mentees">Mentees</TabsTrigger>
          <TabsTrigger value="goals">Goals to Review</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>

        <TabsContent value="mentees" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src="/placeholder.svg?height=48&width=48"
                        alt="Mentee"
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">Jane Doe</h3>
                      <p className="text-sm text-muted-foreground">
                        Software Developer
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700"
                    >
                      On Track
                    </Badge>
                    <Button size="sm" variant="outline">
                      View Profile
                    </Button>
                    <Button size="sm">Message</Button>
                  </div>
                </div>

                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src="/placeholder.svg?height=48&width=48"
                        alt="Mentee"
                      />
                      <AvatarFallback>MS</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">Michael Smith</h3>
                      <p className="text-sm text-muted-foreground">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge
                      variant="outline"
                      className="bg-amber-50 text-amber-700"
                    >
                      Needs Attention
                    </Badge>
                    <Button size="sm" variant="outline">
                      View Profile
                    </Button>
                    <Button size="sm">Message</Button>
                  </div>
                </div>

                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src="/placeholder.svg?height=48&width=48"
                        alt="Mentee"
                      />
                      <AvatarFallback>AJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">Alex Johnson</h3>
                      <p className="text-sm text-muted-foreground">
                        Backend Developer
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700"
                    >
                      On Track
                    </Badge>
                    <Button size="sm" variant="outline">
                      View Profile
                    </Button>
                    <Button size="sm">Message</Button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src="/placeholder.svg?height=48&width=48"
                        alt="Mentee"
                      />
                      <AvatarFallback>EW</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">Emily Wilson</h3>
                      <p className="text-sm text-muted-foreground">
                        UX Designer
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge
                      variant="outline"
                      className="bg-amber-50 text-amber-700"
                    >
                      Needs Attention
                    </Badge>
                    <Button size="sm" variant="outline">
                      View Profile
                    </Button>
                    <Button size="sm">Message</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="goals" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4 border-b pb-4">
                  <Avatar>
                    <AvatarImage
                      src="/placeholder.svg?height=40&width=40"
                      alt="Mentee"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Master React.js</p>
                        <p className="text-sm text-muted-foreground">
                          Jane Doe
                        </p>
                      </div>
                      <Badge variant="outline">Learning Goal</Badge>
                    </div>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progress</span>
                        <span>75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <Button size="sm" variant="default">
                        Review
                      </Button>
                      <Button size="sm" variant="outline">
                        Provide Feedback
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 border-b pb-4">
                  <Avatar>
                    <AvatarImage
                      src="/placeholder.svg?height=40&width=40"
                      alt="Mentee"
                    />
                    <AvatarFallback>MS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Build Portfolio Website</p>
                        <p className="text-sm text-muted-foreground">
                          Michael Smith
                        </p>
                      </div>
                      <Badge variant="outline">Project Goal</Badge>
                    </div>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progress</span>
                        <span>40%</span>
                      </div>
                      <Progress value={40} className="h-2" />
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <Button size="sm" variant="default">
                        Review
                      </Button>
                      <Button size="sm" variant="outline">
                        Provide Feedback
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage
                      src="/placeholder.svg?height=40&width=40"
                      alt="Mentee"
                    />
                    <AvatarFallback>EW</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">UX Research Certification</p>
                        <p className="text-sm text-muted-foreground">
                          Emily Wilson
                        </p>
                      </div>
                      <Badge variant="outline">Learning Goal</Badge>
                    </div>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progress</span>
                        <span>25%</span>
                      </div>
                      <Progress value={25} className="h-2" />
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <Button size="sm" variant="default">
                        Review
                      </Button>
                      <Button size="sm" variant="outline">
                        Provide Feedback
                      </Button>
                    </div>
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
                    <AvatarImage
                      src="/placeholder.svg?height=40&width=40"
                      alt="Mentee"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Jane Doe</p>
                      <span className="text-xs text-muted-foreground">
                        Yesterday
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Thank you for your feedback on my React project. I've
                      implemented the changes you suggested.
                    </p>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="mt-2 h-8 px-2 text-xs"
                    >
                      Reply
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4 border-b pb-4">
                  <Avatar>
                    <AvatarImage
                      src="/placeholder.svg?height=40&width=40"
                      alt="Mentee"
                    />
                    <AvatarFallback>MS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Michael Smith</p>
                      <span className="text-xs text-muted-foreground">
                        2 days ago
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      I'm having trouble with the portfolio project. Could we
                      discuss this in our next session?
                    </p>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="mt-2 h-8 px-2 text-xs"
                    >
                      Reply
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage
                      src="/placeholder.svg?height=40&width=40"
                      alt="System"
                    />
                    <AvatarFallback>CP</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">CareerPath System</p>
                      <span className="text-xs text-muted-foreground">
                        1 week ago
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Emily Wilson has been inactive for 2 weeks. Consider
                      reaching out to check in.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
