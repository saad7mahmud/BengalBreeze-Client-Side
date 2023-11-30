import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://bengal-breeze-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
