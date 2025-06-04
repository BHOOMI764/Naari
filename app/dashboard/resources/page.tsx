import type React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  BookOpen,
  FileText,
  Video,
  Clock,
  CheckCircle,
  Star,
  MapPin,
  Shield,
  Bookmark,
  Play,
  Download,
  Phone,
} from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Resources</h1>
          <p className="text-muted-foreground">Educational content and resources to help you stay safe and informed.</p>
        </div>
        <Button className="bg-rose-600 hover:bg-rose-700">
          <Bookmark className="mr-2 h-4 w-4" />
          Saved Resources
        </Button>
      </div>

      <Tabs defaultValue="featured" className="space-y-4">
        <TabsList className="grid grid-cols-4 h-auto p-1">
          <TabsTrigger value="featured" className="py-2">
            <Star className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Featured</span>
          </TabsTrigger>
          <TabsTrigger value="self-defense" className="py-2">
            <Shield className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Self-Defense</span>
          </TabsTrigger>
          <TabsTrigger value="safety-guides" className="py-2">
            <FileText className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Safety Guides</span>
          </TabsTrigger>
          <TabsTrigger value="local-resources" className="py-2">
            <MapPin className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Local Resources</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="featured" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="overflow-hidden border-2 hover:border-rose-200 transition-all hover:shadow-md">
              <div className="relative h-48 bg-rose-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=192&width=384"
                    alt="Self-defense basics"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <Button size="icon" variant="secondary" className="rounded-full bg-white bg-opacity-80">
                      <Play className="h-6 w-6 text-rose-600" />
                    </Button>
                  </div>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-rose-100 text-rose-800 hover:bg-rose-200">Featured Course</Badge>
                  <Badge variant="outline">4.8 ★ (124)</Badge>
                </div>
                <CardTitle className="text-xl">Self-Defense Basics: 5 Essential Techniques</CardTitle>
                <CardDescription>Learn fundamental self-defense moves that could save your life.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    <span>25 minutes</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-1 h-4 w-4" />
                    <span>Certificate Available</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-1 text-sm">
                    <span>Progress</span>
                    <span className="font-medium">60%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-rose-600 hover:bg-rose-700">Continue Learning</Button>
              </CardFooter>
            </Card>

            <div className="grid grid-cols-1 gap-4">
              <ResourceCard
                title="Understanding Digital Privacy"
                description="Learn how to protect your personal information online."
                type="Article"
                icon={<FileText className="h-5 w-5 text-blue-500" />}
                meta="10 min read"
              />
              <ResourceCard
                title="Safety Planning for Different Scenarios"
                description="Create personalized safety plans for various situations."
                type="Interactive Guide"
                icon={<Shield className="h-5 w-5 text-emerald-500" />}
                meta="15 min activity"
              />
              <ResourceCard
                title="Recognizing Warning Signs"
                description="How to identify potential threats and dangerous situations."
                type="Video"
                icon={<Video className="h-5 w-5 text-rose-500" />}
                meta="8 min video"
              />
            </div>
          </div>

          <Card className="overflow-hidden border-2 hover:border-rose-200 transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle>Continue Your Learning Journey</CardTitle>
              <CardDescription>Pick up where you left off with these resources.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <ContinueLearningCard
                    title="Situational Awareness"
                    progress={75}
                    icon={<BookOpen className="h-5 w-5 text-amber-500" />}
                  />
                  <ContinueLearningCard
                    title="Emergency Response"
                    progress={30}
                    icon={<Shield className="h-5 w-5 text-red-500" />}
                  />
                  <ContinueLearningCard
                    title="Travel Safety Tips"
                    progress={10}
                    icon={<MapPin className="h-5 w-5 text-blue-500" />}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="self-defense" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <SelfDefenseCard
              title="Basic Strikes"
              description="Learn effective striking techniques for self-defense."
              level="Beginner"
              duration="20 min"
              image="/placeholder.svg?height=150&width=300"
            />
            <SelfDefenseCard
              title="Escape Techniques"
              description="How to break free from common holds and grabs."
              level="Beginner"
              duration="25 min"
              image="/placeholder.svg?height=150&width=300"
            />
            <SelfDefenseCard
              title="Using Everyday Objects"
              description="Turn common items into self-defense tools."
              level="Intermediate"
              duration="15 min"
              image="/placeholder.svg?height=150&width=300"
            />
            <SelfDefenseCard
              title="Defensive Stance"
              description="Proper positioning to protect yourself."
              level="Beginner"
              duration="10 min"
              image="/placeholder.svg?height=150&width=300"
            />
            <SelfDefenseCard
              title="Ground Defense"
              description="Protecting yourself when taken to the ground."
              level="Advanced"
              duration="30 min"
              image="/placeholder.svg?height=150&width=300"
            />
            <SelfDefenseCard
              title="Pressure Points"
              description="Using pressure points for self-defense."
              level="Advanced"
              duration="25 min"
              image="/placeholder.svg?height=150&width=300"
            />
          </div>
        </TabsContent>

        <TabsContent value="safety-guides" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SafetyGuideCard
              title="Public Transportation Safety"
              description="Stay safe while using buses, trains, and rideshares."
              icon={<FileText className="h-5 w-5 text-blue-500" />}
              downloadable={true}
            />
            <SafetyGuideCard
              title="Home Security Checklist"
              description="Ensure your home is secure with this comprehensive checklist."
              icon={<FileText className="h-5 w-5 text-emerald-500" />}
              downloadable={true}
            />
            <SafetyGuideCard
              title="Digital Safety & Privacy"
              description="Protect your online presence and personal information."
              icon={<FileText className="h-5 w-5 text-violet-500" />}
              downloadable={true}
            />
            <SafetyGuideCard
              title="Travel Safety Guidelines"
              description="Essential tips for staying safe while traveling."
              icon={<FileText className="h-5 w-5 text-amber-500" />}
              downloadable={true}
            />
            <SafetyGuideCard
              title="Workplace Safety"
              description="Navigate workplace situations safely and confidently."
              icon={<FileText className="h-5 w-5 text-rose-500" />}
              downloadable={false}
            />
            <SafetyGuideCard
              title="Dating Safety Tips"
              description="Stay safe while dating, both online and in person."
              icon={<FileText className="h-5 w-5 text-red-500" />}
              downloadable={false}
            />
          </div>
        </TabsContent>

        <TabsContent value="local-resources" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Local Safety Resources</CardTitle>
              <CardDescription>Safety resources and services available in your area.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <LocalResourceCard
                  title="Women's Safety Center"
                  description="Counseling, legal aid, and support services for women."
                  address="123 Main Street, Downtown"
                  phone="(555) 123-4567"
                  distance="1.2 miles"
                />
                <LocalResourceCard
                  title="City Police Station"
                  description="Local law enforcement with women's help desk."
                  address="456 Central Avenue"
                  phone="(555) 987-6543"
                  distance="2.5 miles"
                />
                <LocalResourceCard
                  title="Community Safety Workshop"
                  description="Free weekly self-defense classes for women."
                  address="789 Park Road, Community Center"
                  phone="(555) 456-7890"
                  distance="3.1 miles"
                />
                <LocalResourceCard
                  title="24/7 Crisis Center"
                  description="Emergency shelter and support for women in crisis."
                  address="101 Hope Street"
                  phone="(555) 789-0123"
                  distance="4.8 miles"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">View All Local Resources</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface ResourceCardProps {
  title: string
  description: string
  type: string
  icon: React.ReactNode
  meta: string
}

