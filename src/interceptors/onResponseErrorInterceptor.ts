import { AxiosError } from 'axios';
import Vue from 'vue';

export function validationErrors(error: AxiosError) {
  if (error.response?.data.errors) {
    Object.entries(error.response?.data.errors).forEach(([key, value]) => {
      Vue.$toast.error(`${key}' '${value}`);
      console.log('oi');
    });
    console.log(error.response?.data.errors);
  }
}
