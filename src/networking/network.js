import { getLocalStorageItem } from "@/utils/localStorage";
export const Image_base = "https://t2tcorebucket.s3.eu-west-2.amazonaws.com";

require("dotenv").config();
const base_url = process.env.BASE_URL;
console.log(base_url, "----------");

export async function fetchApi(
  endpoint,
  params,
  method = "GET",
  token = false,
  multipart = false
) {
  const headers = {};
  if (token) {
    const token = await getLocalStorageItem("token");
    headers["Authorization"] = `Bearer ${token}`;
  }
  if (multipart) {
  } else {
    headers["Content-Type"] = "application/json";
  }
  const options = {
    method: method,
    headers: headers,
  };
  if (method !== "GET") {
    if (multipart) {
      options.body = params;
    } else {
      options.body = JSON.stringify(params);
    }
  }

  try {
    const response = await fetch(base_url + endpoint, options);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("API call failed:", error);
    return error;
  }
}
