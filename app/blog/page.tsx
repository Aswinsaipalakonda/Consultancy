import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GraduationCap, Calendar, User, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Clientura</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/gallery" className="text-gray-700 hover:text-blue-600 transition-colors">
                Gallery
              </Link>
              <Link href="/blog" className="text-blue-600 font-medium">
                Blog
              </Link>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Link href="/#counseling">Free Counseling</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Study Abroad Guides & Tips</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Expert insights, practical guides, and latest updates to help you navigate your international education
            journey
          </p>
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input type="text" placeholder="Search articles..." className="pl-10 pr-4 py-3 w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Featured Article</Badge>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Top Scholarships in Canada"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="outline">Scholarships</Badge>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-1" />
                      January 15, 2024
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="h-4 w-4 mr-1" />
                      Sarah Johnson
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Top 15 Scholarships in Canada for International Students 2024
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Discover the most lucrative scholarship opportunities in Canada, including government-funded
                    programs, university-specific scholarships, and merit-based awards that can significantly reduce
                    your education costs.
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700">Read Full Article</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-gray-600">Find articles that match your interests</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "All Articles", count: "120+", active: true },
              { name: "Scholarships", count: "25+" },
              { name: "Visa Guides", count: "30+" },
              { name: "University Rankings", count: "20+" },
              { name: "Test Preparation", count: "15+" },
              { name: "Country Guides", count: "18+" },
              { name: "Career Advice", count: "12+" },
            ].map((category, index) => (
              <Button key={index} variant={category.active ? "default" : "outline"} className="rounded-full">
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Articles Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "How to Crack Student Visa Interview: Complete Guide",
                excerpt:
                  "Master the art of visa interviews with our comprehensive guide covering common questions, preparation tips, and success strategies.",
                category: "Visa Guides",
                author: "Michael Chen",
                date: "January 12, 2024",
                readTime: "8 min read",
                image: "student visa interview preparation with documents",
              },
              {
                title: "IELTS vs TOEFL: Which Test Should You Choose?",
                excerpt:
                  "Compare IELTS and TOEFL tests to determine which English proficiency exam is best suited for your study abroad goals.",
                category: "Test Preparation",
                author: "Emma Wilson",
                date: "January 10, 2024",
                readTime: "6 min read",
                image: "english language test preparation books and materials",
              },
              {
                title: "Top 10 Universities in Germany for Engineering",
                excerpt:
                  "Explore Germany's leading engineering universities, their programs, admission requirements, and career prospects.",
                category: "University Rankings",
                author: "David Schmidt",
                date: "January 8, 2024",
                readTime: "10 min read",
                image: "german engineering university with modern facilities",
              },
              {
                title: "Complete Guide to Studying Medicine Abroad",
                excerpt:
                  "Everything you need to know about pursuing MBBS abroad, including top destinations, costs, and admission processes.",
                category: "Career Advice",
                author: "Dr. Priya Sharma",
                date: "January 5, 2024",
                readTime: "12 min read",
                image: "medical students in laboratory with equipment",
              },
              {
                title: "Australia Work Rights for International Students",
                excerpt:
                  "Understand your work rights as an international student in Australia, including part-time work regulations and post-study opportunities.",
                category: "Country Guides",
                author: "James Anderson",
                date: "January 3, 2024",
                readTime: "7 min read",
                image: "international students working part time in australia",
              },
              {
                title: "SOP Writing Guide: Stand Out from the Crowd",
                excerpt:
                  "Learn how to write a compelling Statement of Purpose that showcases your goals and secures university admission.",
                category: "Application Tips",
                author: "Lisa Thompson",
                date: "December 30, 2023",
                readTime: "9 min read",
                image: "student writing statement of purpose at desk",
              },
              {
                title: "UK Post-Study Work Visa: Complete Guide 2024",
                excerpt:
                  "Navigate the UK's Graduate Route visa system and learn how to extend your stay after completing your studies.",
                category: "Visa Guides",
                author: "Robert Davies",
                date: "December 28, 2023",
                readTime: "8 min read",
                image: "uk graduate students celebrating with diplomas",
              },
              {
                title: "Cheapest Countries to Study Abroad in 2024",
                excerpt:
                  "Discover affordable study destinations that offer quality education without breaking the bank, including living costs and scholarships.",
                category: "Country Guides",
                author: "Maria Rodriguez",
                date: "December 25, 2023",
                readTime: "11 min read",
                image: "affordable international universities with students",
              },
              {
                title: "MBA Abroad: ROI Analysis and Career Prospects",
                excerpt:
                  "Analyze the return on investment for international MBA programs and explore career opportunities in different countries.",
                category: "Career Advice",
                author: "Alex Kumar",
                date: "December 22, 2023",
                readTime: "13 min read",
                image: "mba students in business school classroom",
              },
            ].map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&query=${article.image}`}
                    alt={article.title}
                    width={400}
                    height={200}
                    className="rounded-lg mb-4"
                  />
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{article.category}</Badge>
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {article.date}
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get the latest study abroad tips, scholarship updates, and visa guides delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="flex-1 bg-white" />
              <Button className="bg-white text-blue-600 hover:bg-gray-100">Subscribe</Button>
            </div>
            <p className="text-sm text-blue-200 mt-4">Join 5,000+ students who get our weekly newsletter</p>
          </div>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Topics</h2>
            <p className="text-gray-600">Explore trending topics in international education</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Study in Canada",
              "IELTS Preparation",
              "Scholarship Tips",
              "Visa Interview",
              "University Rankings",
              "SOP Writing",
              "Study in USA",
              "Germany Education",
              "Australia Immigration",
              "UK Universities",
              "MBA Abroad",
              "Engineering Programs",
              "Medical Studies",
              "Post-Study Work",
              "Education Loans",
              "Test Preparation",
            ].map((tag, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 hover:bg-blue-50 cursor-pointer">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get personalized guidance from our expert counselors and turn your study abroad dreams into reality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/#counseling">Book Free Counseling</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              <Link href="/#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <GraduationCap className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">Clientura</span>
              </div>
              <p className="text-gray-400">Your trusted partner for international education since 2008.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-white transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="/#services" className="hover:text-white transition-colors">
                    Profile Evaluation
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-white transition-colors">
                    Visa Assistance
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-white transition-colors">
                    Scholarship Guidance
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact</h3>
              <p className="text-gray-400">Delhi, India</p>
              <p className="text-gray-400">+91 98765 43210</p>
              <p className="text-gray-400">info@clientura.com</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Clientura. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
