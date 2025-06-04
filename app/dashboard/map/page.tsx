"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation, Shield, AlertTriangle, Home, Briefcase, Heart, Coffee } from "lucide-react"

export default function SafeMapPage() {
  const [searchValue, setSearchValue] = useState("")
  const [isJourneySharing, setIsJourneySharing] = useState(false)
  const [isSafeRouteEnabled, setIsSafeRouteEnabled] = useState(true)

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Safe Map</CardTitle>
                  <CardDescription>View safe routes and zones in your area</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Label htmlFor="safe-route" className="text-sm">
                    Safe Route
                  </Label>
                  <Switch id="safe-route" checked={isSafeRouteEnabled} onCheckedChange={setIsSafeRouteEnabled} />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden relative">
                  {/* This would be replaced with an actual map component */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-500">Interactive map would be displayed here</p>
                  </div>

                  {/* Map overlay elements */}
                  <div className="absolute top-4 left-4 right-4">
                    <div className="bg-white p-2 rounded-md shadow-sm">
                      <div className="flex items-center space-x-2">
                        <Input
                          placeholder="Search for a location"
                          value={searchValue}
                          onChange={(e) => setSearchValue(e.target.value)}
                          className="flex-1"
                        />
                        <Button variant="default" size="sm" className="bg-rose-600 hover:bg-rose-700">
                          Search
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
                    <Button variant="outline" size="icon" className="bg-white">
                      <MapPin className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="bg-white">
                      <Navigation className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="bg-white">
                      <Shield className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-xs">Safe Zone</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <span className="text-xs">Caution Zone</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <span className="text-xs">Unsafe Zone</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Label htmlFor="journey-sharing" className="text-sm">
                      Journey Sharing
                    </Label>
                    <Switch id="journey-sharing" checked={isJourneySharing} onCheckedChange={setIsJourneySharing} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Safety Alerts in Your Area</CardTitle>
              <CardDescription>Recent community reports near you</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <AlertItem
                  title="Street Harassment Reported"
                  location="Main St & 5th Ave"
                  time="2 hours ago"
                  severity="medium"
                />
                <AlertItem
                  title="Poor Lighting Conditions"
                  location="Central Park East Entrance"
                  time="Yesterday"
                  severity="low"
                />
                <AlertItem
                  title="Suspicious Activity"
                  location="Downtown Transit Station"
                  time="2 days ago"
                  severity="high"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>My Safe Zones</CardTitle>
              <CardDescription>Locations you've marked as safe</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="saved">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="saved">Saved</TabsTrigger>
                  <TabsTrigger value="add">Add New</TabsTrigger>
                </TabsList>
                <TabsContent value="saved" className="space-y-4 pt-4">
                  <SafeZoneItem name="Home" address="123 Maple Street" icon={<Home className="h-4 w-4" />} />
                  <SafeZoneItem name="Work" address="456 Corporate Plaza" icon={<Briefcase className="h-4 w-4" />} />
                  <SafeZoneItem name="Mom's House" address="789 Oak Avenue" icon={<Heart className="h-4 w-4" />} />
                  <SafeZoneItem name="Favorite Café" address="101 Barista Lane" icon={<Coffee className="h-4 w-4" />} />
                  <Button variant="outline" className="w-full mt-2">
                    Manage Safe Zones
                  </Button>
                </TabsContent>
                <TabsContent value="add" className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="zone-name">Zone Name</Label>
                    <Input id="zone-name" placeholder="E.g., Home, Work, Gym" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zone-address">Address</Label>
                    <Input id="zone-address" placeholder="Enter address" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zone-radius">Safety Radius (meters)</Label>
                    <Input id="zone-radius" type="number" defaultValue={100} />
                  </div>
                  <div className="flex items-center space-x-2 pt-2">
                    <Switch id="auto-check-in" />
                    <Label htmlFor="auto-check-in">Auto check-in when I arrive</Label>
                  </div>
                  <Button className="w-full mt-4 bg-rose-600 hover:bg-rose-700">Add Safe Zone</Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Journey Planning</CardTitle>
              <CardDescription>Plan and share your route</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="journey-from">From</Label>
                  <Input id="journey-from" placeholder="Current location" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="journey-to">To</Label>
                  <Input id="journey-to" placeholder="Destination" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="journey-when">When</Label>
                  <Input id="journey-when" type="datetime-local" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="journey-share">Share With</Label>
                  <Input id="journey-share" placeholder="Select contacts" />
                </div>
                <div className="flex items-center space-x-2 pt-2">
                  <Switch id="journey-safe-route" defaultChecked />
                  <Label htmlFor="journey-safe-route">Prefer safer routes</Label>
                </div>
                <Button className="w-full mt-2 bg-rose-600 hover:bg-rose-700">Plan Journey</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

interface AlertItemProps {
  title: string
  location: string
  time: string
  severity: "low" | "medium" | "high"
}

function AlertItem({ title, location, time, severity }: AlertItemProps) {
  const severityColors = {
    low: "bg-blue-100 text-blue-800",
    medium: "bg-amber-100 text-amber-800",
    high: "bg-red-100 text-red-800",
  }

  return (
    <div className="flex items-start space-x-4 p-3 rounded-lg border border-gray-100 hover:bg-gray-50">
      <div className="bg-gray-100 p-2 rounded-full">
        <AlertTriangle
          className={`h-5 w-5 ${severity === "high" ? "text-red-500" : severity === "medium" ? "text-amber-500" : "text-blue-500"}`}
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center space-x-2">
          <p className="font-medium text-gray-900">{title}</p>
          <Badge className={severityColors[severity]}>{severity.charAt(0).toUpperCase() + severity.slice(1)}</Badge>
        </div>
        <p className="text-sm text-gray-500">{location}</p>
        <p className="text-xs text-gray-400">{time}</p>
      </div>
      <Button variant="ghost" size="sm">
        View
      </Button>
    </div>
  )
}

interface SafeZoneItemProps {
  name: string
  address: string
  icon: React.ReactNode
}

function SafeZoneItem({ name, address, icon }: SafeZoneItemProps) {
  return (
    <div className="flex items-center space-x-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50">
      <div className="bg-rose-100 text-rose-600 p-2 rounded-full">{icon}</div>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-gray-900">{name}</p>
        <p className="text-xs text-gray-500 truncate">{address}</p>
      </div>
      <Button variant="ghost" size="icon">
        <MapPin className="h-4 w-4" />
      </Button>
    </div>
  )
}
