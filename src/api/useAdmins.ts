import { useQuery } from "@tanstack/react-query";
import { Admin } from "@/utils/types/component";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API;

export const useAdmins = () => {
  return useQuery<Admin[], Error>({
    queryKey: ["adminsData"],
    queryFn: () =>
      axios.get<Admin[]>(`${BASE_URL}/admin`).then((res) => res.data),
  });
};
