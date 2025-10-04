import { editOrder } from "@/services/APIOrders";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useEditOrder(setIsOpen) {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: ({ orderId, newOrder }) => editOrder({ orderId, newOrder }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      toast.success("Edit Order Successfully");
      setIsOpen(false);
    },
    onError: (error) => {
      toast.error(error.message);
      setIsOpen(false);
    },
  });

  return { mutate, isPending };
}
