//under_score.js 第一次不会输出，最后一次再被调用leading:false,trailing:true
function throttle(func,wait,options){
    let context,args,timeout;
    let old = 0;//时间戳
    if(!options) options = {};
    let later = function(){
        old = new Date().valueOf();
        timeout = null;
        func.apply(context,args);
    }
    return function(){
        context = this;
        args = arguments;
        let now  = new Date().valueOf();
        if(options.leading === false && !old){
           old = now;
        }
        if(now - old > wait){
           //第一次会立即执行
           if(timeout){
              clearTimeout(timeout);
              timeout = null;
           }
           func.apply(context,args);
           old = now;
        }else if(!timeout && options.trailing !== false){
           //最后一次也会被执行
           timeout = setTimeout(later,wait);
        }
    }
}

// 节流
// 原理:如果你持续触发事件，每隔一段时间，只执行一次事件
// 使用场景
// 1、DOM元素的拖拽功能实现
// 2、设计游戏
// 3、计算鼠标移动的距离
// 4、监听scroll滚动事件

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

// container.onmousemove  = throttle(doSomething,2000,{
//     leading:true,
//     trailing:true
// })
