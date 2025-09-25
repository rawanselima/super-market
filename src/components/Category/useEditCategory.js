import { EditCategory } from "@/services/APICategory";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useEditCategory(setIsOpen) {
  const queryClient = useQueryClient();
  const { mutate, isPending, isError } = useMutation({
    mutationFn: ({ id, newCategory }) => EditCategory({ id, newCategory }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allCategories"] });
      toast.success("Category updated successfully");
      setIsOpen(false);
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
      setIsOpen(false);
    },
  });

  return { mutate, isPending, isError };
}
