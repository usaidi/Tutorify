import React from "react"
import { Clock, CheckCircle, XCircle } from "lucide-react"
import Image from "/public/bob.jpg" // Replace with normal <img> if not using Next.js image component

export default function RequestInboxSection({ requests, messages }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <RequestsSection requests={requests} />
      <InboxSection messages={messages} />
    </section>
  )
}

function RequestsSection({ requests }) {
  return (
    <div className="bg-gray-50 rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Your Tutor Requests</h2>

      <div className="space-y-4">
        {requests.map((request) => (
          <div key={request.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-900">{request.tutorName}</h3>
              <p className="text-sm text-gray-600">{request.subject}</p>
            </div>

            <div className="flex items-center">
              {request.status === "pending" && (
                <span className="flex items-center text-yellow-600">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm">Pending</span>
                </span>
              )}
              {request.status === "accepted" && (
                <span className="flex items-center text-green-600">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  <span className="text-sm">Accepted</span>
                </span>
              )}
              {request.status === "rejected" && (
                <span className="flex items-center text-red-600">
                  <XCircle className="w-4 h-4 mr-1" />
                  <span className="text-sm">Rejected</span>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function InboxSection({ messages }) {
  return (
    <div className="bg-gray-50 rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Messages from Tutors</h2>

      <div className="space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className="flex items-start p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
          >
            <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
              <img
                src={message.tutorAvatar || "/placeholder.svg"}
                alt={message.tutorName}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-medium text-gray-900 truncate">{message.tutorName}</h3>
                <span className="text-xs text-gray-500">{message.time}</span>
              </div>

              <p className="text-sm text-gray-600 truncate">{message.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
