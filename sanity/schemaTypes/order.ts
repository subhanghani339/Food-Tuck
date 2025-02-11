export default {
    name: "order",
    title: "Orders",
    type: "document",
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
        { name: "createdAt", title: "Created At", type: "datetime" },
    ],
};
