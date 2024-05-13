import config from "@/configs/config";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API;

async function getAllHealthProfessionals() {
  try {
    const res = await axios.get(
      `${BASE_URL}/user/employee/all?role=HEALTH_PROFETIONAL`,
      {
        headers: {
          "Content-Type": "application/json",

          // later to be taken from local storage
          Authorization: config.AUTH_TOKEN,
        },
      }
    );

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

export default getAllHealthProfessionals;
