# this指向
    全局
        指向window
    普通函数
        this指向window
    普通函数调用链
        this指向window
    将函数作为参数
        this指向window
    对象调用函数
        this指向对象本身
    对象函数链式调用
        this指向最近的一个对象
    在调用对象函数内部的的函数this的时候后 
        this指向window
    call  apply
        this指向绑定的对象
    setTimeout
        this指向window
    数组的forEach
        this指向window
    箭头函数
        箭头函数的this不能通过call改变
