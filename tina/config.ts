import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  // Uncomment to allow cross-origin requests from non-localhost origins
  // during local development (e.g. GitHub Codespaces, Gitpod, Docker).
  // Use 'private' to allow all private-network IPs (WSL2, Docker, etc.)
  // server: {
  //   allowedOrigins: ['https://your-codespace.github.dev'],
  // },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
          {
            type: "image",
            name: "thumbnail",
            label: "Thumbnail Image",
          },
          {
            type: "string",
            name: "permalink",
            label: "Permalink",
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
          },
          {
            type: "number",
            name: "wpId",
            label: "WordPress ID",
          },
          {
            type: "string",
            name: "type",
            label: "Post Type",
          },

          {
            type: "string",
            name: "status",
            label: "Status",
            list: true,
          },

          {
            type: "string",
            name: "category",
            label: "Categories",
            list: true,
          },

          {
            type: "string",
            name: "tag",
            label: "Tags",
            list: true,
          },

          {
            type: "string",
            name: "post_format",
            label: "Post Format",
            list: true,
          },

          {
            type: "string",
            name: "onesignal_meta_box_present",
            label: "OneSignal Meta Box",
            list: true,
          },

          {
            type: "string",
            name: "onesignal_send_notification",
            label: "OneSignal Send Notification",
            list: true,
          },

          {
            type: "string",
            name: "onesignal_modify_title_and_content",
            label: "Modify Title & Content",
            list: true,
          },

          {
            type: "string",
            name: "onesignal_notification_custom_heading",
            label: "Notification Heading",
            list: true,
          },

          {
            type: "string",
            name: "onesignal_notification_custom_content",
            label: "Notification Content",
            list: true,
          },

          {
            type: "string",
            name: "dpsp_networks_shares",
            label: "DPSP Networks Shares",
            list: true,
          },

          {
            type: "string",
            name: "dpsp_networks_shares_total",
            label: "DPSP Shares Total",
            list: true,
          },

          {
            type: "string",
            name: "dpsp_networks_shares_last_updated",
            label: "DPSP Shares Last Updated",
            list: true,
          },

          {
            type: "string",
            name: "dpsp_cache_shares_twitter_2",
            label: "Twitter Share Cache",
            list: true,
          },

          {
            type: "string",
            name: "response_body",
            label: "Response Body",
            list: true,
          },

          {
            type: "string",
            name: "rank_math_primary_category",
            label: "Rank Math Primary Category",
            list: true,
          },

          {
            type: "string",
            name: "rank_math_title",
            label: "Rank Math SEO Title",
            list: true,
          },

          {
            type: "string",
            name: "rank_math_description",
            label: "Rank Math SEO Description",
            list: true,
          },

          {
            type: "string",
            name: "rank_math_canonical_url",
            label: "Canonical URL",
            list: true,
          },

          {
            type: "string",
            name: "rank_math_news_sitemap_robots",
            label: "News Sitemap Robots",
            list: true,
          },

          {
            type: "string",
            name: "rank_math_robots",
            label: "Robots",
            list: true,
          },

          {
            type: "string",
            name: "rank_math_internal_links_processed",
            label: "Internal Links Processed",
            list: true,
          },

          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
