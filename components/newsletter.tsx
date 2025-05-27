import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export default function Newsletter() {
  return (
    <section className="py-16 bg-purple-600">
      <div className="container mx-auto px-10 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-white">Stay in the Loop!</h2>
          <p className="text-lg text-purple-100">
            Join our quirky community and be the first to know about new arrivals and exclusive content.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="bg-white border-0 text-gray-900" />
            <Button className="bg-white text-purple-600 hover:bg-gray-100">
              <Mail className="h-4 w-4 mr-2" />
              Subscribe
            </Button>
          </div>

          <p className="text-sm text-purple-200">No spam, just quirky goodness!</p>
        </div>
      </div>
    </section>
  )
}
