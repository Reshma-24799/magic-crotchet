import { Link } from "react-router-dom"
import { Heart, Award, Users, Truck, ArrowRight } from "lucide-react"

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Handmade with Love",
      description:
        "Every piece is carefully crafted by skilled artisans who pour their passion and expertise into each stitch. We believe in the beauty of handmade items that carry the maker's personal touch.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description:
        "We use only the finest materials - from soft merino wool to durable cotton yarns. Each product undergoes quality checks to ensure it meets our high standards for comfort and longevity.",
    },
    {
      icon: Users,
      title: "Community Focused",
      description:
        "We support local artisans and their families, providing fair wages and sustainable employment. When you buy from us, you're supporting traditional craftsmanship and local communities.",
    },
    {
      icon: Truck,
      title: "Sustainable Practices",
      description:
        "We're committed to eco-friendly practices, using natural and recycled materials whenever possible. Our packaging is minimal and recyclable, reducing our environmental footprint.",
    },
  ]

  const timeline = [
    {
      year: "2018",
      title: "The Beginning",
      description:
        "Started as a small home-based business with a passion for crochet and a dream to share beautiful handmade items with the world.",
    },
    {
      year: "2020",
      title: "Growing Community",
      description:
        "Expanded our team of artisans and launched our online store, reaching customers across the country with our unique crochet creations.",
    },
    {
      year: "2022",
      title: "Sustainable Focus",
      description:
        "Committed to using eco-friendly materials and sustainable practices, partnering with suppliers who share our environmental values.",
    },
    {
      year: "2024",
      title: "Today",
      description:
        "Proud to serve thousands of happy customers with over 500 unique handmade items, while supporting a network of talented artisans.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-50 to-secondary-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 text-balance">
                Our Story of <span className="text-primary-600">Craftsmanship</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-pretty">
                Founded with a passion for traditional crochet techniques and a vision to bring handmade beauty into
                modern homes. Every piece tells a story of dedication, skill, and love for the craft.
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 group"
              >
                Shop Our Collection
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="/hookandcrotchet.jpg"
                alt="Artisan working on crochet"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-600">500+</p>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            To preserve and celebrate the art of crochet by creating beautiful, high-quality handmade items that bring
            warmth, comfort, and joy to people's lives. We believe in the power of handmade craftsmanship to connect
            people, support communities, and create lasting memories.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">What We Stand For</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our values guide everything we do, from selecting materials to supporting our artisan community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">From humble beginnings to a thriving community of artisans.</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start space-x-6">
                  {/* Timeline dot */}
                  <div className="hidden md:flex w-16 h-16 bg-primary-600 rounded-full items-center justify-center flex-shrink-0 relative z-10">
                    <span className="text-white font-bold">{item.year}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-lg p-6 shadow-sm">
                    <div className="md:hidden mb-2">
                      <span className="inline-block bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">
            Ready to Experience Handmade Quality?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Discover our collection of beautiful, handcrafted crochet items and bring a piece of our story into your
            home.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center bg-white hover:bg-gray-100 text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200 group"
          >
            Browse Our Collection
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
