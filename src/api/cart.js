import * as API from './index';

export const addCart=(token,params)=>{
  return API.HeadPOST('/api/v1/shop_carts',token,params)
}

export const getCart=(token,params)=>{ 
  return API.HeadGET('/api/v1/shop_carts',token,params)
}

export const delCart=(id,token,params)=>{
  return API.HeadDELETE('/api/v1/shop_carts/'+id,token,params)
}