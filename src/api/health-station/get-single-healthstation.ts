import axios from "axios";

const BASE_URL = import.meta.env.VITE_API;

async function getSingleHealthStation(hsid: any) {
  try {
    // const res = await axios.get(`${BASE_URL}/hs/info/detail/info`);
    const res = await axios.get(`${BASE_URL}/hs/${hsid}`);
    console.log(res);

    const healthStation = res.data;
    return healthStation;
  } catch (error: any) {
    console.error("Error:", error);
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;
    throw new Error(errorMsg);
  }
}

export default getSingleHealthStation;
