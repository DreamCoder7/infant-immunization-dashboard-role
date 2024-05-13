import axios from "axios";

const BASE_URL = import.meta.env.VITE_API;

async function getAdmins() {
  try {
    const res = await axios.get(`${BASE_URL}/admin`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: config.AUTH_TOKEN,
      },
    });

    const admins = res.data;
    return admins;
  } catch (error: any) {
    console.error("Error:", error);
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;
    throw new Error(errorMsg);
  }
}

export default getAdmins;
