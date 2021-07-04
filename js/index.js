// 独立作用域

// function test () {

// }

// test (); // 执行完回到函数定义的地方，并未销毁函数

// 函数表达式,可加括号立即执行，执行完即销毁，但导致var a 声明变得没有意义，多余了，那函数表达式有哪几种呢？
// !a, a=1, +a, a++, -a, (a) 
// var a = function () {

// }();
// 立即执行函数，也是ES5中认同的模块, 但实际上ES5没有模块的概念，现在的模块函数是利用立即执行函数创造模块的特征
;(function (document, /**initToolsModule */ initComputeModule) { // 立即执行函数的document为形参
    // 特点
    // 1、拥有独立作用域
    // 2、立即执行完后，随即销毁

    var  oCalculator = document.getElementsByClassName('J_calculator')[0],
        oResult = oCalculator.getElementsByClassName('result')[0],
        oInput = oCalculator.getElementsByTagName('input'),
        // fInput = oCalculator.getElementsByTagName('input')[0],
        // sInput = oCalculator.getElementsByTagName('input')[1],
        oBtnGroup = oCalculator.getElementsByClassName('btn-group')[0];

    // 对于模块来说，必须有个初始化函数
    var init = function () {
        bindEvent();
    }

    function bindEvent () {
        oBtnGroup.addEventListener('click', onBtnClick, false);
    }

    // 单独的渲染函数
    function renderResult (result) {
        oResult.innerText = result
    }

    // 函数 -> 各行其职 -> 一个函数完成一个功能
    // 在这里，响应事件进行加减乘除操作就是多余的 
    function onBtnClick (env) {
        var tar = initToolsModule.getTarget(env),
            tagName = tar.tagName.toLowerCase();
        
        if (tagName === 'button') {
            var method = tar.getAttribute('data-method'),
                fVal = initToolsModule.digitalize(oInput[0].value),
                sVal = initToolsModule.digitalize(oInput[1].value);

            renderResult(initComputeModule[method](fVal, sVal)); // 由于initToolsModule和initComputeModule在一个文件里，所以，initToolsModule和initComputeModule不需要重复传入
        }
    }
    
    init();
})(document, /**initToolsModule */ initComputeModule) // 加分号，否则第二个模块会报错，也可以只在模块前打分号,一般约定俗成在模块前加分号, document为传入的实参

