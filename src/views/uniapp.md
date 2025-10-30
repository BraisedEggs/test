# 生命周期
## 应用生命周期
    onLanuch 初始化
    onShow   启动或者从后台进入前台显示
    onHide    懂前台进入后台
    onError    报错时触发
    onPageNotFound  页面不存在监听函数
    onThemeChange   监听系统主题变化

## 页面生命周期
    onInit   页面初始化
    onLoad   页面加载
    onShow    页面变化时候
    onReady   页面初次渲染
    onHide    页面隐藏
    onUnload   页面隐藏
    onResize   窗口尺寸发生变化
## 本地存储
    同步
        uni.setStorageSync
        uni.getStorageSync
    异步
        uni.setStorage
        uni.getStorage
## 跳转
    uni.navigateTo    页面跳转
    uni.redirect   销毁当前页面跳转到指定页面
    uni.switchTab  跳转到tab页面
    uni.reLaunch   销毁所有页面跳转到指定页面
    uni.navigateBack  返回上一页
    exit   退出小程序   在target='miniProgram'生效
