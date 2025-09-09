import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api";

export default function EditBlog() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    api(`/blogs/${id}`).then((blog) => {
      setTitle(blog.title);
      setContent(blog.content);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api(`/blogs/${id}`, { method: "PUT", body: { title, content }, token });
    navigate(`/blogs/${id}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 via-teal-500 to-blue-500">
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-lg w-full animate-fadeIn">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Edit Blog</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="Title" 
            className="border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
          />

          <textarea 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            placeholder="Content" 
            rows={6}
            className="border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300 resize-none"
          />

          <button 
            type="submit"
            className="bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold py-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Update
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-6">
          Edit your blog and keep your content up-to-date!
        </p>
      </div>
    </div>
  );
}
