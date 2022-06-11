import axios from 'axios'
import qs from 'qs'
import { Message, Loading } from 'element-ui';
import { router } from '../router/index'
let loading;

function stratLoading() {
    loading = Loading.service({
        lock: true,
        text: '正在全力加速中',
        background: 'rgba(0, 0, 0, 0.7)'
    });
}

function endLoading() {
    loading.close();
}

function request(config, isA) {
    const axiosA = axios.create({

        baseURL: 'https://autumnfish.cn',

    })
    const axiosB = axios.create({})
        //请求拦截
    axiosA.interceptors.request.use(
            result => {

                stratLoading();

                return result;
            },
            error => Promise.reject(error)
        )
        //请求拦截
    axiosB.interceptors.request.use(
            result => {

                stratLoading();
                //判断是否含有token
                if (localStorage.loginToken) { result.headers.Authorization = localStorage.loginToken }
                return result;
            },
            error => Promise.reject(error)
        )
        //响应拦截
    axiosA.interceptors.response.use(

        result => {
            endLoading();

            return result
        },
        //错误提醒
        error => {

            endLoading();

            Message.error(error.response.data)
            return Promise.reject(error)


        })
    axiosB.interceptors.response.use(

        result => {
            endLoading();
            console.log(result);
            return result
        },
        //错误提醒
        error => {

            //判断token是否过期
            const { status } = err.response;
            if (status === 401) {
                Message.error('token失效，请重新登录')
                localStorage.removeItem(loginToken)
                router.push('/login')
            }
            endLoading();
            Message.error(error.response.data)
            return Promise.reject(status)




        })


    let obj1 = {
        method: 'get',
        params: {},
        url: '',
        data: {}
    }
    obj1 = Object.assign(obj1, config)

    if (isA === 'A') return axiosA(obj1)
    else {

        obj1.headers = { 'content-type': 'application/x-www-form-urlencoded' }
        obj1.data = qs.stringify(obj1.data)

        return axiosB(obj1)
    }
}



export default request