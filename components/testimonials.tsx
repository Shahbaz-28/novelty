import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      review:
        "Found the perfect gift for my sister's birthday! The unicorn mug is absolutely adorable and the quality is amazing.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60&text=SM",
    },
    {
      name: "Jake T.",
      review: "Love browsing here! Always find the most unique items that make great conversation starters.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60&text=JT",
    },
    {
      name: "Emma L.",
      review: "The creativity and quality of products here is unmatched. Such a fun shopping experience!",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60&text=EL",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600">Real feedback from our quirky community</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">"{testimonial.review}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
