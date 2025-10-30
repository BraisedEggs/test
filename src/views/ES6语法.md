# ES6  
## let const
    let
        代码块中有用
    const
        声明一个只读的常量 一旦声明就不能改变
## 解构语法
    对象解构
        基本解构
            { foo, bar } = { foo: 'aaa', bar: 'bbb' };
        可嵌套可忽略解构
            let obj = {p: ['hello', {y: 'world'}] };
            let {p: [x, { y }] } = obj;
            // x = 'hello'
            // y = 'world'
            let obj = {p: ['hello', {y: 'world'}] };
            let {p: [x, {  }] } = obj;
            // x = 'hello'
        不完全解构
            let obj = {p: [{y: 'world'}] };
            let {p: [{ y }, x ] } = obj;
            // x = undefined
            // y = 'world'
        剩余运算符
            let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40};
            // a = 10
            // b = 20
            // rest = {c: 30, d: 40}
        解构默认值
            let {a = 10, b = 5} = {a: 3};
            // a = 3; b = 5;
            let {a: aa = 10, b: bb = 5} = {a: 3};
            // aa = 3; bb = 5;
    数组解构
        基本解构
        嵌套解构
            数组里面套数组
        可忽略解构
            数组里面缺少值也可以进行结构
                [a,,b]=[1,2,3] ====>  a=1,b=3
        不完全解构
            解构出来的数据不是全部
                [a=1,b]=[] =======> a=1,b=undefined
        剩余运算符解构
            出现多余的数值解构
                [a,...,b]=[1,2,3,4]====>a=1,b=4
        字符串解构
            在数组的解构中，解构的目标若为可遍历对象，皆可进行解构赋值。可遍历对象即实现 Iterator 接口的数据。
            [a.b.c.d.e]='hello'====> a='h',b-'e',c='l',d='l',e='o'
        默认值解构
            [a = 2] = [undefined] ====> a = 2


## Symbol
    ES6 引入了一种新的原始数据类型 Symbol ，表示独一无二的值，最大的用法是用来定义对象的唯一属性名。
    ES6 数据类型除了 Number 、 String 、 Boolean 、 Object、 null 和 undefined ，还新增了 Symbol 。
## Map 与 Set
    Map
        对象保存键值对 任何都可以做键和值
    Set
        Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。
## Reflect 与 Proxy

## ES6 字符串
    子串的识别
        includes
            返回布尔值，判断是否找到参数字符串。
        startsWith
            返回布尔值，判断参数字符串是否在原字符串的头部。
        endsWith
            返回布尔值，判断参数字符串是否在原字符串的尾部。
    字符串重复
        repeat
        返回新的字符串，表示将字符串重复指定次数返回。
    字符串补全
        第一个参数是指定生成的字符串的最小长度，第二个参数是用来补全的字符串。如果没有指定第二个参数，默认用空格填充。
        padStart
            返回新的字符串，表示用参数字符串从头部（左侧）补全原字符串。
        padEnd
            返回新的字符串，表示用参数字符串从尾部（右侧）补全原字符串。
    模板字符串
    ``
## ES6 对象
    对象字面量
        ES6允许对象的属性直接写变量，这时候属性名是变量名，属性值是变量值。
         定义变量名和变量值直接进行组装
    对象的新方法
        Object.assign 复制
        Object.is(value1, value2)  比较三个等严格
## ES6 数组
    数组创建
        Array.of()
            console.log(Array.of(1, 2, 3, 4)); // [1, 2, 3, 4]
        Array.from()
            console.log(Array.from([1, 2])); // [1, 2]
        类数组对象
            一个类数组对象必须含有 length 属性，且元素属性名必须是数值或者可转换为数值的字符。
            let arr = Array.from({
                0: '1',
                1: '2',
                2: 3,
                length: 3
                });
                console.log(arr); // ['1', '2', 3]

    方法
        find()
        findIndex()
        fill()
        copyWithin()
        flat()
        flatMap()
        includes()
        遍历
            把数组变成对象
            entries()
            keys()
            values()
## ES6 函数
    箭头函数

## ES6 模块
    export
    import
## promise
## Generator 函数
## async 函数
## 