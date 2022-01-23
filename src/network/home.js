import {request} from "@/network/request";

export function getHomeMultidata() {
    return request({
      url: '/home/multidata'
    })
}

export  function  getHomeGoods(page){
  return request({
    url:'/home/multidata',
    params:{
      page
    }
  })
}
