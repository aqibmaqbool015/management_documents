import { endpoint, method } from "@/networking/endPoints";
import { fetchApi } from "@/networking/network";

export const forgotPasswordOtpApi = (params) => {
  return fetchApi(endpoint.forgotPasswordOtp, params, method.post, true, false)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Forgot API Error:", error);
      throw error;
    });
};
export const verifyForgotPasswordOtpApi = (params) => {
  return fetchApi(
    endpoint.verifyForgotPasswordOtp,
    params,
    method.post,
    false,
    false
  )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Verify forgot API Error:", error);
      throw error;
    });
};
