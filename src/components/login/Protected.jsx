import { addUser } from "@/redux/reducerUser";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Protected = ({ children }) => {
  const [user] = useLocalStorage("user");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === "admin") {
      dispatch(addUser(user));
    } else {
      navigate("/login");
    }
  }, [user, dispatch, navigate]);

  return user?.role === "admin" ? children : null;
};

export default Protected;
