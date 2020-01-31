import { Modal, Toast } from 'antd-mobile';

class Prompt {

    constructor() {
        Toast.config({
            duration: 2
        });
    }

    /**
     * 提示成功
     * @param {String} msg
     * @param {Number} duration
     * @param {Function} onClose
     */
    success(msg: string, duration = 2, onClose = () => {}) {
        Toast.success(msg, duration, onClose);
    }

    /**
     * 提示错误
     * @param {String | Array} msg
     * @param {Number} duration
     * @param {Function} onClose
     */
    error(msg: string, duration = 2, onClose = () => {}) {
        if(Array.isArray(msg)){
            let newMsg = "";
            msg.forEach(item => newMsg += `${item.message}\n`);
            msg = newMsg;
        }

        Toast.fail(msg, duration, onClose);
    }

    /**
     * 提示信息
     * @param {String | Array} msg
     * @param {Number} duration
     * @param {Function} onClose
     */
    info(msg: string, duration = 2, onClose = () => {}) {
        Toast.info(msg, duration, onClose);
    }

    /**
     * 离线提示信息
     * @param {String | Array} msg
     * @param {Number} duration
     * @param {Function} onClose
     */
    offline(msg: string, duration = 2, onClose = () => {}) {
        Toast.offline(msg, duration, onClose);
    }

    /**
     * 确认提示框
     */
    confirm(cbForOk?: () => void, cbForCancel?: () => void, options:{title?:string; subTitle?:string} = {}) {
        const { title, subTitle } = Object.assign({title: "删除", subTitle: "确定删除?"}, options || {});

        return Modal.alert(title, subTitle, [
            {
                text: "取消",
                onPress: cbForCancel || (() => {})
            },
            {
                text: "确定",
                onPress: cbForOk || (() => {})
            }
        ]);
    }

}

export default new Prompt();
