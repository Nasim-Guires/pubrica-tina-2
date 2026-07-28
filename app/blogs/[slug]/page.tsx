import client from "@/tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Link from "next/link";

export default async function BlogPostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const slug = params.slug;

  const res = await client.queries.post({ relativePath: `${slug}.md` });
  const post = res?.data?.post;

  if (!post) {
    return (
      <main
        style={{
          padding: "40px",
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        <h1>Post not found</h1>
        <p>Looking for relativePath: content/posts/{slug}.md</p>
      </main>
    );
  }

  return (
    <main
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "0 20px",
        fontFamily: "sans-serif",
      }}
    >
      {/* Back Button */}
      <p style={{ marginBottom: "20px" }}>
        <Link
          href="/blogs"
          style={{
            color: "#0070f3",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          ← Back to Blogs
        </Link>
      </p>

      {/* Categories / Tags Badge Area */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "15px",
          flexWrap: "wrap",
        }}
      >
        {post.category?.map((cat: string, index: number) => (
          <span
            key={index}
            style={{
              backgroundColor: "#eef2ff",
              color: "#4f46e5",
              padding: "4px 10px",
              borderRadius: "12px",
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Title */}
      <h1
        style={{
          fontSize: "32px",
          lineHeight: "1.3",
          marginBottom: "12px",
          color: "#111",
        }}
      >
        {post.title}
      </h1>

      {/* Author & Date Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#666",
          fontSize: "14px",
          marginBottom: "20px",
          borderBottom: "1px solid #eaeaea",
          paddingBottom: "15px",
        }}
      >
        <span>
          By{" "}
          <strong style={{ color: "#333" }}>{post.author || "Unknown"}</strong>
        </span>
        <span>
          Published on{" "}
          {post.date ? new Date(post.date).toLocaleDateString() : ""}
        </span>
      </div>

      {/* Thumbnail Image */}
      {post.thumbnail && (
        <img
          src={post.thumbnail}
          alt={post.title}
          style={{
            width: "100%",
            maxHeight: "450px",
            objectFit: "cover",
            borderRadius: "8px",
            marginBottom: "25px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          }}
        />
      )}

      {/* Main Blog Body Content */}
      <article
        style={{
          lineHeight: "1.8",
          fontSize: "16px",
          color: "#333",
          marginBottom: "40px",
        }}
      >
        <TinaMarkdown content={post.body} />
      </article>

      {/* SEO & Metadata Card */}
      <div
        style={{
          marginTop: "40px",
          padding: "20px",
          backgroundColor: "#f8fafc",
          border: "1px solid #e2e8f0",
          borderRadius: "8px",
          fontSize: "13px",
          color: "#475569",
        }}
      >
        <h3
          style={{
            margin: "0 0 12px 0",
            fontSize: "15px",
            color: "#1e293b",
            borderBottom: "1px solid #cbd5e1",
            paddingBottom: "8px",
          }}
        >
          SEO & Document Metadata
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
          }}
        >
          <div>
            <p style={{ margin: "4px 0" }}>
              <strong>Permalink:</strong> {post.permalink || "N/A"}
            </p>
            <p style={{ margin: "4px 0" }}>
              <strong>ID:</strong> {post.id || "N/A"}
            </p>
            <p style={{ margin: "4px 0" }}>
              <strong>Robot Directive:</strong>{" "}
              {post.rank_math_robots || "index"}
            </p>
          </div>
          <div>
            <p style={{ margin: "4px 0" }}>
              <strong>Filename:</strong> {post._sys.filename}
            </p>
            <p style={{ margin: "4px 0" }}>
              <strong>Extension:</strong> {post._sys.extension}
            </p>
            <p style={{ margin: "4px 0" }}>
              <strong>Path:</strong> {post._sys.relativePath}
            </p>
          </div>
        </div>

        {post.rank_math_description && (
          <div
            style={{
              marginTop: "12px",
              paddingTop: "8px",
              borderTop: "1px dashed #cbd5e1",
            }}
          >
            <p style={{ margin: "0" }}>
              <strong>SEO Description:</strong> {post.rank_math_description}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
