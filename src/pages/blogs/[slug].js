import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getPostAndMorePosts } from "../../lib/api";

function BlogPage() {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  const { data: postData, isLoading } = useQuery(
    ["post", slug],
    () => getPostAndMorePosts(slug),
    { enabled: !!slug } // Only run the query if slug is available
  );

  if (isLoading || !postData) return "Loading...";

  const post = postData.post;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <img
        src={post.featuredImage?.node?.sourceUrl}
        alt={post.title}
        className="w-full h-64 object-cover mb-4 rounded"
      />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}

export default BlogPage;
