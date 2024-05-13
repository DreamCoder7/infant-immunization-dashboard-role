import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { HealthProfessionalProp } from "@/utils/types/component";

const BASE_URL = import.meta.env.VITE_API;

export function useAddHealthProfessional() {
  return useMutation<unknown, Error, HealthProfessionalProp, unknown>({
    mutationFn: (healthProfessional: HealthProfessionalProp) =>
      axios
        .post(`${BASE_URL}/health-professionals`, healthProfessional)
        .then((res) => res.data),
  });
}
