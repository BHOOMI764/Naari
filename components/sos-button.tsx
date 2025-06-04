"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AlertCircle, X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"

export function SOSButton() {
  const [isSOSActive, setIsSOSActive] = useState(false)
  const [countdown, setCountdown] = useState(5)
  const [isCancelling, setIsCancelling] = useState(false)

  const handleSOSClick = () => {
    setIsSOSActive(true)

    // Start countdown
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          // This would trigger the actual SOS alert in a real app
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const handleCancel = () => {
    setIsCancelling(true)
    setTimeout(() => {
      setIsSOSActive(false)
      setCountdown(5)
      setIsCancelling(false)
    }, 500)
  }

  return (
    <>
      <Button onClick={handleSOSClick} className="bg-red-600 hover:bg-red-700 text-white font-bold" size="sm">
        <AlertCircle className="mr-2 h-4 w-4" />
        SOS
      </Button>

      <Dialog open={isSOSActive} onOpenChange={setIsSOSActive}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-red-600 text-2xl">Emergency SOS Activated</DialogTitle>
            <DialogDescription className="text-center">
              {countdown > 0 ? (
                <>
                  <p className="text-lg font-semibold">Sending alert in {countdown} seconds</p>
                  <p className="text-sm mt-1">
                    Your location and emergency information will be sent to your emergency contacts
                  </p>
                </>
              ) : (
                <>
                  <p className="text-lg font-semibold text-green-600">Alert sent successfully</p>
                  <p className="text-sm mt-1">Your emergency contacts have been notified with your current location</p>
                </>
              )}
            </DialogDescription>
          </DialogHeader>

          {countdown > 0 && <Progress value={(5 - countdown) * 20} className="h-2" />}

          <div className="flex justify-center">
            {countdown > 0 ? (
              <Button variant="destructive" className="w-full" onClick={handleCancel} disabled={isCancelling}>
                <X className="mr-2 h-4 w-4" />
                {isCancelling ? "Cancelling..." : "Cancel SOS"}
              </Button>
            ) : (
              <Button
                variant="default"
                className="w-full bg-green-600 hover:bg-green-700"
                onClick={() => setIsSOSActive(false)}
              >
                Close
              </Button>
            )}
          </div>

          <DialogFooter className="sm:justify-center">
            <div className="text-xs text-center text-gray-500">
              In a real emergency, call local emergency services directly
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
