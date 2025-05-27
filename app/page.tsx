import Header from "@/components/header"
import Hero from "@/components/hero"
import Categories from "@/components/categories"
import FeaturedProducts from "@/components/featured-products"
import Gallery from "@/components/gallery"
import About from "@/components/about"
import Testimonials from "@/components/testimonials"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"

export default function NoveltyShopMVP() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Gallery />
      <About />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  )
}
