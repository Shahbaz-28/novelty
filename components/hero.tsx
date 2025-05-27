import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Star, Gift, Sparkles, PartyPopper } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-teal-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <Badge
                variant="secondary"
                className="bg-purple-100 text-purple-700 border-0 px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base"
              >
                🎉 Over 500+ Unique Items
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-[1.1]">
                Find Your Next
                <span className="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
                  {" "}
                  Favorite Thing
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Curated collection of quirky gifts, unique collectibles, and conversation starters that bring joy to
                everyday life.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
              >
                Shop Collection
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-2 w-full sm:w-auto"
              >
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Watch Story
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8 pt-2 sm:pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-purple-500 border-2 border-white"></div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-teal-500 border-2 border-white"></div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-500 border-2 border-white"></div>
                </div>
                <span className="text-xs sm:text-sm text-gray-600">10k+ happy customers</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-gray-600 ml-2">4.9/5 rating</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="lg:col-span-6 mt-8 lg:mt-0">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Main Featured Image */}
              <div className="relative z-10 bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-6 transform rotate-1 sm:rotate-2">
                <Image
                  src="https://images.unsplash.com/photo-1610702066263-7f75c6b565f9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Featured Product"
                  width={400}
                  height={300}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg sm:rounded-xl"
                />
                <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 bg-orange-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
                  Featured
                </div>
              </div>

              {/* Floating Icons - Adjusted for mobile */}
              <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 bg-white rounded-lg sm:rounded-xl shadow-lg p-2 sm:p-4 transform -rotate-3 sm:-rotate-6 z-20">
                <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
              </div>

              <div className="absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 bg-white rounded-lg sm:rounded-xl shadow-lg p-2 sm:p-4 transform rotate-6 sm:rotate-12 z-20">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
              </div>

              {/* Hide this floating icon on very small screens */}
              <div className="hidden sm:block absolute top-1/2 left-full transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg p-4 z-20 rotate-3">
                <PartyPopper className="w-8 h-8 text-pink-500" />
              </div>

              {/* Background Decorative Elements - Adjusted for mobile */}
              <div className="absolute top-6 sm:top-10 right-6 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-purple-200 rounded-full opacity-60 -z-10"></div>
              <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-teal-200 rounded-full opacity-60 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
