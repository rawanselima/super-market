import { addOrder } from "@/services/APIOrders";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import toast from "react-hot-toast";

export default function useAddOrder() {
  const currentMonthAndYear = format(new Date(), "yyyy-MM");
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (newOrder) => addOrder(newOrder),
    onSuccess: () => {
      toast.success("Add Order Successfully");
      queryClient.invalidateQueries([
        "orderMonth",
        { month: currentMonthAndYear },
      ]);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { mutate, isPending };
}
