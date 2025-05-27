import { Card, CardContent } from "@/components/ui/card"
import { Coffee, Gamepad2, PenTool, Home } from "lucide-react"

export default function Categories() {
  const categories = [
    { icon: Coffee, name: "Mugs & Drinkware", count: "120+ items", color: "bg-yellow-500" },
    { icon: Gamepad2, name: "Toys & Games", count: "85+ items", color: "bg-teal-500" },
    { icon: PenTool, name: "Stationery", count: "95+ items", color: "bg-purple-500" },
    { icon: Home, name: "Home Decor", count: "110+ items", color: "bg-orange-500" },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From coffee mugs that make you giggle to toys that spark imagination
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="group cursor-pointer hover:shadow-md transition-all">
              <CardContent className="p-6 text-center">
                <div
                  className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
