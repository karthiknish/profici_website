import React, { useState } from "react";
import { useQuery } from "react-query";
import { getAllPostsForHome } from "../../lib/api";
import Head from "next/head";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";
const PAGE_SIZE = 10;

// Utility function to convert HTML to plain text
function htmlToText(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}

function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const { data: posts, isLoading } = useQuery(
    ["posts", currentPage],
    () => getAllPostsForHome(false, currentPage, PAGE_SIZE),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return (
      <div className="p-4 space-y-4">
        <Skeleton height={300} />
        <div className="grid grid-cols-3 gap-4">
          {[...Array(9)].map((_, idx) => (
            <div key={idx} className="space-y-4">
              <Skeleton height={100} />
              <Skeleton height={20} />
              <Skeleton height={20} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  const heroPost = posts?.edges?.[0]?.node;
  const remainingPosts = posts?.edges?.slice(1) || [];

  return (
    <>
      <Head>
        <title>Our Blogs</title>
      </Head>
      <div className="p-4">
        {/* Hero Blog */}
        {heroPost && (
          <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <img
              src={heroPost.featuredImage?.node?.sourceUrl}
              alt={heroPost.title}
              className="w-full h-64 object-cover mb-4 rounded"
            />
            <h1 className="text-3xl font-bold">{heroPost.title}</h1>
            <p>{htmlToText(heroPost.excerpt)}</p>
          </motion.section>
        )}

        {/* Blog List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="grid grid-cols-3 gap-4">
            {remainingPosts.map(({ node: post }) => (
              <Link key={post.slug} href={`/blogs/${post.slug}`}>
                <div className="p-4 border rounded shadow">
                  <img
                    src={post.featuredImage?.node?.sourceUrl}
                    alt={post.title}
                    className="w-full h-32 object-cover mb-4 rounded"
                  />
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <p className="text-sm truncate">{htmlToText(post.excerpt)}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Pagination */}
        <div className="mt-8 flex justify-between">
          <button
            onClick={() =>
              setCurrentPage((currentPage) => Math.max(currentPage - 1, 1))
            }
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="self-center">Page {currentPage}</span>
          <button
            onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
            disabled={remainingPosts.length < PAGE_SIZE}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default BlogPage;
