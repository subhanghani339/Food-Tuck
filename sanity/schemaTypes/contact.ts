import { defineType } from "sanity";

export default defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    {
      name: "firstName",
      title: "First Name",
      type: "string",
    },
    {
      name: "lastName",
      title: "Last Name",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "message",
      title: "Message",
      type: "string",
    },
  ],
});
