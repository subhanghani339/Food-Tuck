import { defineType } from "sanity";

export default defineType({
  name: "childProductCategory",
  title: "Child Product Category",
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
    {
      name: "parentCategory",
      title: "Parent Category",
      type: "reference",
      to: [{ type: "parentProductCategory" }],
      validation: (Rule) =>
        Rule.required().error("Parent Category is required!"),
    },
  ],
});
