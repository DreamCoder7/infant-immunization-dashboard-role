import config from "@/configs/config";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API;

async function deleteOneHealthStation(hsid: string | number) {
  try {
    // const res = await axios.get(`${BASE_URL}/hs/info/detail/info`);
    const res = await axios.delete(`${BASE_URL}/hs/${hsid}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: config.AUTH_TOKEN,
      },
    });
    console.log(res);

    const healthStations = res.data;
    return healthStations;
  } catch (error: any) {
    console.error("Error:", error);
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;
    throw new Error(errorMsg);
  }
}

export default deleteOneHealthStation;
