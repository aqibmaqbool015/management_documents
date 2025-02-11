import { endpoint, method } from "@/networking/endPoints";
import { fetchApi } from "@/networking/network";

export const getAllUsersApi = () => {
  return fetchApi(endpoint.allUsers, null, method.get, true, false)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Users API Error:", error);
      throw error;
    });
};

export const reviewUserApi = async (userId, action) => {
  try {
    const response = await fetchApi(
      `${endpoint.reviewUser}/${userId}`,
      { action },
      method.patch,
      true,
      false
    );
    return response;
  } catch (error) {
    console.error("Review users API Error:", error);
    throw error;
  }
};
