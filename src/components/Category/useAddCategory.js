import { AddCategory } from "@/services/APICategory";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useAddCategory(setIsOpen) {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (newCategory) => AddCategory(newCategory),
    onSuccess: () => {
      toast.success("Category added successfully!");
      queryClient.invalidateQueries({ queryKey: ["allCategories"] });
      setIsOpen(false);
    },
    onError(error) {
      toast.error("Failed to add category. Please try again.");
      console.error("Error adding category:", error.message);
      setIsOpen(false);
    },
  });

  return { mutate, isPending };
}
