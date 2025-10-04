import { addOrder } from "@/services/APIOrders";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useAddOrder() {
  const { mutate, isPending } = useMutation({
    mutationFn: (newOrder) => addOrder(newOrder),
    onSuccess: () => {
      toast.success("Add Order Successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { mutate, isPending };
}
