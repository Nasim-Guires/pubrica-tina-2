import client from "@/tina/__generated__/client";
import Link from "next/link";

export default async function BlogList() {
  const postsResponse = await client.queries.postConnection();
  const posts = postsResponse.data.postConnection.edges;

  return (
    <main style={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px", fontFamily: "sans-serif" }}>
      <h1>Research Articles & Blogs</h1>
      <ul>
        {posts?.map((post) => {
          const filename = post?.node?._sys.filename;
          return (
            <li key={filename} style={{ margin: "10px 0" }}>
              {/* Ensure this points to /blogs/ */}
              <Link href={`/blogs/${filename}`}>
                {post?.node?.title || filename}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}