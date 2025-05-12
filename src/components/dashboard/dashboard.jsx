

import React from "react"
import HeroSection from "./hero-section"
import TeachersSection from "./teachers-section"
import RequestInboxSection from "./request-inbox-section"
import { studentData, tutorsData, requestsData, messagesData } from "../../lib/mock.data"

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection
        studentName={studentData.name}
        headline="Brighter Future Starts with Better Learning."
        ctaText="Find Your Tutor"
      />

      <TeachersSection tutors={tutorsData} />

      <RequestInboxSection requests={requestsData} messages={messagesData} />
    </div>
  )
}
