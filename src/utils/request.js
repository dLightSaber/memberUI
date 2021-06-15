import axios from "axios";
const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  headers: {
    "Content-type": "application/json",
  },
  timeout: 5000,
});
http.interceptors.request.use(
  async function (config) {
    //const tokenObj = await getAccessToken()
    //config.headers['Authorization'] = `${tokenObj.tokenType} ${tokenObj.accessToken}`
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);
http.interceptors.response.use(
  (response) => {
    const res = response.data;
    return res;
  },
  (error) => {
    console.log("err" + error);
    return Promise.reject(error);
  }
);

export default http;
