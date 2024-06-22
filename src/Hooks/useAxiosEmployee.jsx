import axios from "axios";

const axiosEmployee = axios.create({
  baseURL: "https://asset-each-server-site.vercel.app",
});



const useAxiosEmployee = () => {
  return axiosEmployee;
};

export default useAxiosEmployee;
