/*axios请求工具包*/
import { axios } from '../config/axios/index'
import {ipconfig} from '../../config';
//get
export function getAction(url, parameter) {
  return axios({
    url: ipconfig + url,
    method: 'get',
    params: parameter
  })
}

//post
export function postAction(url, parameter, config) {
  // return axios({
  //   url: url,
  //   method: 'post',
  //   data: parameter
  // })
  return axios.post(ipconfig + url, parameter, config)
}
