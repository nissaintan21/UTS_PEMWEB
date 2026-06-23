import axios,{AxiosError} from "axios"
import { useAuthStore } from "../store/useAuthStore"
export const api=axios.create({
    baseURL: import.meta.env.API_URL||"http://localhost:3000",  
    headers:{
        'Content-Type':'application/json'

    }
})

api.interceptors.request.use(
    (config)=>{
        //get token
        const token=useAuthStore.getState().token
        if (token){
            config.headers.Authorization=`Bearer ${token}`
        }
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)
//jika ada error 
api.interceptors.response.use(
    (response)=>response,
    (error:AxiosError)=>{
        //jika ada error
        if (error.response?.status===401){
            useAuthStore.getState().logout()
            window.dispatchEvent(new Event('auth:unauthorized'))
        }
        return Promise.reject(error)
    }
)