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

export const deleteEventTypeApi = async (userId) => {
  console.log("----end-ponitss", endpoint.deletedEventType, userId);

  try {
    const response = await fetchApi(
      `${endpoint.deletedEventType}/${userId}`,
      {},
      method.delete,
      true,
      false
    );
    return response;
  } catch (error) {
    console.error("Delete Event API Error:", error);
    throw error;
  }
};
