import axios from "axios";
const baseUrl = "https://marketdata.tradermade.com/api/v1/";
export const api_key = "icaegEdR36PfdApDrUmH";
export const socket_api_key = "sioyJruizgwSWM7yJb3Ng";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const Axios = async (method, path) => {
  const response = await axiosInstance({
    method: method,
    url: path,
  });
  return response;
};

export default Axios;
