import * as API from './index';

export const addOrder=(token,params)=>{
  return API.HeadPOST('/api/v1/orders',token,params)
}