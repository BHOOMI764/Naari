import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AlertCircle, Map, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-rose-600 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Naari</h1>
          <div className="space-x-2">
            <Button variant="outline" className="text-white border-white hover:bg-rose-700 hover:text-white">
              <Link href="/login">Login</Link>
            </Button>
            <Button className="bg-white text-rose-600 hover:bg-rose-100">
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-b from-rose-600 to-rose-500 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Safety in Your Hands</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Naari provides real-time assistance, educational resources, and community support to ensure your safety.
            </p>
            <Button size="lg" className="bg-white text-rose-600 hover:bg-rose-100">
              <Link href="/register">Get Started</Link>
            </Button>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                title="Emergency SOS"
                description="One-tap and voice-activated SOS triggers with real-time location sharing to emergency contacts."
                icon="alert-circle"
              />
              <FeatureCard
                title="Safe Routes"
                description="Get route suggestions based on crowdsourced safety data and share your journey with trusted contacts."
                icon="map"
              />
              <FeatureCard
                title="Community Support"
                description="Connect with verified support groups and find travel companions in your area."
                icon="users"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Naari</h3>
              <p className="text-gray-400">Empowering women through technology</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/about" className="hover:text-rose-400">
                About
              </Link>
              <Link href="/contact" className="hover:text-rose-400">
                Contact
              </Link>
              <Link href="/privacy" className="hover:text-rose-400">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-rose-400">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface FeatureCardProps {
  title: string
  description: string
  icon: "alert-circle" | "map" | "users"
}

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  // Map icon names to their components
  const iconMap = {
    "alert-circle": <AlertCircle className="w-6 h-6" />,
    map: <Map className="w-6 h-6" />,
    users: <Users className="w-6 h-6" />,
  }

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="bg-rose-100 text-rose-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
        {iconMap[icon]}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
