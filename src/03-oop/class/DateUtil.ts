// 1. 静态方式
class DateUtil {
    static formatDate(){}
    static diffDateByDay(){} // 两个日期之间的天数计算
    static diffDateByHour(){} // 两个日期之间的小时计算
    static timeConversion(restTime: number) {} // 天 时 分 秒
}


// 2. 单例模式
class DateUtils {
    private static dateUtils:DateUtils
    private constructor() {}
    static getInstance() {
        if (!DateUtils.dateUtils) {
            DateUtils.dateUtils = new DateUtils()
        }
        return DateUtils.dateUtils
    }
    formatDate(){
        console.log('formatDate')
    }
    diffDateByDay(){} // 两个日期之间的天数计算
    diffDateByHour(){} // 两个日期之间的小时计算
    timeConversion(restTime: number) {} // 天 时 分 秒
}

export {
    DateUtil,
    DateUtils
}