import { endpoint, method } from "@/networking/endPoints";
import { fetchApi } from "@/networking/network";

export const registerApi = (params) => {
  console.log(endpoint.register, "=======++++??????");
  return fetchApi(endpoint.register, params, method.post, false, false)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Signup API Error:", error);
      throw error;
    });
};

export const verifyOtpApi = (params) => {
  return fetchApi(endpoint.verifyOtp, params, method.post, false, false)
    .then((response) => response)
    .catch((error) => {
      console.error("Verify API Error:", error);
      throw error;
    });
};
export const resendOTPApi = (params) => {
  return fetchApi(endpoint.resendOTP, params, method.post, false, false)
    .then((response) => response)
    .catch((error) => {
      console.error("Resend API Error:", error);
      throw error;
    });
};
