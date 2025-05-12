import { useState, useEffect } from "react";
import { Search, Star, GraduationCap, BookOpen, Users } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../src/components/ui/select";
import { Button } from "../src/components/ui/button";
import { Input } from "../src/components/ui/input";

export default function TutorSearch() {
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [subject, setSubject] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [tutorLevel, setTutorLevel] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const mockTutors = [
          {
            id: "1",
            name: "DAVID BLACK",
            rating: 3,
            price: 700000,
            education: "DOCTORAL of Computer Science",
            subjects: ["TOEIC", "Geography", "History"],
            studentsCount: 6,
            expertise:
              "Expert in machine learning, with a doctoral degree in Computer Science",
            image: "r1.jpg",
          },
          {
            id: "2",
            name: "BOB BROWN",
            rating: 4.2,
            price: 650000,
            education: "DOCTORAL of Astronomy",
            subjects: ["Physics", "Math", "Astronomy"],
            studentsCount: 12,
            expertise:
              "Specialized in astrophysics and advanced mathematics",
            image: "r1.jpg",
          },
          {
            id: "3",
            name: "SARAH JOHNSON",
            rating: 4.8,
            price: 800000,
            education: "MASTERS of Literature",
            subjects: ["English", "Creative Writing", "Literature"],
            studentsCount: 15,
            expertise:
              "Published author with expertise in creative writing and literary analysis",
            image: "r1.jpg",
          },
          {
            id: "4",
            name: "MICHAEL CHEN",
            rating: 4.5,
            price: 750000,
            education: "DOCTORAL of Chemistry",
            subjects: ["Chemistry", "Biology", "Physics"],
            studentsCount: 9,
            expertise:
              "Research scientist with experience in biochemistry and organic chemistry",
            image: "r1.jpg",
          },
        ];

        setTutors(mockTutors);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tutors:", error);
        setLoading(false);
      }
    };

    fetchTutors();
  }, []);

  const filteredTutors = tutors.filter((tutor) => {
    const matchesSearch =
      searchTerm === "" ||
      tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tutor.expertise.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 to-purple-800">
      <div className="container px-1 py-8">
        <div className="bg-teal-100 b-radius p-6 shadow-lg mb-8 w-screen h-screen pt-screen ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 ">
            <Select value={subject} onValueChange={setSubject}>
              <SelectTrigger className="w1-screen rounded-full border-gray-300">
                <SelectValue placeholder="Subject" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="math">Math</SelectItem>
                <SelectItem value="science">Science</SelectItem>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="history">History</SelectItem>
                <SelectItem value="geography">Geography</SelectItem>
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w1-screen rounded-full border-gray-300">
                <SelectValue placeholder="Price range: 10,000Rs - 100,000Rs" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="10000-30000">10,000Rs - 30,000Rs</SelectItem>
                <SelectItem value="30000-50000">30,000Rs - 50,000Rs</SelectItem>
                <SelectItem value="50000-70000">50,000Rs - 70,000Rs</SelectItem>
                <SelectItem value="70000-100000">70,000Rs - 100,000Rs</SelectItem>
              </SelectContent>
            </Select>

            <Select value={tutorLevel} onValueChange={setTutorLevel}>
              <SelectTrigger className="w1-screen rounded-full border-gray-300">
                <SelectValue placeholder="Tutor Level" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="matric">Matric</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                <SelectItem value="professional">Coding</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w1-screen rounded-full border-gray-300">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="rating-desc">Rating: High to Low</SelectItem>
                <SelectItem value="students-desc">Most Students</SelectItem>
              </SelectContent>
            </Select>

            <div className="relative">
              <Input
                type="text"
                placeholder="Search by name or keyword"
                className="w1-screen pl-10 pr-4 py-2 rounded-full border-gray-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-24 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>

            <div className="md:col-start-2 md:justify-self-end">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-8 ">Save</Button>
            </div>
          </div>
        </div>

        <h1 className="text-white text-center text-5xl font-bold mb-8">{filteredTutors.length} tutors available</h1>

        {loading ? (
          <div className="text-center text-white">Loading tutors...</div>
        ) : (
          <div className="space-y-6">
            {filteredTutors.map((tutor) => (
              <TutorCard key={tutor.id} tutor={tutor} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function TutorCard({ tutor }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 lg:w-1/5 p-4 flex justify-center">
          <div className="w-36 h-36 rounded-full overflow-hidden">
            <img src={tutor.image || "/placeholder.svg"} alt={tutor.name} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="w-full md:w-2/4 lg:w-3/5 p-4">
          <h2 className="text-3xl font-bold text-cyan-600 mb-2">{tutor.name}</h2>

          <div className="flex items-center mb-2">
            <GraduationCap className="text-purple-400 mr-2" size={20} />
            <span className="text-gray-600">{tutor.education}</span>
          </div>

          <div className="flex items-center mb-2">
            <BookOpen className="text-purple-400 mr-2" size={20} />
            <span className="text-gray-600">{tutor.subjects.join(", ")}</span>
          </div>

          <div className="flex items-center mb-2">
            <Users className="text-purple-400 mr-2" size={20} />
            <span className="text-gray-600">{tutor.studentsCount} students taught</span>
          </div>

          <p className="text-gray-600 mt-2">{tutor.expertise}</p>
        </div>

        <div className="w-full md:w-1/4 lg:w-1/5 p-4 flex flex-col items-center justify-center bg-gray-50">
          <div className="flex items-center mb-4">
            <Star className="text-yellow-400 fill-current" size={24} />
            <span className="text-3xl font-bold ml-2">{tutor.rating}</span>
          </div>

          <div className="text-3xl font-bold text-purple-600 mb-6">{tutor.price.toLocaleString()}₫</div>

          <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white rounded-full mb-2">
            Book This Tutor
          </Button>

          <Button
            variant="outline"
            className="w-full border-purple-500 text-purple-500 hover:bg-purple-50 rounded-full"
          >
            View Full Schedule
          </Button>
        </div>
      </div>
    </div>
  );
}
