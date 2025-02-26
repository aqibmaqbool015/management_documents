require("dotenv").config();

export const endpoint = {
  register: process.env.USER_REGISTER,
  login: process.env.USER_LOGIN,
  verifyOtp: process.env.VERIFY_OTP,
  resendOTP: process.env.RESEND_OTP,
  forgotPasswordOtp: process.env.FORGOT_PASSWORD_OTP,
  verifyForgotPasswordOtp: process.env.VERIFY_FORGOT_PASSWORD_OTP,
  resetPassword: process.env.RESET_PASSWORD,
  allUsers: process.env.ALL_USERS,
  reviewUser: process.env.REVIEW_USERS,
  getAllEventTypes: process.env.ALL_EVENT_TYPES,
  createEventType: process.env.CREATE_EVENT_TYPE,
  getAllEventCategory: process.env.ALL_EVENT_CATEGORY,
  updatedEventTypes: process.env.UPDATE_EVENT_TYPE,
  deletedEventType: process.env.DELETE_EVENT_TYPE,
  createdEventCategory: process.env.CREATE_EVENT_CATEGORY,
  updatedEventCategory: process.env.UPDATE_EVENT_CATEGORY,
  deleteEventCategory: process.env.DELETE_EVENT_CATEGORY,
  getAllEvent: process.env.GET_ALL_EVENTS,
};

export const method = {
  get: "GET",
  post: "POST",
  patch: "PATCH",
  delete: "DELETE",
};
