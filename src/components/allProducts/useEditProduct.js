import { editProduct } from "@/services/APIProducts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useEditProduct(setIsOpen) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ productId, updatedProduct }) =>
      editProduct({ productId, updatedProduct }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Product edited successfully");
      setIsOpen(false);
    },
    onError: (error) => {
      console.error("Error editing product:", error.message);
      setIsOpen(false);
    },
  });

  return { mutate, isPending };
}
