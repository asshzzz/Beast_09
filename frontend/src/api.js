// src/api.js

// Dummy API for now (sirf frontend testing ke liye)
export const api = {
  getBlogs: async () => {
    // return fake blogs
    return [
      { id: 1, title: "My First Blog", content: "This is a sample blog post." },
      { id: 2, title: "Learning React", content: "React makes UI building easy!" },
    ];
  },

  getBlog: async (id) => {
    // single blog return karo
    return { id, title: `Blog ${id}`, content: "This is blog content." };
  },

  createBlog: async (data) => {
    console.log("Blog created:", data);
    return { success: true };
  },

  updateBlog: async (id, data) => {
    console.log(`Blog ${id} updated:`, data);
    return { success: true };
  },

  deleteBlog: async (id) => {
    console.log(`Blog ${id} deleted`);
    return { success: true };
  },
};
