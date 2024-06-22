import axios from "axios";

export const axiosSecure = axios.create({
  baseURL: "https://asset-each-server-site.vercel.app",
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
