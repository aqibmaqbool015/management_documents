import * as Yup from "yup";

export const validationSchemaPassword = Yup.object({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export const initialValuesPassword = {
  password: "",
  confirmPassword: "",
};

export const forgotPasswordSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export const forgotPasswordInitialValues = {
  email: "",
};

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const loginInitialValues = {
  email: "",
  password: "",
};

export const validationSchemaSignup = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  role: Yup.string().required("Role is required"),
});
export const initialValuesSignup = {
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  role: "",
};

export const validationSchemaForm = Yup.object({
  title: Yup.string().required("Event title is required"),
  date: Yup.date().required("Event date is required"),
  time: Yup.string().required("Event time is required"),
  description: Yup.string()
    .min(10, "Description must be at least 10 characters")
    .required("Event description is required"),
  file: Yup.mixed()
    .required("File is required")
    .test("fileType", "Unsupported file type", (value) =>
      value
        ? ["image/jpeg", "image/png", "image/gif"].includes(value.type)
        : true
    ),
});

export const initialValuesForm = {
  title: "",
  date: "",
  time: "",
  description: "",
  file: null,
};

export const validationSchemaEvent = Yup.object({
  type: Yup.string().required("Event type is required"),
  name: Yup.string().required("Event name is required"),
  manager: Yup.string().required("Event manager is required"),
  file: Yup.mixed()
    .required("File is required")
    .test("fileType", "Unsupported file type", (value) =>
      value
        ? ["image/jpeg", "image/png", "image/gif"].includes(value.type)
        : true
    ),
});
export const initialValuesEvent = {
  type: "",
  name: "",
  manager: "",
  file: null,
};

// password: Yup.string()
// .min(8, "Password must be at least 8 characters")
// .max(32, "Password cannot exceed 32 characters")
// .matches(/[A-Z]/, "Must contain an uppercase character")
// .matches(/[0-9]/, "Must contain a number")
// .matches(/[!@#$%^&*(),.?":{}|<>]/, "Must contain one special character")
// .required("Password is required"),
// confirmPassword: Yup.string()
// .oneOf([Yup.ref("password"), null], "Passwords must match")
// .required("Confirmation password is required"),
