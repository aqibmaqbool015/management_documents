import { endpoint, method } from "@/networking/endPoints";
import { fetchApi } from "@/networking/network";

export const getAllEventTypesApi = () => {
  return fetchApi(endpoint.getAllEventTypes, null, method.get, true, false)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Event API Error:", error);
      throw error;
    });
};

export const createEventTypeApi = (params) => {
  return fetchApi(endpoint.createEventType, params, method.post, true, false)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Add Event API Error:", error);
      throw error;
    });
};
