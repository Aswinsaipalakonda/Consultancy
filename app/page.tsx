import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Globe, Users, Award, BookOpen, MessageCircle, Star, MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import CoursesSection from "@/components/courses-section"
import WhatsAppButton from "@/components/whatsapp-button"
import CounselingForm from "@/components/counseling-form"
import ContactForm from "@/components/contact-form"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              <span className="text-xl sm:text-2xl font-bold text-gray-900">Clientura</span>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="#destinations" className="text-gray-700 hover:text-blue-600 transition-colors">
                Destinations
              </Link>
              <Link href="#courses" className="text-gray-700 hover:text-blue-600 transition-colors">
                Courses
              </Link>
              <Link href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </Link>
              <Link href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">
                Testimonials
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-sm sm:text-base px-3 sm:px-4 py-2">
              <Link href="#counseling">Free Counseling</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 text-xs sm:text-sm">
                  🌟 Trusted by 10,000+ Students
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                  Your Gateway to <span className="text-blue-600">Global Education</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Transform your dreams into reality with expert guidance for studying abroad. From university selection
                  to visa approval, we're with you every step of the way.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-base sm:text-lg px-6 sm:px-8 py-3">
                  <Link href="#counseling" className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                    Book Free Counseling
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 py-3 bg-transparent">
                  <Link href="#destinations" className="flex items-center gap-2">
                    <Globe className="h-4 w-4 sm:h-5 sm:w-5" />
                    Explore Destinations
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">98%</div>
                  <div className="text-xs sm:text-sm text-gray-600">Visa Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Partner Universities</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <Image
                src="/hero.jpg"
                alt="Students studying abroad"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:max-w-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Clientura?</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive support for your international education journey
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Expert Counselors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Certified counselors with 15+ years of experience in international education
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>98% Success Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Proven track record with thousands of successful visa approvals</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Global Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Partnerships with 500+ universities across 15+ countries</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle>End-to-End Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">From profile evaluation to post-arrival support, we're with you</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/about.jpg"
                alt="Our team"
                width={600}
                height={500}
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div>
                <Badge className="bg-blue-100 text-blue-800 mb-4">About Clientura</Badge>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Empowering Dreams, Creating Futures
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                  For over 15 years, Clientura has been the trusted partner for students aspiring to study abroad. Our
                  mission is to make international education accessible and achievable for every student.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  With a team of certified counselors and partnerships with top universities worldwide, we've helped
                  over 10,000 students achieve their academic dreams across 15+ countries.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">10,000+</div>
                  <div className="text-sm sm:text-base text-gray-600">Students Placed</div>
                </div>
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-sm sm:text-base text-gray-600">University Partners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Study Destinations */}
      <section id="destinations" className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Popular Study Destinations
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Explore world-class education opportunities across the globe
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                country: "Canada",
                flag: "🇨🇦",
                universities: "200+ Universities",
                visa: "Study Permit",
                tuition: "$15,000 - $35,000/year",
                work: "20 hrs/week during studies",
                image: "canadian university campus with maple leaves",
                imageLink: "https://www.torontosom.ca/wp-content/uploads/2022/04/top-cities-in-canada-for-international-travellers.jpg",
              },
              {
                country: "USA",
                flag: "🇺🇸",
                universities: "300+ Universities",
                visa: "F-1 Student Visa",
                tuition: "$20,000 - $50,000/year",
                work: "On-campus work allowed",
                image: "american university campus with students",
                imageLink: "https://leapscholar.com/blog/wp-content/uploads/2022/04/shutterstock_57571180-min.jpg",
              },
              {
                country: "UK",
                flag: "🇬🇧",
                universities: "150+ Universities",
                visa: "Student Visa (Tier 4)",
                tuition: "£15,000 - £40,000/year",
                work: "20 hrs/week during studies",
                image: "british university with historic architecture",
                imageLink: "https://www.planetware.com/wpimages/2020/03/england-top-rated-cities-london.jpg",
              },
              {
                country: "Australia",
                flag: "🇦🇺",
                universities: "100+ Universities",
                visa: "Student Visa (500)",
                tuition: "AUD 20,000 - 45,000/year",
                work: "40 hrs/fortnight",
                image: "australian university campus with modern buildings",
                imageLink: "https://wastemanagementreview.com.au/wp-content/uploads/2018/10/sydney-pic.jpg",
              },
              {
                country: "Germany",
                flag: "🇩🇪",
                universities: "80+ Universities",
                visa: "Student Visa",
                tuition: "€500 - €3,000/year",
                work: "120 full days/year",
                image: "german university with traditional architecture",
                imageLink: "https://www.immigrantspirit.com/wp-content/uploads/2024/04/germany-cologne-view-to-the-city-with-rhine-river.jpg",
              },
              {
                country: "New Zealand",
                flag: "🇳🇿",
                universities: "40+ Universities",
                visa: "Student Visa",
                tuition: "NZD 22,000 - 35,000/year",
                work: "20 hrs/week during studies",
                image: "new zealand university with scenic mountains",
                imageLink: "https://www.virtualoceania.net/newzealand/photos/cities/auckland/nz0191.jpg",
              },
            ].map((destination, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <Image
                    src={destination.imageLink}
                    alt={`${destination.country} universities`}
                    width={400}
                    height={200}
                    className="rounded-lg mb-4 object-cover"
                  />
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <span className="text-2xl">{destination.flag}</span>
                    {destination.country}
                  </CardTitle>
                  <CardDescription>{destination.universities}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Visa Type:</span>
                    <span className="text-sm font-medium">{destination.visa}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Tuition:</span>
                    <span className="text-sm font-medium">{destination.tuition}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Work Rights:</span>
                    <span className="text-sm font-medium">{destination.work}</span>
                  </div>
                  <Button className="w-full mt-4 bg-transparent" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Offered */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Courses We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Find the perfect program for your career goals</p>
          </div>
          <CoursesSection />
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support for your study abroad journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Profile Evaluation",
                description: "Comprehensive assessment of your academic profile and career goals",
                color: "blue",
              },
              {
                icon: BookOpen,
                title: "SOP/LOR Assistance",
                description: "Expert help in crafting compelling statements and recommendation letters",
                color: "green",
              },
              {
                icon: Globe,
                title: "Visa Assistance",
                description: "Complete visa application support with 98% success rate",
                color: "purple",
              },
              {
                icon: Award,
                title: "Application Submission",
                description: "Professional application submission to your chosen universities",
                color: "orange",
              },
              {
                icon: Star,
                title: "Scholarship Guidance",
                description: "Help you find and apply for scholarships and financial aid",
                color: "pink",
              },
              {
                icon: MapPin,
                title: "Pre-Departure Support",
                description: "Complete guidance for accommodation, travel, and settling abroad",
                color: "indigo",
              },
            ].map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                  <Button className="mt-4 bg-transparent" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our successful students who are now studying abroad
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                country: "Canada",
                university: "University of Toronto",
                image: "young indian female student smiling",
                imageLink: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=200&h=200&facepad=2&q=80",
                quote: "Clientura made my dream of studying in Canada a reality. Their guidance was invaluable!",
              },
              {
                name: "Rahul Patel",
                country: "USA",
                university: "Stanford University",
                image: "young indian male student with graduation cap",
                imageLink: "https://lh3.googleusercontent.com/a-/ALV-UjVO4UjyeIFW6hZoGrhwNKhlehzbfv_hUTZ2MCGVJkv_a4D339Ch=w80-h80-c-rp-mo-br100",
                quote: "The visa process seemed daunting, but Clientura's team made it smooth and stress-free.",
              },
              {
                name: "Ananya Singh",
                country: "UK",
                university: "Oxford University",
                image: "young indian female student with books",
                imageLink: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=200&h=200&facepad=2&q=80",
                quote: "From application to arrival, Clientura supported me every step of the way. Highly recommended!",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image
                    src={testimonial.imageLink}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>
                    {testimonial.university}, {testimonial.country}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your study abroad journey? Contact us today!
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Visit Our Office</h3>
                  <p className="text-gray-600">Vizag - 530 002</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Call Us</h3>
                  <p className="text-gray-600">+91 70936 64846</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email Us</h3>
                  <p className="text-gray-600">contact@clientura.com</p>
                </div>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/en/5/56/Google_maps_screenshot.png"
                  alt="Office location map"
                  width={500}
                  height={300}
                  className="rounded-lg w-full"
                />
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Free Counseling Form */}
      <section id="counseling" className="py-12 sm:py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Book Your Free Counseling Session
              </h2>
              <p className="text-lg sm:text-xl text-blue-100">Get personalized guidance from our expert counselors</p>
            </div>
            <CounselingForm />
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <GraduationCap className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">Clientura</span>
              </div>
              <p className="text-gray-400 mb-6">
                Your trusted partner for international education. Making study abroad dreams come true since 2008.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="text-white border-gray-600 hover:bg-gray-800 bg-transparent"
                >
                  WhatsApp
                </Button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="#about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#destinations" className="hover:text-white transition-colors">
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link href="#courses" className="hover:text-white transition-colors">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Profile Evaluation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Visa Assistance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Scholarship Guidance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pre-Departure Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Delhi, India</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 70936 64846</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@clientura.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Clientura. All rights reserved. | Privacy Policy | Terms & Conditions</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
