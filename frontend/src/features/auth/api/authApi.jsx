import { api } from "../../../api/config/api";

export const loginUserApi = async (crediantials) => {
  try {
    let res = await api.post("/auth/login", crediantials);

    localStorage.setItem(
      "accessToken",(res.data.data.accessToken),
    );

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const hydrationApi = async () => {
  let token = localStorage.getItem("accessToken");

  try {
    let res = await api.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const logOutApi = async()=>{
 return api.post("/auth/logOut")
}
