import { endpoint, method } from "@/networking/endPoints";
import { fetchApi } from "@/networking/network";

export const resetPasswordApi = (params) => {
  return fetchApi(endpoint.resetPassword, params, method.post, true, false)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Reset API Error:", error);
      throw error;
    });
};
