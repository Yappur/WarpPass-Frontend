import axios from "axios";

const axiosConfig = axios.create({
  baseUrl: "http://localhost:4000",
});

export default axiosConfig;
