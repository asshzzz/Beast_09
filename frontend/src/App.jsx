import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import MyBlogs from "./pages/MyBlogs";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";
import BlogDetail from "./pages/BlogDetail";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import EditProfile from "./pages/EditProfile";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/myblogs" element={<MyBlogs />} />
      <Route path="/create" element={<CreateBlog />} />
      <Route path="/edit/:id" element={<EditBlog />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="*" element={<NotFound />} />     
      <Route path="/edit-profile" element={<EditProfile />} />
    </Routes>
  );
}
