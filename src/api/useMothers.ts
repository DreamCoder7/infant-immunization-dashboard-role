import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API;

export default function useMothers() {
  return useQuery({
    queryKey: ["mothersData"],
    queryFn: () => axios.get(`${BASE_URL}/mother/`).then((res) => res.data),
  });
}
