import { request, PromiseResp} from "@/utils/T";
import { proxyAPI } from '@/services/proxyAPI';
import {permission} from "@/services/auth";
const { get, postJSON } = request;

/**
 * 登录
 */
export const login = (phone: string, password: string) => new Promise((resolve, reject) => {
    postJSON(proxyAPI("mobile/login"), {phone, password}).then((resp) => {
        // 用于保存当前登录者的权限信息
        // permission.set({});
        resolve(resp)
    }, (resp) => reject(resp) );
});


/**
 * 退出登录
 * @return {Promise}
 */
export const logout = () => new Promise((resolve, reject) => {
    get(proxyAPI("logout")).then(resp => {
        // 清空权限信息
        permission.clear();
        resolve(resp);
    },(resp) => reject(resp))
});
