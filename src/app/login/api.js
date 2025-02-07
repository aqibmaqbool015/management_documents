import { endpoint, method } from "@/networking/endPoints";
import { fetchApi } from "@/networking/network";

export const loginApi = (params) => {
  return fetchApi(endpoint.login, params, method.post, false, false)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Login API Error:", error);
      throw error;
    });
};
