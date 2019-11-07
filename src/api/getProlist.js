import * as API from './index';
// API GET POST


export const getProlist=(params)=>{
      return API.GET('/api/v1/products',params)
}
export const getDetail=(id,params)=>{
      return API.GET('/api/v1/products/'+id,params) 
}
export const DelAddress=(id,token,params)=>{
      return API.HeadDELETE('/api/v1/addresses/'+id,token,params) 
}
export const AddressList=(token,params)=>{
      return API.HeadGET('/api/v1/addresses',token,params)
    }

