import type React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Bell, Clock, Settings, Timer, MapPin, AlertTriangle, Info, Volume2, Smartphone, Mail } from "lucide-react"

export default function AlertsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Alerts</h1>
          <p className="text-muted-foreground">Manage your safety alerts and notification preferences.</p>
        </div>
        <Button className="bg-rose-600 hover:bg-rose-700">
          <Bell className="mr-2 h-4 w-4" />
          Test Alert
        </Button>
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList className="grid grid-cols-3 h-auto p-1">
          <TabsTrigger value="active" className="py-2">
            <Bell className="mr-2 h-4 w-4" />
            <span>Active Alerts</span>
          </TabsTrigger>
          <TabsTrigger value="history" className="py-2">
            <Clock className="mr-2 h-4 w-4" />
            <span>Alert History</span>
          </TabsTrigger>
          <TabsTrigger value="settings" className="py-2">
            <Settings className="mr-2 h-4 w-4" />
            <span>Alert Settings</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Safety Alerts</CardTitle>
              <CardDescription>Current alerts in your area and for your contacts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ActiveAlert
                title="Safety Timer Active"
                description="Timer will expire in 25 minutes. Check-in required."
                time="Started 5 minutes ago"
                type="timer"
                action={
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Extend
                    </Button>
                    <Button variant="default" size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                      Check In
                    </Button>
                  </div>
                }
              />

              <ActiveAlert
                title="Journey Sharing Active"
                description="Your journey to Home is being shared with Mom."
                time="Started 10 minutes ago"
                type="location"
                action={
                  <Button variant="outline" size="sm">
                    End Sharing
                  </Button>
                }
              />

              <ActiveAlert
                title="Area Alert: Downtown"
                description="Increased reports of street harassment in this area. Stay vigilant."
                time="Alert issued 2 hours ago"
                type="warning"
                action={
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                }
              />
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                All active alerts are also available offline and will trigger notifications based on your settings.
              </p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Alerts</CardTitle>
              <CardDescription>Alerts from your emergency contacts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ActiveAlert
                title="Mom started sharing location"
                description="Location sharing will end in 2 hours."
                time="Started 15 minutes ago"
                type="contact"
                action={
                  <Button variant="outline" size="sm">
                    View Location
                  </Button>
                }
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Alert History</CardTitle>
              <CardDescription>Record of past alerts and notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <AlertHistoryItem
                title="Safety Timer Completed"
                description="Timer ended successfully with check-in."
                time="Yesterday, 9:45 PM"
                type="timer"
                status="completed"
              />

              <AlertHistoryItem
                title="Journey Sharing Ended"
                description="Journey to Work completed safely."
                time="Yesterday, 8:30 AM"
                type="location"
                status="completed"
              />

              <AlertHistoryItem
                title="SOS Alert Triggered"
                description="Alert was canceled after 30 seconds."
                time="May 10, 7:15 PM"
                type="emergency"
                status="canceled"
              />

              <AlertHistoryItem
                title="Area Alert: University Campus"
                description="Suspicious activity reported near library."
                time="May 8, 11:20 PM"
                type="warning"
                status="expired"
              />

              <AlertHistoryItem
                title="Safety Check Missed"
                description="Emergency contacts were notified."
                time="May 5, 10:00 PM"
                type="timer"
                status="missed"
              />
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Complete History
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Alert Preferences</CardTitle>
              <CardDescription>Customize how and when you receive alerts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Alert Types</h3>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-4 w-4 text-amber-500" />
                    <Label htmlFor="safety-alerts">Safety Alerts</Label>
                  </div>
                  <Switch id="safety-alerts" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-blue-500" />
                    <Label htmlFor="location-alerts">Location-based Alerts</Label>
                  </div>
                  <Switch id="location-alerts" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Timer className="h-4 w-4 text-rose-500" />
                    <Label htmlFor="timer-alerts">Timer Reminders</Label>
                  </div>
                  <Switch id="timer-alerts" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Info className="h-4 w-4 text-violet-500" />
                    <Label htmlFor="community-alerts">Community Updates</Label>
                  </div>
                  <Switch id="community-alerts" defaultChecked />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Notification Methods</h3>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Smartphone className="h-4 w-4 text-gray-500" />
                    <Label htmlFor="push-notifications">Push Notifications</Label>
                  </div>
                  <Switch id="push-notifications" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Volume2 className="h-4 w-4 text-gray-500" />
                    <Label htmlFor="sound-alerts">Sound Alerts</Label>
                  </div>
                  <Switch id="sound-alerts" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <Label htmlFor="email-alerts">Email Alerts</Label>
                  </div>
                  <Switch id="email-alerts" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Alert Radius</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Receive alerts within</span>
                  <div className="flex items-center space-x-2">
                    <Badge>5 miles</Badge>
                    <Button variant="outline" size="sm">
                      Change
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-rose-600 hover:bg-rose-700">Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface ActiveAlertProps {
  title: string
  description: string
  time: string
  type: "timer" | "location" | "warning" | "contact" | string
  action: React.ReactNode
}

