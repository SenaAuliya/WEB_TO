import { Rule } from "sanity";

export const post = {
  name: "post",
  title: "post",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    {
      name: "publishedAt",
      title: "PublishedAt",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      validation: (Rule: Rule) => Rule.max(200).error("Max 200"),
    },
    {
      name: "body",
      title: "Body",
      type: "text",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{type: "image",},],
    },
  ],
};
