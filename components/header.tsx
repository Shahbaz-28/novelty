import { Button } from "@/components/ui/button"
import { Sparkles, Menu, Users } from "lucide-react"
import Link from "next/link"

export default function Header() {
  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-10 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-purple-600 p-2 rounded-lg">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">QuirkyFinds</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
              Shop
            </Link>
            <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
              Categories
            </Link>
            <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
              About
            </Link>
            <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Users className="h-4 w-4 mr-2" />
              Contact
            </Button>
            <Button className="md:hidden" variant="ghost" size="sm">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
