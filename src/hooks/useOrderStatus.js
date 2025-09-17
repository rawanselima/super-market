export default function useOrderStatus(statusOrder) {
  const styleStatus = `rounded-full px-4 py-2 text-sm ${
    statusOrder === "pending"
      ? "bg-yellow-100 text-yellow-800"
      : statusOrder === "processing"
      ? "bg-blue-100 text-blue-800"
      : statusOrder === "cancel"
      ? "bg-red-100 text-red-800"
      : statusOrder === "received"
      ? "bg-light-green text-green"
      : "bg-purple-100 text-purple-800"
  }`;

  return { styleStatus };
}
