import { endpoint, method } from "@/networking/endPoints";
import { fetchApi } from "@/networking/network";

export const updateEventTypeApi = async (userId, params) => {
  try {
    const response = await fetchApi(
      `${endpoint.updatedEventTypes}/${userId}`,
      params,
      method.patch,
      true,
      false
    );

    return response;
  } catch (error) {
    console.error("Update Event API Error:", error);
    throw error;
  }
};
