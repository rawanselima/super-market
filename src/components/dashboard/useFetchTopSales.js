import { fetchCategories } from "@/services/APICategory";
import { fetchAllOrders } from "@/services/APIOrders";
import { fetchAllProducts } from "@/services/APIProducts";
import { useQuery } from "@tanstack/react-query";

export default function useFetchTopSales() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["bestSellers"],
    queryFn: async () => {
      const allProducts = await fetchAllProducts();
      const allOrders = await fetchAllOrders();
      const allCategories = await fetchCategories();

      console.log(allProducts);

      let bestSellers = allProducts.map((product) => ({
        ...product,
        category: allCategories.find(
          (ele) => ele.id === product.categoryId && ele.name
        ),
        price: 0,
        orderNumber: 0,
        totalPrice: 0,
      }));

      const orders = allOrders?.flatMap((ele) => ele?.order || []) || [];

      orders.forEach((order) => {
        const product = bestSellers.find(
          (p) => p.productId === order.productId
        );
        if (product) {
          product.price = +order.price;
          product.orderNumber += +order.quantity;
          product.totalPrice += +order.quantity * +order.price;
        }
      });

      bestSellers.sort((a, b) => b.orderNumber - a.orderNumber);

      const top10 = bestSellers.slice(0, 10);

      return top10;
    },
  });

  return { data, isLoading, isError };
}
