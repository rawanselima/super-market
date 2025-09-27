import { addProduct } from "@/services/APIProducts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useAddProduct(setIsOpen) {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (newProduct) => addProduct(newProduct),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Product added successfully");
      setIsOpen(false);
    },
    onError(error) {
      toast.error(`Error adding product: ${error.message}`);
      setIsOpen(false);
    },
  });

  return { mutate, isPending };
}
