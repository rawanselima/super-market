import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";

export default function useSalesMonth(allOrders) {
  const currentDate = new Date();
  const currentMonth = format(currentDate, "yyyy-MM");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["salesByCategory", currentMonth, allOrders],
    queryFn: async () => {
      const ordersMonth = allOrders.filter((order) => {
        const date = new Date(order.date);
        const orderDate = format(date, "yyyy-MM");
        return orderDate === currentMonth && order.status !== "cancel";
      });

      const allOrdersMonth = ordersMonth.flatMap((order) => order.order);

      const categoryStats = {};

      allOrdersMonth.forEach((item) => {
        const category = item.categoryName || undefined;
        const price = +item.price || 0;
        const quantity = +item.quantity || 0;
        const total = price * quantity;

        if (!categoryStats[category]) {
          categoryStats[category] = {
            totalSales: 0,
            totalOrders: 0,
            totalQuantity: 0,
          };
        }

        categoryStats[category].totalSales += total;
        categoryStats[category].totalOrders += 1;
        categoryStats[category].totalQuantity += quantity;
      });

      const cartOrders = Object.entries(categoryStats).map(
        ([category, stats]) => ({
          category,
          totalSales: stats.totalSales,
          totalOrders: stats.totalOrders,
          totalQuantity: stats.totalQuantity,
        })
      );

      return cartOrders;
    },

    staleTime: 0,
  });

  return { data, isLoading, isError };
}
