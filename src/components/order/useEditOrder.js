import { editOrder, fetchDetailsOrder } from "@/services/APIOrders";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useEditStockProduct from "../checkout/useEditStockProduct";

export default function useEditOrder(setIsOpen) {
  const queryClient = useQueryClient();
  const { mutateAsync: updateStock } = useEditStockProduct();

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ orderId, newOrder }) => {
      const oldOrder = await fetchDetailsOrder(orderId);

      if (!oldOrder?.order) throw new Error("Order details not found");

      const isCancelNow =
        newOrder.status === "cancel" && oldOrder.status !== "cancel";
      const isUnCancelNow =
        oldOrder.status === "cancel" && newOrder.status !== "cancel";

      const grouped = {};
      for (const item of oldOrder.order) {
        const key = `${item.productId}_${item.size}`;
        if (!grouped[key]) {
          grouped[key] = {
            productId: item.productId,
            size: item.size,
            quantity: 0,
          };
        }
        grouped[key].quantity += Number(item.quantity);
      }

      if (isCancelNow) {
        await Promise.all(
          Object.values(grouped).map((p) =>
            updateStock({
              productId: p.productId,
              size: p.size,
              quantity: p.quantity,
              isIncrease: true,
            })
          )
        );
      }

      if (isUnCancelNow) {
        await Promise.all(
          Object.values(grouped).map((p) =>
            updateStock({
              productId: p.productId,
              size: p.size,
              quantity: p.quantity,
              isIncrease: false,
            })
          )
        );
      }

      return editOrder({ orderId, newOrder });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      queryClient.invalidateQueries({ queryKey: ["userOrders"] });
      toast.success("Order updated successfully");
      setIsOpen(false);
    },

    onError: (error) => {
      toast.error(error.message || "Error while editing order");
      setIsOpen(false);
    },
  });

  return { mutate, isPending };
}
