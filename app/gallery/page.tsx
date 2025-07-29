import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GraduationCap, Award, Users, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GalleryPage() {
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
              <Link href="/gallery" className="text-blue-600 font-medium">
                Gallery
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
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
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Success Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating our students' achievements - from visa approvals to university acceptances and memorable events
          </p>
        </div>
      </section>

      {/* Gallery Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Visa Approvals */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <Badge className="bg-green-100 text-green-800 mb-4">
                <Award className="h-4 w-4 mr-2" />
                Visa Success Stories
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Visa Approvals</h2>
              <p className="text-xl text-gray-600">Celebrating our 98% visa success rate</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Priya Sharma", country: "Canada", visa: "Study Permit", date: "Dec 2023" },
                { name: "Rahul Patel", country: "USA", visa: "F-1 Student Visa", date: "Nov 2023" },
                { name: "Ananya Singh", country: "UK", visa: "Student Visa", date: "Oct 2023" },
                { name: "Arjun Kumar", country: "Australia", visa: "Student Visa 500", date: "Sep 2023" },
                { name: "Sneha Gupta", country: "Germany", visa: "Student Visa", date: "Aug 2023" },
                { name: "Vikram Joshi", country: "New Zealand", visa: "Student Visa", date: "Jul 2023" },
                { name: "Meera Reddy", country: "Canada", visa: "Study Permit", date: "Jun 2023" },
                { name: "Karan Malhotra", country: "USA", visa: "F-1 Student Visa", date: "May 2023" },
              ].map((approval, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt={`${approval.name} visa approval`}
                      width={300}
                      height={200}
                      className="rounded-lg mb-4"
                    />
                    <CardTitle className="text-lg">{approval.name}</CardTitle>
                    <CardDescription>
                      {approval.country} - {approval.visa}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      Approved {approval.date}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* University Offer Letters */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <Badge className="bg-blue-100 text-blue-800 mb-4">
                <GraduationCap className="h-4 w-4 mr-2" />
                University Acceptances
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">University Offer Letters</h2>
              <p className="text-xl text-gray-600">Admissions to world's top universities</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  student: "Priya Sharma",
                  university: "University of Toronto",
                  program: "Computer Science",
                  country: "Canada",
                  scholarship: "$15,000",
                },
                {
                  student: "Rahul Patel",
                  university: "Stanford University",
                  program: "MBA",
                  country: "USA",
                  scholarship: "$25,000",
                },
                {
                  student: "Ananya Singh",
                  university: "Oxford University",
                  program: "International Relations",
                  country: "UK",
                  scholarship: "£12,000",
                },
                {
                  student: "Arjun Kumar",
                  university: "University of Melbourne",
                  program: "Engineering",
                  country: "Australia",
                  scholarship: "AUD 20,000",
                },
                {
                  student: "Sneha Gupta",
                  university: "Technical University Munich",
                  program: "Data Science",
                  country: "Germany",
                  scholarship: "€8,000",
                },
                {
                  student: "Vikram Joshi",
                  university: "University of Auckland",
                  program: "Business Administration",
                  country: "New Zealand",
                  scholarship: "NZD 18,000",
                },
              ].map((offer, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Image
                      src="/placeholder.svg?height=250&width=400"
                      alt={`${offer.student} offer letter`}
                      width={400}
                      height={250}
                      className="rounded-lg mb-4"
                    />
                    <CardTitle className="text-lg">{offer.student}</CardTitle>
                    <CardDescription>
                      {offer.university}, {offer.country}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Program:</span>
                      <span className="text-sm font-medium">{offer.program}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Scholarship:</span>
                      <Badge variant="secondary" className="text-green-600">
                        {offer.scholarship}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Events and Seminars */}
          <div>
            <div className="text-center mb-12">
              <Badge className="bg-purple-100 text-purple-800 mb-4">
                <Users className="h-4 w-4 mr-2" />
                Events & Seminars
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Events & Seminars</h2>
              <p className="text-xl text-gray-600">Educational events and student interactions</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Study in Canada Seminar",
                  date: "December 2023",
                  attendees: "200+ Students",
                  description: "Comprehensive seminar about studying in Canada with university representatives",
                },
                {
                  title: "USA University Fair",
                  date: "November 2023",
                  attendees: "300+ Students",
                  description: "Direct interaction with admissions officers from top US universities",
                },
                {
                  title: "IELTS Preparation Workshop",
                  date: "October 2023",
                  attendees: "150+ Students",
                  description: "Intensive IELTS preparation workshop with expert trainers",
                },
                {
                  title: "Scholarship Guidance Session",
                  date: "September 2023",
                  attendees: "180+ Students",
                  description: "Detailed session on finding and applying for international scholarships",
                },
                {
                  title: "Pre-Departure Orientation",
                  date: "August 2023",
                  attendees: "100+ Students",
                  description: "Essential guidance for students departing for their international studies",
                },
                {
                  title: "Alumni Success Meet",
                  date: "July 2023",
                  attendees: "250+ Attendees",
                  description: "Inspiring stories from our successful alumni studying abroad",
                },
              ].map((event, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt={event.title}
                      width={400}
                      height={200}
                      className="rounded-lg mb-4"
                    />
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Badge variant="outline">{event.attendees}</Badge>
                    <p className="text-sm text-gray-600">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards your international education journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/#counseling">Book Free Counseling</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
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
