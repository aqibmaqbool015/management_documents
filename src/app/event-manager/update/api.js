import { endpoint, method } from "@/networking/endPoints";
import { fetchApi } from "@/networking/network";

export const updateEventCategoryApi = async (userId, params) => {
  console.log('----updateEventCategoryApi--',endpoint.updatedEventCategory);
  
  try {
    const response = await fetchApi(
      `${endpoint.updatedEventCategory}/${userId}`,
      params,
      method.patch,
      true,
      true
    );
    return response;
  } catch (error) {
    console.error("Update Event API Error:", error);
    throw error;
  }
};
