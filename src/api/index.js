import {getAction,postAction} from './axios'

/**
 *  错误日志
 * @param {*} level 日志等级 info,warn,error
 * @param {*} message 日志内容，仅支持字符串
 */
export const errorLog=(level,message)=>getAction('/log_xingsk/log/errorLog',{
        projectName:"test",
        message,
        level
});