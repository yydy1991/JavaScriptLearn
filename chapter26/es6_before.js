//函数作用域和立即调用函数表达式
// （IIFE，Immediately Invoked Function Expression）将模块定义封装在匿名闭包中。
// 模块定义是立即执行的

console.log("-----------");
(function () {
    console.log("bar");
})();


console.log("Foo-----------");
let Foo = (function () {
    console.log("bar");
})();

console.log("Foo2-----------");
let Foo2 = (function () {
    return {
        bar: "baz",
        baz: function () {
            console.log(this.bar);
        }
    }
})();

console.log(Foo2.bar);
Foo2.baz();


console.log("Foo3-----------");
let Foo3 = (function () {

    let bar = 'baz';
    let baz = function () {
        console.log(bar);
    }

    return {
        bar: bar,
        baz: baz
    }
})();

console.log(Foo3.bar);
Foo3.baz();


console.log("Foo4-----------");

let Foo4 = (function () {
    return {
        bar: 'baz'
    }
})();

Foo4.baz = (function () {
    return {
        qux: function () {
            console.log('baz');
        }
    }
})();

console.log(Foo4.bar);
Foo4.baz.qux();


console.log("Foo5-----------")
let globalBar = 'baz';

let Foo5 = (function (bar) {
    return {
        bar: bar,
        baz: function () {
            console.log(bar);

        }
    }
})(globalBar);

console.log(Foo5.bar);
Foo5.baz();


console.log("拓展Foo5--------");

Foo5 = (function (FooModule) {
    FooModule.say = function () {
        console.log("say hello:" + FooModule.bar);
    }
    return FooModule;
})(Foo5 || {});

console.log(Foo5.bar);
Foo5.say();