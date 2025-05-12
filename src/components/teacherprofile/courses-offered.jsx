import React from "react";

export default function CoursesOffered({ courses }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Courses Offered</h2>

      <div className="space-y-4">
        {courses.map((course, index) => (
          <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
            <h3 className="text-lg font-medium text-gray-800 mb-1">{course}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

