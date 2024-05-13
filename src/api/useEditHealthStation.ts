import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { HealthStation } from "@/utils/types/component";

const BASE_URL = import.meta.env.VITE_API;

export function useEditHealthStation() {
  return useMutation<unknown, Error, HealthStation, unknown>({
    mutationFn: (healthStation: HealthStation) =>
      axios
        .put(`${BASE_URL}/hs/${healthStation.id}`, healthStation)
        .then((res) => res.data),
  });
}
