const initToolsModule = (() => {
    function digitalize (str) {
        return Number(str.replace(/\s+/g, '')) || 0;
    }

    function getTarget (env) {
        let e = env || window.event; // 兼容性处理
        return e.target || e.srcElement;
    }

    return {
        digitalize: digitalize,
        getTarget: getTarget
    }
})(); // 由于立即执行函数执行完即销毁，如果还是模块的写法，是得不到这两个函数的返回值的，所以声明一个变量用来接收函数的返回值

const initComputeModule = (() => {
    function plus (a, b) {
        return a + b;
    }

    function minus (a, b) {
        return a - b;
    }

    function mul (a, b) {
        return a * b;
    }

    function div (a, b) {
        return a / b;
    }

    // 标准ES5写法
    return {
        plus: plus,
        minus: minus,
        mul: mul,
        div: div
    }
})();