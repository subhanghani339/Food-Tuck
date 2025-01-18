import { defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Product Title",
      type: "string",
      validation: (Rule) => Rule.required().error("Product Title is required"),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "images",
      title: "Product Images",
      type: "array",
      of: [{ type: "image" }],
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("A product must have at least 1 image and no more than 5 images."),
    },
    {
      name: "user",
      title: "User",
      type: "reference",
      to: [{ type: "user" }],
      validation: (Rule) => Rule.required().error("User is required"),
    },
    {
      name: "productCategory",
      title: "Product Category",
      type: "reference",
      to: [{ type: "productCategories" }],
      validation: (Rule) =>
        Rule.required().error("Product Category is required"),
    },
  ],
});
