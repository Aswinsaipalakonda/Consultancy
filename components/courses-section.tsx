"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const coursesData = [
  {
    title: "Computer Science",
    level: "Undergraduate/Postgraduate",
    duration: "3-4 years / 1-2 years",
    requirements: "IELTS 6.5+, SAT/GRE",
    category: "Engineering",
  },
  {
    title: "Business Administration (MBA)",
    level: "Postgraduate",
    duration: "1-2 years",
    requirements: "IELTS 7.0+, GMAT/GRE, Work Experience",
    category: "MBA",
  },
  {
    title: "Medicine (MBBS)",
    level: "Undergraduate",
    duration: "5-6 years",
    requirements: "IELTS 7.0+, MCAT, Biology Background",
    category: "MBBS",
  },
  {
    title: "Mechanical Engineering",
    level: "Undergraduate/Postgraduate",
    duration: "3-4 years / 1-2 years",
    requirements: "IELTS 6.5+, SAT/GRE, Math/Physics",
    category: "Engineering",
  },
  {
    title: "Data Science",
    level: "Postgraduate",
    duration: "1-2 years",
    requirements: "IELTS 6.5+, GRE, Programming Skills",
    category: "Postgraduate",
  },
  {
    title: "Hospitality Management",
    level: "Diploma/Undergraduate",
    duration: "1-2 years / 3 years",
    requirements: "IELTS 6.0+, High School Diploma",
    category: "Diploma",
  },
  {
    title: "Civil Engineering",
    level: "Undergraduate",
    duration: "4 years",
    requirements: "IELTS 6.5+, SAT, Math/Physics",
    category: "Engineering",
  },
  {
    title: "Master of Finance",
    level: "Postgraduate",
    duration: "1-2 years",
    requirements: "IELTS 7.0+, GMAT/GRE, Economics Background",
    category: "Postgraduate",
  },
  {
    title: "Nursing",
    level: "Undergraduate",
    duration: "3-4 years",
    requirements: "IELTS 7.0+, Biology, Healthcare Experience",
    category: "Undergraduate",
  },
]

export default function CoursesSection() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Undergraduate", "Postgraduate", "Diploma", "MBA", "Engineering", "MBBS"]

  const filteredCourses =
    activeFilter === "All"
      ? coursesData
      : coursesData.filter((course) => course.category === activeFilter || course.level.includes(activeFilter))

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2">
        {filters.map((filter) => (
          <Button
            key={filter}
            variant={filter === activeFilter ? "default" : "outline"}
            className={`rounded-full transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm px-3 sm:px-4 py-2 ${
              filter === activeFilter
                ? "bg-blue-600 text-white shadow-lg scale-105"
                : "hover:bg-blue-50 hover:border-blue-300"
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredCourses.map((course, index) => (
          <Card
            key={index}
            className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-md"
          >
            <CardHeader className="p-4 sm:p-6">
              <div className="flex justify-between items-start mb-2">
                <CardTitle className="text-base sm:text-lg text-gray-900 leading-tight">{course.title}</CardTitle>
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors text-xs"
                >
                  {course.category}
                </Badge>
              </div>
              <CardDescription className="text-sm sm:text-base text-gray-600">{course.level}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 p-4 sm:p-6 pt-0">
              <div>
                <span className="text-xs sm:text-sm font-medium text-gray-700">Duration: </span>
                <span className="text-xs sm:text-sm text-gray-600">{course.duration}</span>
              </div>
              <div>
                <span className="text-xs sm:text-sm font-medium text-gray-700">Requirements: </span>
                <span className="text-xs sm:text-sm text-gray-600">{course.requirements}</span>
              </div>
              <Button
                className="w-full mt-4 transform hover:scale-105 bg-transparent border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 text-sm"
                variant="outline"
              >
                Get Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-8 sm:py-12">
          <p className="text-gray-500 text-base sm:text-lg">No courses found for the selected filter.</p>
        </div>
      )}
    </>
  )
}
