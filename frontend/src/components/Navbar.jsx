import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-800 text-white p-3 flex justify-between">
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {user && <Link to="/create">Create Blog</Link>}
        {user && <Link to="/myblogs">My Blogs</Link>}
        {user?.role === "admin" && <Link to="/admin">Admin</Link>}
      </div>

      <div className="flex gap-4">
        {user ? (
          <>
            <Link to="/profile">{user.name}</Link>
            <button onClick={logout} className="bg-red-600 px-2 py-1 rounded">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}
