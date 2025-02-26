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

export const createEventCategoryApi = (params) => {
  return fetchApi(
    endpoint.createdEventCategory,
    params,
    method.post,
    true,
    true
  )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Add Event API Error:", error);
      throw error;
    });
};
export const deleteEventCategoryByIdApi = async (userId) => {
  console.log("----end-ponitss", endpoint.deleteEventCategory, userId);

  try {
    const response = await fetchApi(
      `${endpoint.deleteEventCategory}/${userId}`,
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
