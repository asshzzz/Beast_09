import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api("/blogs", {
      method: "POST",
      body: { title, content },
      token,
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-lg w-full animate-fadeIn">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Create Blog</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="Title" 
            className="border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
          />

          <textarea 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            placeholder="Content" 
            rows={6}
            className="border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 resize-none"
          />

          <button 
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Post
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-6">
          Share your thoughts with the world!
        </p>
      </div>
    </div>
  );
}
