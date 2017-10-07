var data = require('./appData.js'); //引入全局数据
var func = require('./appFunc.js'); //引入全局方法

App({
    data: data,
    func: func,
    onLaunch: function () {
        var that = this;
        this.func.getAvatarUrl();
    }
})