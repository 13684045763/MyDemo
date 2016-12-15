$(document).ready(function () {
    currentTime(); //页面加载运行当前时间函数
    daojishi(); //页面加载运行倒计时函数
    var t = setInterval(currentTime, 500); //每隔500毫秒更新一次时间

    /*倒计时函数*/
    function daojishi() {
        var i = 2017;
        var j = 1;
        var k = 27;
        var str = i+'/'+j+'/'+k;
        var pos = $('.wrapper .daojishi span');
        var curTime = new Date();
        var endTime = new Date(str);
        var lefttime = endTime.getTime() - curTime.getTime(); //getTime返回毫秒
        lefttime = lefttime / (60 * 60 * 1000); //换成小时
        var day = Math.floor(lefttime / 24); //剩余天数
        var hour = (lefttime - day * 24); //剩余小时
        var minu = (hour - Math.floor(hour)) * 60; //剩余分钟
        var sec = (minu - Math.floor(minu)) * 60; //剩余秒

        pos.text(Math.floor(day) + '天' + dealone(Math.floor(hour)) + '小时' + dealone(Math.floor(minu)) + '分' + dealone(Math.ceil(sec)) + '秒');
    }

    /*处理一位数字函数*/
    function dealone(time) {
        if (time < 10) {
            return "0" + time;
        } else {
            return time;
        }
    }


    function currentTime() {
        var pos = $('.wrapper .time'); //获取插入位置
        var myDate = new Date(); //创建时间对象
        var year = myDate.getFullYear(); //获取年
        var month = myDate.getMonth() + 1; //获取月份，注意+1
        var day = myDate.getDate(); //获取日
        var today = myDate.getDay(); //获取星期，0表示星期日
        var hour = myDate.getHours(); //获取小时
        var minu = myDate.getMinutes(); //获取分钟
        var sec = myDate.getSeconds(); //获取秒
        var myCurrentDate = year + "年" + month + "月" + day + "日 " + swichtoday(today) + " " + dealone(hour) + ":" + dealone(minu) + ":" + dealone(sec);
        daojishi();
        pos.text(myCurrentDate);



        function swichtoday(n) {
            var arr = new Array;
            arr[0] = "星期日";
            arr[1] = "星期一";
            arr[2] = "星期二";
            arr[3] = "星期三";
            arr[4] = "星期四";
            arr[5] = "星期五";
            arr[6] = "星期六";

            return arr[n]
                /*switch (n) {
                    case 1:
                        {
                            return "星期一";
                            break;
                        }
                    case 2:
                        {
                            return "星期二";
                            break;
                        }
                    case 3:
                        {
                            return "星期三";
                            break;
                        }
                    case 4:
                        {
                            return "星期四";
                            break;
                        }
                    case 5:
                        {
                            return "星期五";
                            break;
                        }
                    case 6:
                        {
                            return "星期六";
                            break;
                        }
                    default:
                        {
                            return "星期日";
                            break;
                        }
                }*/
        }
    }
})
