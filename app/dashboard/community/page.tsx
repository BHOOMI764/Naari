import type React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Users, Calendar, MapPin, Share2, Search, Plus, UserPlus, ThumbsUp, MessageCircle } from "lucide-react"

export default function CommunityPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Community</h1>
          <p className="text-muted-foreground">
            Connect with others, share experiences, and build a supportive network.
          </p>
        </div>
        <Button className="bg-rose-600 hover:bg-rose-700">
          <Plus className="mr-2 h-4 w-4" />
          Create Post
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search community posts..." className="pl-8" />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Tabs defaultValue="trending" className="w-full">
                <div className="px-6">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="trending">Trending</TabsTrigger>
                    <TabsTrigger value="recent">Recent</TabsTrigger>
                    <TabsTrigger value="safety">Safety Tips</TabsTrigger>
                    <TabsTrigger value="support">Support</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="trending" className="pt-4 px-6 pb-6">
                  <div className="space-y-6">
                    <CommunityPost
                      user={{
                        name: "Sarah Johnson",
                        avatar: "/placeholder.svg?height=40&width=40",
                        badge: "Safety Expert",
                      }}
                      time="2 hours ago"
                      content="Just shared a new video on situational awareness techniques! Check out the 5 key things to watch for when walking alone at night. #SafetyFirst #WomenEmpowerment"
                      likes={42}
                      comments={8}
                      tags={["SafetyTips", "NightSafety"]}
                    />

                    <CommunityPost
                      user={{
                        name: "Emily Chen",
                        avatar: "/placeholder.svg?height=40&width=40",
                        badge: "Community Leader",
                      }}
                      time="Yesterday"
                      content="Our community safety walk was a huge success! 50+ women came together to identify unsafe areas in downtown. We've compiled our findings and will be presenting to the city council next week. Join us! 📍 City Hall, Tuesday 6PM"
                      image="/placeholder.svg?height=300&width=600"
                      likes={128}
                      comments={24}
                      tags={["CommunityAction", "SafetyWalk"]}
                    />

                    <CommunityPost
                      user={{
                        name: "Priya Sharma",
                        avatar: "/placeholder.svg?height=40&width=40",
                      }}
                      time="2 days ago"
                      content="I used the SOS feature yesterday when I felt someone was following me. My emergency contacts were notified immediately, and my brother called right away. Thankfully it was a false alarm, but knowing I had backup made all the difference. Thank you Naari! ❤️"
                      likes={215}
                      comments={32}
                      tags={["SOSFeature", "RealExperience"]}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="recent" className="pt-4 px-6 pb-6">
                  <div className="space-y-6">
                    <CommunityPost
                      user={{
                        name: "Aisha Mohammed",
                        avatar: "/placeholder.svg?height=40&width=40",
                      }}
                      time="30 minutes ago"
                      content="Just discovered you can customize the quick messages in the app! I've set up messages for different scenarios - one for when I'm leaving work late, another for when I'm taking public transport. Super useful!"
                      likes={12}
                      comments={3}
                      tags={["AppTip", "QuickMessages"]}
                    />

                    <CommunityPost
                      user={{
                        name: "Taylor Wilson",
                        avatar: "/placeholder.svg?height=40&width=40",
                      }}
                      time="2 hours ago"
                      content="Has anyone taken the self-defense class at Community Center? Thinking of signing up for the weekend session."
                      likes={8}
                      comments={15}
                      tags={["SelfDefense", "Question"]}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="safety" className="pt-4 px-6 pb-6">
                  <div className="space-y-6">
                    <CommunityPost
                      user={{
                        name: "Dr. Lisa Park",
                        avatar: "/placeholder.svg?height=40&width=40",
                        badge: "Verified Expert",
                      }}
                      time="1 day ago"
                      content="🚨 Safety Tip: When using rideshare services, always verify the license plate and driver's name before getting in. Share your trip with a friend using the Naari app's journey sharing feature. #RideshareSafety"
                      likes={89}
                      comments={14}
                      tags={["SafetyTip", "RideshareSafety"]}
                    />

                    <CommunityPost
                      user={{
                        name: "Officer Rebecca Torres",
                        avatar: "/placeholder.svg?height=40&width=40",
                        badge: "Law Enforcement",
                      }}
                      time="3 days ago"
                      content="When parking at night, always choose well-lit areas near security cameras if possible. Have your keys ready before approaching your car, and do a quick check of the back seat before entering. #ParkingSafety"
                      likes={76}
                      comments={11}
                      tags={["SafetyTip", "ParkingSafety"]}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="support" className="pt-4 px-6 pb-6">
                  <div className="space-y-6">
                    <CommunityPost
                      user={{
                        name: "Maya Rodriguez",
                        avatar: "/placeholder.svg?height=40&width=40",
                      }}
                      time="4 hours ago"
                      content="I'm moving to a new city next month and feeling nervous about safety. Any recommendations for safe neighborhoods or apartment buildings with good security in Chicago? #MovingTips"
                      likes={18}
                      comments={27}
                      tags={["Question", "MovingSafety"]}
                    />

                    <CommunityPost
                      user={{
                        name: "Zoe Williams",
                        avatar: "/placeholder.svg?height=40&width=40",
                      }}
                      time="1 day ago"
                      content="Had a scary experience last night walking home. I'm okay but shaken up. Any recommendations for processing this and feeling safe again? The Naari app helped me get through it in the moment. #Support"
                      likes={64}
                      comments={42}
                      tags={["Support", "CopingStrategies"]}
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Create Post</CardTitle>
              <CardDescription>Share your experiences, ask questions, or offer support.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Textarea placeholder="What's on your mind?" className="min-h-[100px]" />
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                    #SafetyTip
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                    #Question
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                    #Support
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                    #Experience
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                    + Add Tag
                  </Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <MapPin className="mr-2 h-4 w-4" />
                  Add Location
                </Button>
                <Button variant="outline" size="sm">
                  <Calendar className="mr-2 h-4 w-4" />
                  Add Event
                </Button>
              </div>
              <Button className="bg-rose-600 hover:bg-rose-700">Post</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Communities</CardTitle>
              <CardDescription>Groups you've joined</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CommunityGroup
                name="Local Safety Network"
                members={248}
                image="/placeholder.svg?height=40&width=40"
                active={true}
              />
              <CommunityGroup
                name="Self-Defense Practitioners"
                members={1024}
                image="/placeholder.svg?height=40&width=40"
              />
              <CommunityGroup name="City Commuters" members={512} image="/placeholder.svg?height=40&width=40" />
              <CommunityGroup name="Night Shift Workers" members={156} image="/placeholder.svg?height=40&width=40" />
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Discover Communities
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Safety Events</CardTitle>
              <CardDescription>Events in your area</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <SafetyEvent
                title="Self-Defense Workshop"
                date="Sat, May 15 • 10:00 AM"
                location="Community Center"
                attendees={24}
              />
              <SafetyEvent
                title="Safety Walk & Audit"
                date="Sun, May 16 • 4:00 PM"
                location="Central Park"
                attendees={18}
              />
              <SafetyEvent
                title="Personal Safety Webinar"
                date="Wed, May 19 • 7:00 PM"
                location="Online"
                attendees={56}
              />
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Calendar className="mr-2 h-4 w-4" />
                View All Events
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Safety Companions</CardTitle>
              <CardDescription>People who can accompany you</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Jessica Davis</p>
                    <p className="text-xs text-muted-foreground">0.8 miles away</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800">Available</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>RK</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Rachel Kim</p>
                    <p className="text-xs text-muted-foreground">1.2 miles away</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800">Available</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>AP</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Alisha Patel</p>
                    <p className="text-xs text-muted-foreground">2.5 miles away</p>
                  </div>
                </div>
                <Badge variant="outline">Busy</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-rose-600 hover:bg-rose-700">
                <UserPlus className="mr-2 h-4 w-4" />
                Find Companions
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

