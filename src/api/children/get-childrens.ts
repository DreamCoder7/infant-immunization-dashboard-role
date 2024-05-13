import config from "@/configs/config";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API;

async function getChildren() {
  try {
    const res = await axios.get(`${BASE_URL}/child/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: config.AUTH_TOKEN,
      },
    });

    const children = res.data;
    return children;
  } catch (error: any) {
    console.error("Error:", error);
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;
    throw new Error(errorMsg);
  }
}

export default getChildren;
