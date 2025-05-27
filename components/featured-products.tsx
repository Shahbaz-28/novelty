import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Eye, Heart } from "lucide-react"
import Image from "next/image"

export default function FeaturedProducts() {
const products = [
  {
    name: "Giant Teddy Bear",
    description: "5ft soft plush teddy - perfect gift",
    rating: 4.9,
    image: "https://plus.unsplash.com/premium_photo-1725075087153-610264ca9cbd?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "Bestseller",
    badgeColor: "bg-pink-500",
  },
  {
    name: "LED Light-Up Fidget Spinner",
    description: "Colorful light-up spinner with 6 modes",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1514435542839-ed9380d2e9f6?q=80&w=2061&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "Trending",
    badgeColor: "bg-blue-500",
  },
  {
    name: "Avengers Toys",
    description: "Best Toys",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1599623560574-39d485900c95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "New",
    badgeColor: "bg-green-500",
  },
  {
    name: "Pop Culture Bobbleheads",
    description: "Collection of famous character bobbleheads",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1690949855008-a00f0c04cb45?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "Popular",
    badgeColor: "bg-purple-500",
  },
];


  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="text-center mb-12">
          <Badge className="bg-teal-100 text-teal-700 mb-4">Popular Items</Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="group cursor-pointer hover:shadow-lg transition-all overflow-hidden">
              <div className="relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="w-full h-48 object-cover"
                />
                <Badge className={`absolute top-3 left-3 ${product.badgeColor} text-white`}>{product.badge}</Badge>
                <Button
                  size="sm"
                  variant="secondary"
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}