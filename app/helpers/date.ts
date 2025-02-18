export const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = { day: "2-digit", month: "short", year: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
};
