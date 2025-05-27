import { Badge } from "@/components/ui/badge"
import { Smile } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-orange-100 text-orange-700">
              <Smile className="h-4 w-4 mr-1" />
              Our Story
            </Badge>

            <h2 className="text-3xl font-bold text-gray-900">Spreading Joy, One Quirky Find at a Time</h2>

            <div className="space-y-4 text-gray-600">
              <p>
                Founded by a team of creative souls who believe life's too short for boring stuff, QuirkyFinds curates
                the most delightfully weird and wonderful items from around the globe.
              </p>
              <p>
                Whether you're shopping for that friend who has everything or treating yourself to something special,
                we've got the perfect conversation starter waiting for you.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">500+</div>
                <div className="text-sm text-gray-600">Unique Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">10k+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">50+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1620652748508-86fdb7bfb500?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Happy team working with quirky products"
              width={500}
              height={400}
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
