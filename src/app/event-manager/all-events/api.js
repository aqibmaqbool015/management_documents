import { endpoint, method } from "@/networking/endPoints";
import { fetchApi } from "@/networking/network";

export const getAllEventApi = () => {
  return fetchApi(endpoint.getAllEvent, null, method.get, true, false)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("All Event API Error:", error);
      throw error;
    });
};
