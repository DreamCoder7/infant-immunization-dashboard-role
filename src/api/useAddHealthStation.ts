import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { HealthStation } from "@/utils/types/component";

const BASE_URL = import.meta.env.VITE_API;

export function useAddHealthStation() {
  return useMutation<unknown, Error, HealthStation, unknown>({
    mutationFn: (healthStation: HealthStation) =>
      axios.post(`${BASE_URL}/hs`, healthStation).then((res) => res.data),
  });
}
