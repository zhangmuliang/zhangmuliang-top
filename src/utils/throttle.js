export function throttle (fn, delay) {
    var lastTime = 0;
    return function (args) {
        var nowTime = Date.now();
        if (nowTime - lastTime > delay) {
            fn.call(this, args);
            lastTime = nowTime;
        }
    }
}