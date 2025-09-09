import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function EditProfile() {
  const { user } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: backend API call karke profile update karna hoga
    console.log("Updated Profile:", { name, email });
    navigate("/profile"); // Update hone ke baad profile page par redirect
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 w-full max-w-md text-center border border-white/20">
        <h1 className="text-3xl font-bold text-white mb-6">Edit Profile</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
          <div>
            <label className="text-white font-semibold">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg mt-2 bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="text-white font-semibold">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg mt-2 bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold py-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 mt-4"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
