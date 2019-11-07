import * as API from './index';

export const register = (params) => {
  return API.POST('/api/v1/auth/reg',params)
}

export const login = (params) => {
  return API.POST('/api/v1/auth/login',params)
}
export const Info = ()=>{
 return API.GET('//api/v1/users/info')
}