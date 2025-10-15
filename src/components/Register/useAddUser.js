import { addUser } from "@/services/APIUsers";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useAddUser() {
  const navigate = useNavigate();
  const { mutate, isPending, isError } = useMutation({
    mutationFn: (newUser) => addUser(newUser),
    onSuccess: () => {
      navigate("/login");
    },
    onError() {
      toast.error("failed to register try again");
    },
  });

  return { mutate, isPending, isError };
}
