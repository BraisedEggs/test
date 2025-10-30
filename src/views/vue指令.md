# 指令
    全局注册
        通过vue.directive
        参数
            指令名字
            对象数据或者是指令函数
    局部注册
        在options中设置directive 

    钩子内部参数定义
        bind   指令第一次绑定到元素调用
        inserted    被绑定元素插入父节点调用
        update  更新节点的时候调用
        unbind   解绑时候调用



        el  绑定元素
        binding   一个对象   
            name 指令名称
            value   绑定的值
            oldValue   绑定的旧的值
            arg  传给指令的参数
        vnode  vue编译生成的虚拟节点
        oldVnode  上一个虚拟节点