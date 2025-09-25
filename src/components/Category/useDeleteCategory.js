import { deleteCategory } from "@/services/APICategory";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
export default function useDeleteCategory() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (id) => deleteCategory(id),
    onSuccess: () => {
      toast.success("Category deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["allCategories"] });
    },
    onError: (error) => {
      toast.error("Failed to delete category. Please try again.");
      console.error("Error deleting category:", error.message);
    },
  });

  return { mutate, isPending };
}
