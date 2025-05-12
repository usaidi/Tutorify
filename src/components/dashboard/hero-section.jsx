// src/components/HeroSection.jsx

import React from "react"
import { Button } from "../../components/ui/button"

export default function HeroSection({ studentName, headline, ctaText }) {
  return (
    <section className="bg-gray-50 rounded-xl shadow-md p-8 mb-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Welcome, {studentName}</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{headline}</h1>
        <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg text-lg font-medium">
          <a href="/tutors">
          {ctaText}
          </a>
        </Button>
      </div>
    </section>
  )
}