interface CommunityPostProps {
  user: {
    name: string
    avatar: string
    badge?: string
  }
  time: string
  content: string
  image?: string
  likes: number
  comments: number
  tags: string[]
}

function CommunityPost({ user, time, content, image, likes, comments, tags }: CommunityPostProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={user.avatar || "/placeholder.svg"} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center">
                <p className="font-medium">{user.name}</p>
                {user.badge && (
                  <Badge variant="outline" className="ml-2 text-xs">
                    {user.badge}
                  </Badge>
                )}
              </div>
              <p className="text-xs text-muted-foreground">{time}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <p className="text-sm mb-3">{content}</p>
        {image && (
          <div className="rounded-md overflow-hidden mb-3">
            <img src={image || "/placeholder.svg"} alt="Post image" className="w-full h-auto" />
          </div>
        )}
        <div className="flex flex-wrap gap-1 mt-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              #{tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t pt-3 flex justify-between">
        <div className="flex space-x-4">
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <ThumbsUp className="mr-1 h-4 w-4" />
            {likes}
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <MessageCircle className="mr-1 h-4 w-4" />
            {comments}
          </Button>
        </div>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          <Share2 className="mr-1 h-4 w-4" />
          Share
        </Button>
      </CardFooter>
    </Card>
  )
}

interface CommunityGroupProps {
  name: string
  members: number
  image: string
  active?: boolean
}

function CommunityGroup({ name, members, image, active }: CommunityGroupProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <Avatar>
          <AvatarImage src={image || "/placeholder.svg"} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-xs text-muted-foreground">{members} members</p>
        </div>
      </div>
      {active && <Badge className="bg-green-100 text-green-800">New Posts</Badge>}
    </div>
  )
}

interface SafetyEventProps {
  title: string
  date: string
  location: string
  attendees: number
}

function SafetyEvent({ title, date, location, attendees }: SafetyEventProps) {
  return (
    <div className="border rounded-lg p-3 hover:bg-gray-50">
      <h4 className="font-medium">{title}</h4>
      <div className="flex items-center text-sm text-muted-foreground mt-1">
        <Calendar className="mr-1 h-3 w-3" />
        <span>{date}</span>
      </div>
      <div className="flex items-center text-sm text-muted-foreground mt-1">
        <MapPin className="mr-1 h-3 w-3" />
        <span>{location}</span>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center text-xs text-muted-foreground">
          <Users className="mr-1 h-3 w-3" />
          <span>{attendees} attending</span>
        </div>
        <Button variant="outline" size="sm">
          Join
        </Button>
      </div>
    </div>
  )
}

function MoreHorizontal(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  )
}
