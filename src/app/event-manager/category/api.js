import { endpoint, method } from "@/networking/endPoints";
import { fetchApi } from "@/networking/network";

export const getAllEventCategoryApi = () => {
  return fetchApi(endpoint.getAllEventCategory, null, method.get, true, false)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Event API Error:", error);
      throw error;
    });
};
