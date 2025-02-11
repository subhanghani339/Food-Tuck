export default {
  name: "order",
  title: "Orders",
  type: "document",
  initialValue: {
    status: "pending",
  },
  fields: [
    { name: "firstName", title: "First Name", type: "string" },
    { name: "lastName", title: "Last Name", type: "string" },
    { name: "email", title: "Email", type: "string" },
    { name: "phone", title: "Phone", type: "string" },
    { name: "company", title: "Company", type: "string" },
    { name: "country", title: "Country", type: "string" },
    { name: "state", title: "State", type: "string" },
    { name: "city", title: "City", type: "string" },
    { name: "zipCode", title: "Zip Code", type: "string" },
    { name: "address", title: "Address", type: "text" },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Processing", value: "processing" },
          { title: "Completed", value: "completed" },
          { title: "Cancelled", value: "cancelled" },
        ],
      },
    },
    { name: "createdAt", title: "Created At", type: "datetime" },
  ],
};