function ResourceCard({ title, description, type, icon, meta }: ResourceCardProps) {
  return (
    <Card className="overflow-hidden border hover:border-rose-200 transition-all hover:shadow-md">
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        {icon}
        <div>
          <Badge variant="outline">{type}</Badge>
          <CardTitle className="mt-1">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm">{description}</CardDescription>
        <div className="mt-2 flex items-center text-xs text-muted-foreground">
          <Clock className="mr-1 h-3 w-3" />
          <span>{meta}</span>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button variant="ghost" size="sm" className="w-full">
          <BookOpen className="mr-2 h-4 w-4" />
          View Resource
        </Button>
      </CardFooter>
    </Card>
  )
}

interface ContinueLearningCardProps {
  title: string
  progress: number
  icon: React.ReactNode
}

function ContinueLearningCard({ title, progress, icon }: ContinueLearningCardProps) {
  return (
    <Card className="overflow-hidden border hover:border-rose-200 transition-all hover:shadow-md">
      <CardContent className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-gray-100 p-2 rounded-full">{icon}</div>
          <div className="font-medium">{title}</div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        <Button variant="ghost" size="sm" className="w-full mt-3">
          Continue
        </Button>
      </CardContent>
    </Card>
  )
}

interface SelfDefenseCardProps {
  title: string
  description: string
  level: "Beginner" | "Intermediate" | "Advanced"
  duration: string
  image: string
}

function SelfDefenseCard({ title, description, level, duration, image }: SelfDefenseCardProps) {
  const levelColors = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-blue-100 text-blue-800",
    Advanced: "bg-purple-100 text-purple-800",
  }

  return (
    <Card className="overflow-hidden border-2 hover:border-rose-200 transition-all hover:shadow-md">
      <div className="relative h-36">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-2 right-2">
          <Badge className={levelColors[level]}>{level}</Badge>
        </div>
        <div className="absolute bottom-2 right-2">
          <Badge variant="secondary" className="bg-white bg-opacity-80">
            <Clock className="mr-1 h-3 w-3" />
            {duration}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="pt-0">
        <Button className="w-full bg-rose-600 hover:bg-rose-700">
          <Play className="mr-2 h-4 w-4" />
          Start Lesson
        </Button>
      </CardFooter>
    </Card>
  )
}

interface SafetyGuideCardProps {
  title: string
  description: string
  icon: React.ReactNode
  downloadable: boolean
}

function SafetyGuideCard({ title, description, icon, downloadable }: SafetyGuideCardProps) {
  return (
    <Card className="overflow-hidden border hover:border-rose-200 transition-all hover:shadow-md">
      <CardHeader className="flex flex-row items-start gap-3 pb-2">
        <div className="bg-gray-100 p-2 rounded-full">{icon}</div>
        <div>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription className="text-sm">{description}</CardDescription>
        </div>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" size="sm">
          <BookOpen className="mr-2 h-4 w-4" />
          Read Online
        </Button>
        {downloadable && (
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

interface LocalResourceCardProps {
  title: string
  description: string
  address: string
  phone: string
  distance: string
}

function LocalResourceCard({ title, description, address, phone, distance }: LocalResourceCardProps) {
  return (
    <div className="flex items-start space-x-4 p-4 rounded-lg border border-gray-100 hover:bg-gray-50">
      <div className="bg-rose-100 p-3 rounded-full text-rose-600">
        <MapPin className="h-5 w-5" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h4 className="font-medium text-gray-900">{title}</h4>
          <Badge variant="outline">{distance}</Badge>
        </div>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
        <div className="mt-2 text-sm">
          <p className="text-gray-600">{address}</p>
          <p className="text-gray-600">{phone}</p>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <Button variant="outline" size="sm">
          <MapPin className="mr-2 h-4 w-4" />
          Directions
        </Button>
        <Button variant="outline" size="sm">
          <Phone className="mr-2 h-4 w-4" />
          Call
        </Button>
      </div>
    </div>
  )
}
