export const USER_AUTH = "/items/directus_users"; 
export const VERIFY_MOBILE_NUMBER = "otp_auth/initiate";
export const VERIFY_OTP = "/otp_auth/verifyotp";
export const GET_USER_BY_MOBILE_NUMBER = `users?filter[mobile_number][_eq]=`;
export const LOGIN_USER = `auth/login`;
export const REFRESH_TOKEN = `auth/refresh`;
export const LOGOUT_USER = `/auth/logout`;
export const REGISTER_USER = `/users`;
export const GET_USER_BY_TOKEN = `/users/me`;

export const TEMPLATES = "/items/template";

export const GET_INDUSTRY = "/items/industry";
export const GET_SERVICES = "/items/services";

export const USER_TEMPLATE = "/items/usertemplate";
export const USER_TEMPLATE_JUNK = "/items/usertemplatejunk";

export const REVIEW_API_URL = "/items/reviews";
export const FEEDBACK_API_URL = "/items/feedbacks";

export const SEND_MAIL_CONTACT_US = "/mail/contact_us";
export const SEND_MAIL_SERVICE_REQUEST = "/mail/service_request";

export const SUBSCRIBERS_API_URL = "/mail/subscribe"