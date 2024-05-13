import axios from "axios";

const BASE_URL = import.meta.env.VITE_API;

async function getAllHealthStations() {
  try {
    // const res = await axios.get(`${BASE_URL}/hs/info/detail/info`);
    const res = await axios.get(`${BASE_URL}/hs/all`);
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

export default getAllHealthStations;
