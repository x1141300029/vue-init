import axios from 'axios'
import { VueAxios } from "./install";
// 创建 axios 实例
const service = axios.create({
    timeout: 60 * 1000, // 请求超时时间
    headers: {
        'content-type': 'application/x-www-from-urlencoded;chartset=utf-8'
        // 'content-type':'application/json'
    }
});
// service.defaults.headers.post['Content-Type'] = 'application/json';
//   请求拦截器
service.interceptors.request.use(config => {
    // console.log(vueCookie.get("access_token"));
    // config.headers["Authorization"]="eyJyb2xlIjoiWksifQ.8TPWkdwy1CPSsoxlW7pHsGdDSH8GJg_R2No1wn8hwaM";
    return config;
}, err => {
    return Promise.reject(err)
});
service.interceptors.response.use((response) => {
    console.log('拦截返回结果：')
    if (response.status === 200) {
        return response.data.data
    }
    return response;
}, err => {
    console.log('接口拦截错误信息：');
    console.log(err)
    switch (err.response.status){
        case 404:
            return {code:-404,message:"请求失败，没有找到请求地址"}
    }
    return {code:-9999,message:err};
});
const installer = {
    vm: {},
    install(Vue, router = {}) {
        Vue.use(VueAxios, router, service)
    }
};
export {
    installer as VueAxios,
    service as axios
}
