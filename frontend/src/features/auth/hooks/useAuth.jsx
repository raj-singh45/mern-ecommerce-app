import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { loginUserApi } from "../api/AuthApi";
import { useDispatch } from "react-redux";
import { addUser } from "../state/authSlice";
import { toast } from "react-toastify";

export const useAuth = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const registerForm = async (data) => {};
  const loginForm = async (data) => {
    try {
      console.log(data);
      let response = await loginUserApi(data);
      dispatch(addUser(response));
      console.log(response.data.accessToken)
      toast.success("user loggedIn successfully");
      navigate("/main")
    } catch (error) {
      toast.error("Invalid crediantials")
      console.log("error in loginApi", error.response?.data);
      console.log("status", error.response?.status);
    }
  };

  return {
    navigate,
    registerForm,
    loginForm,
    register,
    errors,
    handleSubmit,
  };
};
