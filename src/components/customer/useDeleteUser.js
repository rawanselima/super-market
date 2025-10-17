import { deleteUser } from "@/services/APIUsers";
import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useDeleteUser(setIsOpen) {
  const queryClient = useQueryClient();
  const { mutate, isPending, isError } = useMutation({
    mutationFn: (userId) => deleteUser(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.success("Deleted user successfully");
      setIsOpen(false);
    },
    onError: (error) => {
      toast.success(error.message);
    },
  });

  return { mutate, isPending, isError };
}
