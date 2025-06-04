import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import {
  Phone,
  Timer,
  Video,
  Mic,
  Bell,
  Shield,
  AlertTriangle,
  Flashlight,
  Volume2,
  MessageSquare,
  Camera,
  MapPin,
} from "lucide-react"

export default function SafetyToolsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Safety Tools</h1>
          <p className="text-muted-foreground">
            Access essential safety features to protect yourself in various situations.
          </p>
        </div>
      </div>

      <Tabs defaultValue="emergency" className="space-y-4">
        <TabsList className="grid grid-cols-4 h-auto p-1">
          <TabsTrigger value="emergency" className="py-2">
            <Shield className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Emergency</span>
          </TabsTrigger>
          <TabsTrigger value="deterrents" className="py-2">
            <AlertTriangle className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Deterrents</span>
          </TabsTrigger>
          <TabsTrigger value="recording" className="py-2">
            <Camera className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Recording</span>
          </TabsTrigger>
          <TabsTrigger value="communication" className="py-2">
            <MessageSquare className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Communication</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="emergency" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SafetyToolCard
              title="Safety Timer"
              description="Set a timer that will alert your emergency contacts if you don't check in."
              icon={<Timer className="h-5 w-5 text-rose-500" />}
              action={
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Timer Duration</span>
                    <span className="text-rose-600 font-medium">30 min</span>
                  </div>
                  <Slider defaultValue={[30]} max={120} step={5} />
                  <Button className="w-full bg-rose-600 hover:bg-rose-700">Start Timer</Button>
                </div>
              }
            />

            <SafetyToolCard
              title="Emergency Contacts"
              description="Quickly call or message your trusted emergency contacts."
              icon={<Phone className="h-5 w-5 text-rose-500" />}
              action={
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="mr-2 h-4 w-4" /> Call Mom
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="mr-2 h-4 w-4" /> Call Dad
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="mr-2 h-4 w-4" /> Call Friend
                  </Button>
                  <Button className="w-full bg-rose-600 hover:bg-rose-700">Manage Contacts</Button>
                </div>
              }
            />

            <SafetyToolCard
              title="Emergency Services"
              description="Quick access to local emergency services and helplines."
              icon={<AlertTriangle className="h-5 w-5 text-rose-500" />}
              action={
                <div className="space-y-2">
                  <Button variant="destructive" className="w-full">
                    <Phone className="mr-2 h-4 w-4" /> Call Police (911)
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="mr-2 h-4 w-4" /> Women's Helpline
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="mr-2 h-4 w-4" /> Medical Emergency
                  </Button>
                </div>
              }
            />
          </div>
        </TabsContent>

        <TabsContent value="deterrents" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SafetyToolCard
              title="Fake Call"
              description="Receive a simulated call to help you exit uncomfortable situations."
              icon={<Phone className="h-5 w-5 text-rose-500" />}
              action={
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Caller Name</Label>
                    <Input placeholder="Mom" />
                  </div>
                  <div className="space-y-2">
                    <Label>Delay (seconds)</Label>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        5
                      </Button>
                      <Button variant="outline" size="sm">
                        10
                      </Button>
                      <Button variant="outline" size="sm">
                        30
                      </Button>
                      <Button variant="outline" size="sm">
                        60
                      </Button>
                    </div>
                  </div>
                  <Button className="w-full bg-rose-600 hover:bg-rose-700">Schedule Fake Call</Button>
                </div>
              }
            />

            <SafetyToolCard
              title="Flashlight"
              description="Quick access to your device's flashlight for dark areas."
              icon={<Flashlight className="h-5 w-5 text-rose-500" />}
              action={
                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                      <Flashlight className="h-12 w-12 text-gray-400" />
                    </div>
                  </div>
                  <Button className="w-full">Turn On Flashlight</Button>
                </div>
              }
            />

            <SafetyToolCard
              title="Alarm Sound"
              description="Play a loud alarm sound to deter attackers and draw attention."
              icon={<Volume2 className="h-5 w-5 text-rose-500" />}
              action={
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Alarm Type</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm">
                        Siren
                      </Button>
                      <Button variant="outline" size="sm">
                        Police
                      </Button>
                      <Button variant="outline" size="sm">
                        Whistle
                      </Button>
                      <Button variant="outline" size="sm">
                        Dog Bark
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Volume</Label>
                    <Slider defaultValue={[80]} max={100} step={10} />
                  </div>
                  <Button className="w-full bg-rose-600 hover:bg-rose-700">Play Alarm</Button>
                </div>
              }
            />
          </div>
        </TabsContent>

        <TabsContent value="recording" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SafetyToolCard
              title="Video Recording"
              description="Discreetly record video evidence that automatically uploads to secure storage."
              icon={<Video className="h-5 w-5 text-rose-500" />}
              action={
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Switch id="stealth-mode" />
                      <Label htmlFor="stealth-mode" className="ml-2">
                        Stealth Mode
                      </Label>
                    </div>
                    <Badge>1080p</Badge>
                  </div>
                  <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                    <Camera className="h-12 w-12 text-gray-400" />
                  </div>
                  <Button className="w-full bg-rose-600 hover:bg-rose-700">Start Recording</Button>
                </div>
              }
            />

            <SafetyToolCard
              title="Audio Recording"
              description="Record audio discreetly with background mode support."
              icon={<Mic className="h-5 w-5 text-rose-500" />}
              action={
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Switch id="background-recording" />
                      <Label htmlFor="background-recording" className="ml-2">
                        Background Recording
                      </Label>
                    </div>
                  </div>
                  <div className="h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                        <div
                          key={i}
                          className="w-2 bg-rose-400"
                          style={{
                            height: `${Math.random() * 40 + 10}px`,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>00:00:00</span>
                    <span>Auto-upload enabled</span>
                  </div>
                  <Button className="w-full bg-rose-600 hover:bg-rose-700">Start Recording</Button>
                </div>
              }
            />

            <SafetyToolCard
              title="Evidence Vault"
              description="Securely store and manage recorded evidence."
              icon={<Shield className="h-5 w-5 text-rose-500" />}
              action={
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Video className="h-4 w-4 mr-2 text-rose-500" />
                        <span className="text-sm">Street_recording.mp4</span>
                      </div>
                      <Badge variant="outline">2 days ago</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Mic className="h-4 w-4 mr-2 text-rose-500" />
                        <span className="text-sm">Voice_memo_1.m4a</span>
                      </div>
                      <Badge variant="outline">1 week ago</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Video className="h-4 w-4 mr-2 text-rose-500" />
                        <span className="text-sm">Night_walk.mp4</span>
                      </div>
                      <Badge variant="outline">2 weeks ago</Badge>
                    </div>
                  </div>
                  <Button className="w-full">View All Evidence</Button>
                </div>
              }
            />
          </div>
        </TabsContent>

        <TabsContent value="communication" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SafetyToolCard
              title="Quick Messages"
              description="Send pre-configured messages to your contacts with your location."
              icon={<MessageSquare className="h-5 w-5 text-rose-500" />}
              action={
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start text-left">
                      <span className="truncate">I'm feeling unsafe. Here's my location.</span>
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-left">
                      <span className="truncate">Call me ASAP, it's urgent.</span>
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-left">
                      <span className="truncate">I'll be home in 20 minutes. Track my journey.</span>
                    </Button>
                  </div>
                  <div className="flex space-x-2">
                    <Button className="flex-1">Edit Messages</Button>
                    <Button className="flex-1 bg-rose-600 hover:bg-rose-700">Send</Button>
                  </div>
                </div>
              }
            />

            <SafetyToolCard
              title="Live Location Sharing"
              description="Share your real-time location with trusted contacts."
              icon={<MapPin className="h-5 w-5 text-rose-500" />}
              action={
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Share With</Label>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-rose-100 text-rose-800 hover:bg-rose-200">Mom</Badge>
                      <Badge className="bg-rose-100 text-rose-800 hover:bg-rose-200">Dad</Badge>
                      <Badge className="bg-rose-100 text-rose-800 hover:bg-rose-200">Sister</Badge>
                      <Badge variant="outline">+ Add</Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Duration</Label>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        1h
                      </Button>
                      <Button variant="outline" size="sm">
                        2h
                      </Button>
                      <Button variant="outline" size="sm">
                        4h
                      </Button>
                      <Button variant="outline" size="sm">
                        Until I stop
                      </Button>
                    </div>
                  </div>
                  <Button className="w-full bg-rose-600 hover:bg-rose-700">Start Sharing</Button>
                </div>
              }
            />

            <SafetyToolCard
              title="Emergency Broadcast"
              description="Broadcast emergency message with location to all your emergency contacts."
              icon={<Bell className="h-5 w-5 text-rose-500" />}
              action={
                <div className="space-y-4">
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-800">
                      This will immediately alert ALL your emergency contacts with your current location and situation.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label>Message (Optional)</Label>
                    <Input placeholder="Add details about your situation..." />
                  </div>
                  <Button variant="destructive" className="w-full">
                    Send Emergency Broadcast
                  </Button>
                </div>
              }
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface SafetyToolCardProps {
  title: string
  description: string
  icon: React.ReactNode
  action: React.ReactNode
}

function SafetyToolCard({ title, description, icon, action }: SafetyToolCardProps) {
  return (
    <Card className="overflow-hidden border-2 hover:border-rose-200 transition-all hover:shadow-md">
      <CardHeader className="bg-gradient-to-r from-rose-50 to-white">
        <div className="flex items-center space-x-2">
          {icon}
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">{action}</CardContent>
    </Card>
  )
}
