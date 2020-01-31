import { Cookies } from '@/utils/T';
import EnumEnv from '@/constants/EnumEnv';
import { proxyAPI } from '@/services/proxyAPI';

/**
 * 权限管理
 */
class Permission {
    localPermissioKey = "sk_permission";

    /**
     * 是否已经登录
     * @return {boolean}
     */
    isLogin = () => {
        // if(EnumEnv.login.isStartLoginCheck){
        //     // TODO 在移动端的webview中,获取cookie失败,所有前端不能用该方法做校验是否登录成功了,只能后端校验
        //     const isLogined = !!Cookies.get(EnumEnv.login.cookieKey);
        //     // 清空缓存
        //     if(!isLogined) this.clear();
        //
        //     console.log("111111->", Cookies.get(EnumEnv.login.cookieKey));
        //     return isLogined;
        // }
        return true;
    }

    /**
     * 验证是否有权限
     */
    can(mark: string) {
        const permissions = this.get();

        // return Reflect.has(permissions, mark) ? permissions[mark] : false;
        return true;
    }

    /**
     * 保存权限
     * @param permissions
     */
    set(permissions: string) {
        Cookies.set(EnumEnv.login.cookieKey, permissions, {expires: 1000*60*60*24});
        // localStore.set(this.localPermissioKey, permissions);
    }

    /**
     * 获取权限
     * @return {*}
     */
    get(){
        // return localStore.get(this.localPermissioKey) || {};
        return {};
    }

    /**
     * 清除权限
     */
    clear(){
        // localStore.remove(this.localPermissioKey);
    }
}

/**
 * 导出权限
 * @type {Permission}
 */
export const permission = new Permission();



