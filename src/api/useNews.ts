import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API;

export default function useNews() {
  return useQuery({
    queryKey: ["newsData"],
    queryFn: () => axios.get(`${BASE_URL}/news/`).then((res) => res.data),
  });
}
