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
    mediaRoot: "images",
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

          // {
          //   type: "string",
          //   name: "status",
          //   label: "Status",
          // },

      {
 type:"string",
 name:"category",
 label:"Categories",
 list:true,
},

        {
 type:"string",
 name:"tag",
 label:"Tags",
 list:true,
},

          {
            type: "string",
            name: "post_format",
            label: "Post Format",
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
  type: "image",
  name: "featuredImage",
  label: "Featured Image",
},

{
  type: "string",
  name: "slug",
  label: "Slug",
},

{
  type: "string",
  name: "metaTitle",
  label: "SEO Title",
},

{
  type: "string",
  name: "metaDescription",
  label: "SEO Description",
  textarea: true,
},

{
  type: "string",
  name: "focusKeyword",
  label: "Focus Keyword",
},

{
  type: "string",
  name: "keywords",
  label: "Meta Keywords",
  list: true,
},

{
  type: "string",
  name: "canonicalUrl",
  label: "Canonical URL",
},

{
  type: "string",
  name: "robots",
  label: "Robots",
},

{
  type: "image",
  name: "ogImage",
  label: "Open Graph Image",
},

{
  type: "string",
  name: "ogTitle",
  label: "OG Title",
},

{
  type: "string",
  name: "ogDescription",
  label: "OG Description",
},

{
  type: "string",
  name: "schemaType",
  label: "Schema Type",
},
          {
 type:"string",
 name:"status",
 label:"Status",
 options:[
   "publish",
   "draft",
 ],
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
