import { api } from "../../../api/config/api";

export const loginUserApi = async (crediantials) => {
  try {
    let res = await api.post("/auth/login", crediantials);

    console.log(res.data);

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
  console.log(token)

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
