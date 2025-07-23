import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../../Data/blogpost';

const BlogDetail = () => {
  const { slug } = useParams();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold">Blog not found</h1>
        <Link to="/blogs" className="text-blue-600 underline mt-4 inline-block">
          ← Go back to blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-md mb-6" />
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        {post.date} • By {post.author}
      </p>
      <div className="text-gray-800 leading-relaxed whitespace-pre-line">{post.content}</div>

      <Link to="/blogs" className="text-blue-600 underline mt-8 inline-block">
        ← Back to Blog List
      </Link>
    </div>
  );
};

export default BlogDetail;
