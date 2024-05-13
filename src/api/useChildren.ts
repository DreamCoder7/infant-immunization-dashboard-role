import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API;

export default function useChildren() {
  return useQuery({
    queryKey: ["childrenData"],
    queryFn: () => axios.get(`${BASE_URL}/child/`).then((res) => res.data),
  });
}