function ActiveAlert({ title, description, time, type, action }: ActiveAlertProps) {
  const getIcon = () => {
    switch (type) {
      case "timer":
        return <Timer className="h-5 w-5 text-rose-500" />
      case "location":
        return <MapPin className="h-5 w-5 text-blue-500" />
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-amber-500" />
      case "contact":
        return <Bell className="h-5 w-5 text-violet-500" />
      default:
        return <Bell className="h-5 w-5 text-gray-500" />
    }
  }

  const getBgColor = () => {
    switch (type) {
      case "timer":
        return "bg-rose-50"
      case "location":
        return "bg-blue-50"
      case "warning":
        return "bg-amber-50"
      case "contact":
        return "bg-violet-50"
      default:
        return "bg-gray-50"
    }
  }

  return (
    <div className={`flex items-start space-x-4 p-4 rounded-lg border ${getBgColor()}`}>
      <div className="bg-white p-2 rounded-full shadow-sm">{getIcon()}</div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h4 className="font-medium text-gray-900">{title}</h4>
        </div>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        <p className="text-xs text-gray-500 mt-1">{time}</p>
      </div>
      <div>{action}</div>
    </div>
  )
}

interface AlertHistoryItemProps {
  title: string
  description: string
  time: string
  type: "timer" | "location" | "warning" | "emergency" | string
  status: "completed" | "canceled" | "expired" | "missed" | string
}

function AlertHistoryItem({ title, description, time, type, status }: AlertHistoryItemProps) {
  const getIcon = () => {
    switch (type) {
      case "timer":
        return <Timer className="h-5 w-5" />
      case "location":
        return <MapPin className="h-5 w-5" />
      case "warning":
        return <AlertTriangle className="h-5 w-5" />
      case "emergency":
        return <Bell className="h-5 w-5" />
      default:
        return <Bell className="h-5 w-5" />
    }
  }

  const getStatusBadge = () => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>
      case "canceled":
        return <Badge className="bg-amber-100 text-amber-800">Canceled</Badge>
      case "expired":
        return <Badge className="bg-gray-100 text-gray-800">Expired</Badge>
      case "missed":
        return <Badge className="bg-red-100 text-red-800">Missed</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  const getIconColor = () => {
    switch (status) {
      case "completed":
        return "text-green-500"
      case "canceled":
        return "text-amber-500"
      case "expired":
        return "text-gray-500"
      case "missed":
        return "text-red-500"
      default:
        return "text-gray-500"
    }
  }

  return (
    <div className="flex items-start space-x-4 p-3 rounded-lg border border-gray-100 hover:bg-gray-50">
      <div className={`p-2 rounded-full bg-gray-100 ${getIconColor()}`}>{getIcon()}</div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h4 className="font-medium text-gray-900">{title}</h4>
          {getStatusBadge()}
        </div>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
        <p className="text-xs text-gray-400 mt-1">{time}</p>
      </div>
    </div>
  )
}
