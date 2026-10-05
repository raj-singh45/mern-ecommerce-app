import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { loginUserApi, logOutApi } from "../api/AuthApi";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../state/authSlice";
import { toast } from "react-toastify";
import { api } from "../../../api/config/api";

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
    console.log("LOGIN FORM CALLED");
    try {
      console.log(data); 
      const response = await loginUserApi(data);                                       
      dispatch(addUser(response));
      console.log(response.data.accessToken)
      toast.success("user loggedIn successfully");
      navigate("/main")
      reset()
    } catch (error) {
      toast.error("Invalid crediantials")
      reset()
    }
  };

 const logOut = async () => {
  try {
    await logOutApi();

    localStorage.removeItem("accessToken");
    delete api.defaults.headers.common["Authorization"];
    dispatch(removeUser())
    console.log("logout successfull")
    navigate("/");
  } catch (error) {
    console.log("Error in logout", error);
  }
};


  return {
    navigate,
    registerForm,
    loginForm,
    register,
    errors,
    handleSubmit,
    logOut
  };
};
