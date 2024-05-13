import config from "@/configs/config";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API;

async function updateHealthStation(hsid: any, reqBody: any) {
  try {
    // const res = await axios.get(`${BASE_URL}/hs/info/detail/info`);
    const res = await axios.put(
      `${BASE_URL}/hs/${hsid}`,
      JSON.stringify(reqBody),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: config.AUTH_TOKEN,
        },
      }
    );
    console.log(res);

    const healthStation = res.data;
    console.log(healthStation);
    return healthStation;
  } catch (error: any) {
    console.error("Error:", error);
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;
    throw new Error(errorMsg);
  }
}

export default updateHealthStation;
