promise 主要处理的回调地狱的问题
promise 是构造函数
异步函数 后面使用回调函数友处理的
fs 文件操作
`    require('fs').readFile('./a.txt','utf8',(err,data)=>{
        if(err) throw err
        console.log(data)
    })
   `
数据库操作
AJAX
`    $.get('http://localhost:3000',(data)=>{
        console.log(data)
    })
   `
定时器
`    setTimeout(()=>{
        console.log('111')
    },1000)
   `

promise
支持链式调用 解决回调地狱问题 回调 函数里面嵌套回调函数
启动异步任务=》 返回 promise 对象 ==》 给 promise 对象绑定回调函数 甚至可以在异步任务结束后指定/多个

    使用promise去处理一个异步的操作
    ```
    <body>
    <div class="container">
        <h2>Promise</h2>
        <button id="btn" class="btn btn-primary">点击抽奖</button>
    </div>
    <scrip>
        function rand(M, N) {
            return Math.ceil(Math.random() * (N - M + 1)) * M - 1;
        }

        const btn = document.getElementById('btn')
        btn.addEventListener('click',()=>{
            // setTimeout(()=>{
            //    let num = rand(1,100)
            //    if (num<10){
            //     console.log('恭喜你抽中了10元')
            //    }else{
            //     console.log('很遗憾你没有抽中')
            //    }
            // },2000)
            const pro = new Promise((res,rej)=>{
                setTimeout(()=>{
                    let num = rand(1,100)
                    if (num<10){
                        res(num)
                    }else{
                        rej(num)
                    }
                },2000)
            }).then((res)=>{
                console.log('111',res)
                console.log('恭喜你抽中了10元',res)
            },(err)=>{
                console.log('3222',err)

                console.log('很遗憾你没有抽中',err)
            })
        })
    </scrip
    </body>
    ```

promise 三种状态
    pending
    resolved / fullfilled
    rejected 
    只能改变一次  未定--》 成功
                未定---》失败

promise 对象的值
        promiseResult
    保存异步的成功和失败的值
    resolve
    reject

    api 
        Promise.resolve(值)
        如果传入的参数是非Promise类型的对象  则返回的结果为成功的Promise对象
        如果传入的是Promise对象  则参数的结果决定了resolve的结果
        
        promise.all(数组)===>解决方法  使用promise.allSelect
        promise.race(数组)
          最后的结果是由第一个promise的结果状态来决定 也就是第一个是什么状态就有事什么状态

        改变promise的对象状态
            三个
            new Promise（（res，rej）=》{
                resolved
                rejected
                throw
            }）
        promise 指定多个回调函数   then方法
            当promise改变为对应状态的时候都会调用   前提是状态一定要改变

        改变promise状态和 指定回调函数谁先谁后
            执行函数式同步的 就是先是resolve  后是then
            promise里面是异步任务的时候就是先先执行then在执行resolve
        promise.then的结果是由谁决定的
            是由回调函数指定的结果决定的
        在链式调用中如何中断
            有且只有一种方式就是返回一个pending的promise 
            p.then(()=>{
                console.log(111)
                return new Promise(()=>{})
            }).then(()=>{
                console.log(2222)
            })
            这种情况下就啊不会打印222    因为状态没有改变  所有后面的then都不会执行

async  就是一个promise对象
               