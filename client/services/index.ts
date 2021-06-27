
import axios from 'axios';

export const apiServer = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URI,
});