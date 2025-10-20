import { addFeedback } from "@/services/APIFeedback";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useAddFeedback(setIsOpen) {
  const queryClient = useQueryClient();
  const { mutate, isPending, isError } = useMutation({
    mutationFn: (message) => addFeedback(message),
    onSuccess: () => {
      toast.success("Add your feedback successfully");
      queryClient.invalidateQueries({ queryKey: ["feedback"] });
      setIsOpen(false);
    },
    onError: (error) => {
      toast.error(error.message);
      setIsOpen(false);
    },
  });

  return { mutate, isPending, isError };
}
