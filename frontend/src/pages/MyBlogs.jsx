import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MyBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Dummy JSON data
    const dummyBlogs = [
      { _id: "1", title: "My First Blog", content: "This is my first blog post." },
      { _id: "2", title: "Learning React", content: "React makes UI development fun." },
    ];

    setBlogs(dummyBlogs);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">My Blogs</h1>

      {blogs.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">You haven't written any blogs yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.content}</p>
              <Link
                to={`/edit/${blog._id}`}
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg shadow hover:scale-105 transition-transform duration-300"
              >
                Edit
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
