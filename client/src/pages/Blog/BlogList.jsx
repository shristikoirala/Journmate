import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../Data/blogpost';

const BlogList = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Latest Blogs</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="border rounded-xl shadow-md hover:shadow-lg transition p-4">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-xl font-semibold mt-4">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{post.date} • By {post.author}</p>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>

            <Link
              to={`/blog/${post.slug}`}
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
