import { addUser } from "@/redux/reducerUser";
import { allUsers } from "@/services/APIUsers";
import { useMutation } from "@tanstack/react-query";
import { useLocalStorage } from "@uidotdev/usehooks";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const navigate = useNavigate();
  const [user, setUser] = useLocalStorage("user", null);
  const dispatch = useDispatch();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (user) => {
      const users = await allUsers();
      const isLogin = users.find(
        (ele) => ele.phone === user.phone && ele.password === user.password
      );

      if (isLogin !== undefined) {
        if (isLogin.role === "user") navigate("/");
        else if (isLogin.role === "admin") navigate("/dashboard");

        toast.success("login Successfully");
        setUser(isLogin);
        dispatch(addUser(isLogin));
        return isLogin;
      } else {
        toast.error("phone Number or Password not correct please try again");
        return undefined;
      }
    },
  });

  return { mutate, isPending, isError };
}
