import { GraduationCap } from "lucide-react";

export default function HeroSection({ teacherName }) {
  return (
    <div className="bg-gray-50 rounded-xl shadow-md p-6 md:p-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Welcome, {teacherName}</h1>
          <p className="text-gray-600 mt-2 text-lg">Welcome to your dashboard</p>
        </div>
        <div className="mt-4 md:mt-0 bg-blue-50 p-4 rounded-full">
          <GraduationCap className="w-10 h-10 text-blue-600" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-sm text-gray-500">Total Students</p>
          <p className="text-2xl font-bold text-gray-800">24</p>
        </div>
        <div className="bg-green-50 rounded-lg p-4">
          <p className="text-sm text-gray-500">Pending Requests</p>
          <p className="text-2xl font-bold text-gray-800">7</p>
        </div>
        <div className="bg-purple-50 rounded-lg p-4">
          <p className="text-sm text-gray-500">Completed Sessions</p>
          <p className="text-2xl font-bold text-gray-800">128</p>
        </div>
      </div>
    </div>
  );
}
