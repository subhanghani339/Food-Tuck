import { defineType } from "sanity";

export default defineType({
  name: "user",
  title: "User",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "password",
      title: "Password",
      type: "string",
    },
    {
      name: "parentCategories",
      title: "Parent Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "parentProductCategory" }] }],
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(2)
          .error("At least one parent category must be selected."),
    },
  ],
});
