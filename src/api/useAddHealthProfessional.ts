import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import config from "@/configs/config";
import { HealthProfessionalProp } from "@/utils/types/component";

export function useAddHealthProfessional() {
  return useMutation<unknown, Error, HealthProfessionalProp, unknown>({
    mutationFn: (healthProfessional: HealthProfessionalProp) =>
      axios.post(`${config.BASE_URL}/health-professionals`, healthProfessional).then((res) => res.data),
  });
}