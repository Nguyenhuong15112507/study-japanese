import axios from 'axios'
import { getAcToken } from "./localStorage";
import router from "./router.js";
//khi login se luu token nay vao local storage
let lang = 'ja'
// Next we make an 'instance' of it
const instance = axios.create({
  // .. where we make our configurations
  //syntax cua Vite lay Url cua API set o file .env gan vao baseUrl
  //bien instance se co duong dan Url nhu vay
  baseURL: import.meta.env.VITE_API_BASE_URL
})

//lang nghe request gui xuong cho API va tra thong tin lai cho API
//Sau do API se tra lai response
instance.interceptors.request.use(
    async (config) => {
      // do something before request is sent
      const accessToken = getAcToken();//kiem tra accessToken co ton tai hay khong roi luu vao authorization. 
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
        if (!config?.headers?.["Content-Type"]) {
          config.headers["Content-type"] = "application/json";
        }
      }
      return config;
    },
    (error) => {
      // do something with request error
      return Promise.reject(error);
    }
  );
  //tra ket qua response cho API, tu response se xu ly tren UI
  instance.interceptors.response.use(
    (response) => {
      return response
    },
    async (error) => {
        if(error?.response?.status === 401){
            router.push("/login")
        }
      return Promise.reject(error)
    }
  )
  export default instance