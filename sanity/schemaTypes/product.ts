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
      name: "parentCategory",
      title: "Parent Product Category",
      type: "reference",
      to: [{ type: "parentProductCategory" }],
      options: {
        filter: ({ document }: any) => {
          const userRef = document?.user?._ref;  // Get the reference of the user
          console.log('User Reference:', userRef);  // Log the user reference
    
          // Check if user reference is available and user has parentCategories
          if (userRef && document?.user?.parentCategories) {
            const parentCategoriesRefs = document?.user?.parentCategories.map(
              (cat: any) => cat._ref
            ); // Extract the _ref of the parent categories
    
            console.log('User Parent Categories References:', parentCategoriesRefs); // Log parent categories references
    
            return {
              filter: '_id in $parentCategoriesRefs', // Filter parentCategory based on user's selected categories
              params: {
                parentCategoriesRefs, // Pass the user-selected parent category references
              },
            };
          }
    
          return {}; // Return empty filter if no parentCategories
        },
      },
      validation: (Rule) =>
        Rule.required().error("Parent Product Category is required"),
    },               
    {
      name: "childCategory",
      title: "Child Product Category",
      type: "reference",
      to: [{ type: "childProductCategory" }],
      options: {
        filter: ({ document }: any) => {
          const parentCategoryId = document?.parentCategory?._ref;
          return parentCategoryId
            ? {
                filter: 'parentCategory._ref == $parentCategoryId',
                params: { parentCategoryId },
              }
            : {};
        },
      },
      validation: (Rule) =>
        Rule.required().error("Child Product Category is required"),
    },
    
  ],
});
