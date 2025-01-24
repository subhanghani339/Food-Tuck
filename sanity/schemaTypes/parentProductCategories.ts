import { defineType } from "sanity";

export default defineType({
  name: "parentProductCategory",
  title: "Parent Product Category",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Category Name",
      type: "string",
      validation: (Rule) => Rule.required().error("Category Name is required!"),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
});
