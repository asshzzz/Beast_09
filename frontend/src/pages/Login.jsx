import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";  // <-- Link import kiya
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full animate-fadeIn">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Welcome Back!</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email" 
            className="border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
          />
          
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password" 
            className="border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
          />
          
          <button 
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-6">
          Don't have an account?{" "}
          <Link 
            to="/signup" 
            className="text-purple-500 font-medium hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
