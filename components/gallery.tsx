import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Heart, Camera } from "lucide-react"
import Image from "next/image"

export default function Gallery() {
  const galleryItems = [
    {
      id: 1,
      image: "https://plus.unsplash.com/premium_photo-1664373233010-7c4abae40f78?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Our Best Sellers",
      category: "Featured",
      isVideo: false,
    },
    {
      id: 2,
      image:"https://images.unsplash.com/photo-1614940403522-a8c829e7eb82?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Adorable Mugs",
      category: "Drinkware",
      isVideo: false,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1696527014341-a874bd839540?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Soft Toys",
      category: "Toys",
      isVideo: false,
    },
    {
      id: 4,
      image: "https://plus.unsplash.com/premium_photo-1664970900025-1e3099ca757a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Store Interior",
      category: "Behind the Scenes",
      isVideo: false,
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1625768376503-68d2495d78c5?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Fun Stickers",
      category: "Stationery",
      isVideo: false,
    },
    // {
    //   id: 6,
    //   image: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   title: "Product Display",
    //   category: "Home Decor",
    //   isVideo: false,
    // },
    // {
    //   id: 7,
    //   image: "https://images.unsplash.com/photo-1483546363825-7ebf25fb7513?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   title: "Creative Journals",
    //   category: "Stationery",
    //   isVideo: false,
    // },
    // {
    //   id: 8,
    //   image: "https://images.unsplash.com/photo-1608533734358-06167a1844d4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   title: "Happy Faces",
    //   category: "Community",
    //   isVideo: false,
    // },
  ]

  const categories = ["All", "Drinkware", "Toys", "Stationery", "Home Decor", "Behind the Scenes", "Community"]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-purple-100 text-purple-700 mb-4">
            <Camera className="h-4 w-4 mr-1" />
            Photo Gallery
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">See Our Quirky World</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a peek behind the scenes and see our amazing products in action
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className={index === 0 ? "bg-purple-600 hover:bg-purple-700" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryItems.map((item, index) => (
            <Card
              key={item.id}
              className={`group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 ${
                // Large featured items
                index === 0 ? "col-span-2 row-span-2" : index === 3 ? "col-span-2" : index === 5 ? "row-span-2" : ""
              }`}
            >
              <div className="relative h-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-white/90 text-gray-900 hover:bg-white">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" className="bg-white/90 text-gray-900 hover:bg-white">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <Badge className="absolute top-3 left-3 bg-white/90 text-gray-900 text-xs">{item.category}</Badge>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h3 className="font-semibold text-white text-sm">{item.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            <Camera className="h-4 w-4 mr-2" />
            View More Photos
          </Button>
        </div>
      </div>
    </section>
  )
}