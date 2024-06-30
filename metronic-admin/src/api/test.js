import axiosInstance from "@/app/axios.js";

const getTest = () => {
  return axiosInstance({
    method: "get",
    url: "/breeds",
    params: {
      limit: 15,
    }
  })
};

export {getTest}