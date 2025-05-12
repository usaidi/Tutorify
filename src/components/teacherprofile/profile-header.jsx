import React from "react";
import { Pencil } from "lucide-react";
import { Navigate } from "react-router-dom";

export default function ProfileHeader({ name, bio, avatar, isEditing, setIsEditing }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <div className="relative">
          <div className="h-32 w-32 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow">
            <img
              src={avatar || "/placeholder.svg"}
              alt={name}
              width={150}
              height={150}
              className="object-cover h-full w-full"
            />
          </div>
        </div>

        <div className="flex-1 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{name}</h1>
            <button
              onClick={Navigate("/editprofile")}
              className="mt-2 sm:mt-0 inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md transition-colors"
            >
              <Pencil className="h-4 w-4 mr-2" />
              {isEditing ? "Cancel Edit" : "Edit Profile"}
            </button>
          </div>

          {/* <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-3">
            {subjects.map((subject, index) => (
              <span key={index} className="px-3 py-1 bg-teal-100 text-teal-800 text-sm rounded-full">
                {subject}
              </span>
            ))}
          </div> */}

          <p className="text-gray-600">{bio}</p>
        </div>
      </div>
    </div>
  );
}
