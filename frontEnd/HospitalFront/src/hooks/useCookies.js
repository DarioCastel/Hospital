import Cookies from "js-cookie"

export const setCookies=(name, data)=>{
    Cookies.set(name, data, {expires:1})
}

export const getCookies=(name)=>{
   return Cookies.get(name, {expires:1})
}

export const removeCookies= (name)=>{
    Cookies.remove(name)
}