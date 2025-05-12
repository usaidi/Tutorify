"use client"

import { useState } from "react"
import HeroSection from "../tutors-dashboard/hero-section"
import RequestSection from "../tutors-dashboard/request-section"
import ResponseSection from "../tutors-dashboard/response-section"
import StudentsSection from "../tutors-dashboard/students-section"
import { teacherData } from "../../../data/teacher-data"

export default function Dashboard() {
  const [data, setData] = useState(teacherData)

  const handleAcceptRequest = (requestId) => {
    setData((prevData) => ({
      ...prevData,
      requests: prevData.requests.map((request) =>
        request.id === requestId ? { ...request, status: "Accepted" } : request
      ),
    }))
  }

  const handleDeclineRequest = (requestId) => {
    setData((prevData) => ({
      ...prevData,
      requests: prevData.requests.map((request) =>
        request.id === requestId ? { ...request, status: "Declined" } : request
      ),
    }))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection teacherName={data.teacherName} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <RequestSection
          requests={data.requests}
          onAccept={handleAcceptRequest}
          onDecline={handleDeclineRequest}
        />
        <ResponseSection responses={data.responses} />
      </div>

      <StudentsSection students={data.students} />
    </div>
  )
}
