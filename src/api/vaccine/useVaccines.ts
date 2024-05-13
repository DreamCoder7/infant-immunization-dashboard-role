import axios from "axios";
import { Vaccine } from "@/utils/types/component";
import config from "@/configs/config";

const BASE_URL = import.meta.env.VITE_API;

async function createVaccine(vaccine: Vaccine) {
  try {
    const res = await axios.post(`${BASE_URL}/vaccine`, vaccine, {
      headers: {
        "Content-Type": "application/json",
        Authorization: config.AUTH_TOKEN,
      },
    });
    return res.data;
  } catch (error: any) {
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;
    throw new Error(errorMsg);
  }
}

async function deleteVaccine(id: string | number) {
  try {
    const res = await axios.delete(`${BASE_URL}/vaccine/${id}`);
    return res.data;
  } catch (error: any) {
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;
    throw new Error(errorMsg);
  }
}

async function getAllVaccines() {
  try {
    const res = await axios.get(`${BASE_URL}/vaccine/`);
    return res.data;
  } catch (error: any) {
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;
    throw new Error(errorMsg);
  }
}

async function getSingleVaccine(id: string | number) {
  try {
    const res = await axios.get(`${BASE_URL}/vaccine/${id}`);
    return res.data;
  } catch (error: any) {
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;
    throw new Error(errorMsg);
  }
}

async function updateVaccine(id: string | number, vaccine: Vaccine) {
  try {
    const res = await axios.put(`${BASE_URL}/vaccine/${id}`, vaccine, {
      headers: {
        "Content-Type": "application/json",
        Authorization: config.AUTH_TOKEN,
      },
    });
    return res.data;
  } catch (error: any) {
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;
    throw new Error(errorMsg);
  }
}

export {
  createVaccine,
  deleteVaccine,
  getAllVaccines,
  getSingleVaccine,
  updateVaccine,
};
