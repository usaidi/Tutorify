// Categories.jsx
import { Link } from "react-router-dom";
import { BookOpen, Code, Calculator, Languages } from "lucide-react";

const categories = [
  {
    id: 1,
    title: "English",
    icon: <Languages className="h-10 w-10 text-cyan-500" />,
    color: "bg-red-100",
  },
  {
    id: 2,
    title: "Mathematics",
    icon: <Calculator className="h-10 w-10 text-cyan-500" />,
    color: "bg-blue-100",
  },
  {
    id: 3,
    title: "Coding",
    icon: <Code className="h-10 w-10 text-cyan-500" />,
    color: "bg-green-100",
  },
  {
    id: 4,
    title: "Biology",
    icon: <BookOpen className="h-10 w-10 text-cyan-500" />,
    color: "bg-yellow-100",
  },
];

export default function Categories() {
  return (
    <><hr />
    <section className="bg-cyan-500 py-16">
      <div className="container mx-auto px-4 mt-5">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-black">Popular Categories</h2>
          <p className="mt-4 text-gray-700">
            Find the perfect tutor for your needs, from test prep to language learning and academic help. Our
            experienced tutors are here to guide you to success.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="overflow-hidden rounded-lg bg-white p-6 shadow-xl shadow-gray-400 transition-transform hover:scale-105"
            >
              <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full ${category.color}`}>
                {category.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-800">{category.title}</h3>
              <Link
                to={`/category/${category.title.toLowerCase()}`}
                className="inline-block rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-500 transition-colors hover:bg-cyan-200"
              >
                See More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
