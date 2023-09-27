import React, { useState } from "react";
import { useQuery } from "react-query";
import { getAllPostsForHome } from "../../lib/api"; // Adjust the import path accordingly

const PAGE_SIZE = 10; // Number of posts per page

function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const { data: posts, isLoading } = useQuery(
    ["posts", currentPage],
    () => getAllPostsForHome(false, currentPage, PAGE_SIZE),
    {
      keepPreviousData: true, // Keep old posts when fetching new ones for smoother pagination
    }
  );

  if (isLoading) return "Loading...";

  const heroPost = posts.edges[0].node;
  const remainingPosts = posts.edges.slice(1);

  return (
    <div>
      {/* Hero Blog */}
      <section>
        <h1>{heroPost.title}</h1>
        <p>{heroPost.excerpt}</p>
        {/* Add more hero post details and styling here */}
      </section>

      {/* Blog List */}
      <section>
        {remainingPosts.map(({ node: post }) => (
          <div key={post.slug}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            {/* Add more post details and styling here */}
          </div>
        ))}
      </section>

      {/* Pagination */}
      <div>
        <button
          onClick={() =>
            setCurrentPage((currentPage) => Math.max(currentPage - 1, 1))
          }
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
          disabled={remainingPosts.length < PAGE_SIZE}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default BlogPage;
