import { Mail, MessageSquare } from "lucide-react";

export default function StudentsSection({ students }) {
  return (
    <div className="bg-gray-50 rounded-xl shadow-md p-6 mt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Your Current Students</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {students.map((student) => (
          <div key={student.id} className="border rounded-lg p-4 transition-all hover:shadow-md flex flex-col">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium text-gray-800">{student.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{student.subjects.join(", ")}</p>
              </div>
              <div className="bg-blue-50 rounded-full p-2">
                <span className="text-xs font-medium text-blue-600">{student.startDate}</span>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-500">
              <p>{student.progress}</p>
            </div>

            <div className="mt-auto pt-4 flex space-x-2">
              <button className="flex items-center justify-center text-sm bg-blue-50 text-blue-600 rounded-md px-3 py-1.5 hover:bg-blue-100 transition-colors flex-1">
                <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                Message
              </button>
              <button className="flex items-center justify-center text-sm bg-gray-50 text-gray-600 rounded-md px-3 py-1.5 hover:bg-gray-100 transition-colors flex-1">
                <Mail className="w-3.5 h-3.5 mr-1.5" />
                Email
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
