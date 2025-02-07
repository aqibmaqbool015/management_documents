require("dotenv").config();

export const endpoint = {
  register: process.env.USER_REGISTER,
  login: process.env.USER_LOGIN,
  verifyOtp: process.env.VERIFY_OTP,
  resendOTP: process.env.RESEND_OTP,
  forgotPasswordOtp: process.env.FORGOT_PASSWORD_OTP,
  verifyForgotPasswordOtp: process.env.VERIFY_FORGOT_PASSWORD_OTP,
  resetPassword: process.env.RESET_PASSWORD,
};

export const method = {
  get: "GET",
  post: "POST",
  patch: "PATCH",
};
