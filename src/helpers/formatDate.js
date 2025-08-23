export function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, '0');
    const month = date.toLocaleString("en-us", { month: "long" });
    const year = date.getFullYear();

    return `${day} ${month}, ${year}`;
}