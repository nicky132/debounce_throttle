function debounce(func,wait,immediate){
    var timeout,result;
    let decounced = function(){
        var context = this;
        var args = arguments;
        if(timeout) clearTimeout(timeout);
        if(immediate){
            var callNow = !timeout;
            timeout = setTimeout(function(){
                timeout = null;
            },wait);
            //立即执行
            if(callNow) result = func.apply(context,args);
        }else{
            // 不立即执行
            timeout = setTimeout(function(){
                func.apply(context,args);
            },wait);
        }
        return result;
    }
    decounced.cancel = function(){
        clearTimeout(timeout);
        timeout = null;
    }
    return decounced;
}

// 防抖
// 事件响应函数在一段时间后才执行，如果在这段时间内再次调用，则重新计算执行时间，已预订的时间内
// 使用场景
// 1、scroll事件滚动函数
// 2、搜索框输入查询
// 3、表单验证
// 4、按钮提交事件
// 5、浏览器窗口缩放，resize事件

// // 调用
// let count = 0;
// function doSomething(e){
//     //event指向问题
//     console.log(e);
//     // 改变执行函数内部this指向
//     console.log(this);
//     // 可能会回调或者ajax请求
//     container.innnerHTML == cout++;
//     return '想要的结果'
// }
// let doSome = debounce(doSomething,10000);
// btn.onclick = function(){
//    doSome.cancel()
// }