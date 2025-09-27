import { deleteProduct } from "@/services/APIProducts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useDeleteProduct() {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (id) => deleteProduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Product deleted successfully");
    },
    onError(error) {
      toast.error(`Error deleting product: ${error.message}`);
    },
  });

  return { mutate, isPending };
}
