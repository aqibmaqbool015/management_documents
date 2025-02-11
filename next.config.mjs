/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["t2tcorebucket.s3.eu-west-2.amazonaws.com"],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    USER_REGISTER: process.env.USER_REGISTER,
    USER_LOGIN: process.env.USER_LOGIN,
    VERIFY_OTP: process.env.VERIFY_OTP,
    RESEND_OTP: process.env.RESEND_OTP,
    FORGOT_PASSWORD_OTP: process.env.FORGOT_PASSWORD_OTP,
    VERIFY_FORGOT_PASSWORD_OTP: process.env.VERIFY_FORGOT_PASSWORD_OTP,
    RESET_PASSWORD: process.env.RESET_PASSWORD,
    ALL_USERS: process.env.ALL_USERS,
    REVIEW_USERS: process.env.REVIEW_USERS,
    ALL_EVENT_TYPES: process.env.ALL_EVENT_TYPES,
    CREATE_EVENT_TYPE: process.env.CREATE_EVENT_TYPE,
    ALL_EVENT_CATEGORY: process.env.ALL_EVENT_CATEGORY,
  },
};

export default nextConfig;
