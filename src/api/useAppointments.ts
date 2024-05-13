import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API;

export default function useAppointments() {
  return useQuery({
    queryKey: ["appointmentsData"],
    queryFn: () => axios.get(`${BASE_URL}/appointment`).then((res) => res.data),
  });
}
