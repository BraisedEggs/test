# AJAX
    优点
        无刷新获取数据
        更具用户获取数据请求

    缺点
        不能回退
        跨域问题
        SEO（搜索引擎优化）不好

    abort  取消AJAX请求

# HTTP协议

## 请求报文
    格式和参数
        请求行
            请求类型  GET   POST  DELETE
            PUT
            URL路径
            http协议版本

        请求头
            Host
            Cookie
            Content-type
            等等

        请求空行

        请求体 
            get无请求体
            post可以为空

## 响应报文
    响应行
        http协议版本
        响应状态码   200   404
        响应状态字符串   'ok' 

    响应头
        格式和请求头一样

    响应空行

    响应体
        返回的结果

# 同源策略
    协议  域名  端口 必须是一样的
