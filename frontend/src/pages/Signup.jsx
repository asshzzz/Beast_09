import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";   // <-- Link import kiya
import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const { signup } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(name, email, password);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 via-teal-500 to-blue-500">
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full animate-fadeIn">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Create Account</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Name" 
            className="border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
          />

          <input 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email" 
            className="border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
          />

          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password" 
            className="border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
          />

          <button 
            type="submit"
            className="bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold py-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Signup
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-6">
          Already have an account?{" "}
          <Link 
            to="/login" 
            className="text-teal-500 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
