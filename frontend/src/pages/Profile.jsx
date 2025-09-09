import { useAuth } from "../context/AuthContext";
import { User, Mail, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export default function Profile() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
        <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">⚠️ Please Login First</h2>
          <p className="text-white/80">You need to log in to view your profile.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 p-6">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-10 w-full max-w-lg text-center border border-white/20">
        
        {/* Profile Avatar */}
        <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white text-4xl font-bold shadow-lg mb-6">
          {user.name ? user.name.charAt(0).toUpperCase() : "U"}
        </div>

        {/* Name */}
        <h1 className="text-3xl font-extrabold text-white mb-2">{user.name}</h1>
        <p className="text-white/70 mb-6">🌟 Inspiring Member</p>

        {/* Details */}
        <div className="space-y-4 text-left">
          <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl shadow hover:bg-white/20 transition">
            <User className="text-pink-400 w-6 h-6" />
            <span className="text-white text-lg">{user.name}</span>
          </div>

          <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl shadow hover:bg-white/20 transition">
            <Mail className="text-cyan-400 w-6 h-6" />
            <span className="text-white text-lg">{user.email}</span>
          </div>

          <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl shadow hover:bg-white/20 transition">
            <Calendar className="text-yellow-400 w-6 h-6" />
            <span className="text-white text-lg">
              Joined: {new Date().toLocaleDateString()}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center mt-8">
          <Link to="/edit-profile">
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded-full text-white font-semibold hover:scale-105 transition shadow-lg">
            Edit Profile
          </button>
          </Link>
          <button className="bg-gradient-to-r from-red-500 to-orange-500 px-6 py-3 rounded-full text-white font-semibold hover:scale-105 transition shadow-lg">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
