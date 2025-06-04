import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Shield, Users, BookOpen, Bell, Clock, CheckCircle2, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Safety Score"
          value="92%"
          description="Your overall safety rating"
          icon={<Shield className="h-5 w-5 text-emerald-500" />}
          trend="up"
        />
        <StatsCard
          title="Safe Zones"
          value="8"
          description="Configured safe locations"
          icon={<MapPin className="h-5 w-5 text-blue-500" />}
        />
        <StatsCard
          title="Emergency Contacts"
          value="5"
          description="People who can help you"
          icon={<Users className="h-5 w-5 text-violet-500" />}
        />
        <StatsCard
          title="Resources Completed"
          value="12/20"
          description="Safety tutorials completed"
          icon={<BookOpen className="h-5 w-5 text-amber-500" />}
          trend="up"
        />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your recent safety events and activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <ActivityItem
                title="Safe arrival confirmed"
                description="You arrived at Home safely"
                time="Today, 6:30 PM"
                icon={<CheckCircle2 className="h-5 w-5 text-emerald-500" />}
              />
              <ActivityItem
                title="Journey shared"
                description="Journey shared with Mom"
                time="Today, 5:15 PM"
                icon={<MapPin className="h-5 w-5 text-blue-500" />}
              />
              <ActivityItem
                title="Entered unsafe zone"
                description="Alert sent when entering Downtown area"
                time="Yesterday, 9:45 PM"
                icon={<AlertTriangle className="h-5 w-5 text-amber-500" />}
              />
              <ActivityItem
                title="Safety tutorial completed"
                description="Completed 'Basic Self Defense' tutorial"
                time="Yesterday, 3:20 PM"
                icon={<BookOpen className="h-5 w-5 text-violet-500" />}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used safety features</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <MapPin className="mr-2 h-4 w-4" />
                Share My Location
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Clock className="mr-2 h-4 w-4" />
                Set Safety Timer
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Users className="mr-2 h-4 w-4" />
                Call Emergency Contact
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Bell className="mr-2 h-4 w-4" />
                Send Safety Alert
              </Button>
              <div className="pt-2">
                <Link href="/dashboard/safety">
                  <Button className="w-full bg-rose-600 hover:bg-rose-700">View All Safety Tools</Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Safety Recommendations</CardTitle>
            <CardDescription>Personalized safety tips based on your activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <RecommendationItem
                title="Complete your emergency contacts"
                description="Add at least 3 more trusted contacts who can respond in emergencies."
                actionText="Add Contacts"
                actionLink="/dashboard/settings"
                priority="high"
              />
              <RecommendationItem
                title="Set up geofenced safe zones"
                description="Mark your frequent locations as safe zones for automated check-ins."
                actionText="Configure Zones"
                actionLink="/dashboard/map"
                priority="medium"
              />
              <RecommendationItem
                title="Take the personal safety assessment"
                description="Complete a 5-minute assessment to get personalized safety recommendations."
                actionText="Start Assessment"
                actionLink="/dashboard/resources"
                priority="low"
              />
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

interface StatsCardProps {
  title: string
  value: string
  description: string
  icon: React.ReactNode
  trend?: "up" | "down"
}

function StatsCard({ title, value, description, icon, trend }: StatsCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <div className="flex items-center mt-1">
              <h3 className="text-2xl font-bold">{value}</h3>
              {trend && (
                <span className={`ml-2 ${trend === "up" ? "text-emerald-500" : "text-red-500"}`}>
                  {trend === "up" ? "↑" : "↓"}
                </span>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-1">{description}</p>
          </div>
          <div className="bg-gray-100 p-3 rounded-full">{icon}</div>
        </div>
      </CardContent>
    </Card>
  )
}

interface ActivityItemProps {
  title: string
  description: string
  time: string
  icon: React.ReactNode
}

function ActivityItem({ title, description, time, icon }: ActivityItemProps) {
  return (
    <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50">
      <div className="bg-gray-100 p-2 rounded-full">{icon}</div>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-gray-900">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="text-xs text-gray-400 whitespace-nowrap">{time}</div>
    </div>
  )
}

interface RecommendationItemProps {
  title: string
  description: string
  actionText: string
  actionLink: string
  priority: "high" | "medium" | "low"
}

function RecommendationItem({ title, description, actionText, actionLink, priority }: RecommendationItemProps) {
  const priorityColors = {
    high: "bg-red-100 text-red-800",
    medium: "bg-amber-100 text-amber-800",
    low: "bg-blue-100 text-blue-800",
  }

  return (
    <div className="flex items-start space-x-4 p-4 rounded-lg border border-gray-100 hover:bg-gray-50">
      <div className="flex-1 min-w-0">
        <div className="flex items-center space-x-2 mb-1">
          <p className="font-medium text-gray-900">{title}</p>
          <Badge className={priorityColors[priority]}>
            {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
          </Badge>
        </div>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div>
        <Link href={actionLink}>
          <Button variant="outline" size="sm">
            {actionText}
          </Button>
        </Link>
      </div>
    </div>
  )
}
