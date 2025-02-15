import { defineType } from "sanity";

export default defineType({
  name: "cart",
  title: "Cart",
  type: "document",
  fields: [
    {
      name: "userId",
      title: "User ID",
      type: "string",
    },
    {
      name: "items",
      title: "Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "productId", title: "Product ID", type: "string" },
            { name: "name", title: "Product Name", type: "string" },
            { name: "price", title: "Price", type: "number" },
            { name: "quantity", title: "Quantity", type: "number" },
            { name: "image", title: "Image", type: "url" },
            { 
              name: "total", 
              title: "Total", 
              type: "number", 
              description: "Total cost (price * quantity)", 
            },
          ],
        },
      ],
    },
  ],
});
