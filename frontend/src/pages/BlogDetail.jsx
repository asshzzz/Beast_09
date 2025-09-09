import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api";

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    api(`/blogs/${id}`).then(setBlog).catch(console.error);
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-600">By {blog.author?.name}</p>
      <div className="mt-4">{blog.content}</div>
    </div>
  );
}
