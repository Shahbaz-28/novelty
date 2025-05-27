import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Star, Gift, Sparkles, PartyPopper } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-teal-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-10 py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-0 px-4 py-2">
                🎉 Over 500+ Unique Items
              </Badge>

              <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1]">
                Find Your Next
                <span className="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
                  {" "}Favorite Thing
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Curated collection of quirky gifts, unique collectibles, and conversation starters that bring joy to
                everyday life.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg">
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2">
                <Play className="mr-2 h-5 w-5" />
                Watch Story
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-teal-500 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-orange-500 border-2 border-white"></div>
                </div>
                <span className="text-sm text-gray-600">10k+ happy customers</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-2">4.9/5 rating</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Main Featured Image */}
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6 transform rotate-2">
                <Image
                  src="https://images.unsplash.com/photo-1610702066263-7f75c6b565f9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Featured Product"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="absolute -top-3 -right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 transform -rotate-6 z-20">
                <Gift className="w-8 h-8 text-purple-600" />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 transform rotate-12 z-20">
                <Sparkles className="w-8 h-8 text-yellow-500" />
              </div>

              <div className="absolute top-1/2 left-full transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg p-4 z-20 rotate-3">
                <PartyPopper className="w-8 h-8 text-pink-500" />
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-purple-200 rounded-full opacity-60 -z-10"></div>
              <div className="absolute bottom-10 left-10 w-16 h-16 bg-teal-200 rounded-full opacity-60 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
