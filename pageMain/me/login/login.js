var app = getApp();
Page({
    data: {
        nuaaid: null,
        passwd: null
    },
    onBlur: function (e) {
        this.setData({
            nuaaid: e.detail.value
        })
    },
    onConfirm: function (e) {
        this.setData({
            passwd: e.detail.value
        })
        this.login();
    },
    onSubmit: function (e) {
        this.setData(e.detail.value)
        this.login();
    },
    login: function () {
        var that = this;
        //判断是否非空
        if (!(this.data.nuaaid && this.data.passwd)) {
            wx.showModal({
                title: 'Error',
                content: '学号或密码不能为空',
                showCancel: false,
                confirmText: '我知道了',
                confirmColor: 'black'
            })
            return;
        }
        //开始loading
        wx.showLoading({
            title: '正在登录',
        })
        //验证密码
        //密码正确则设置数据，密码错误则清空密码
        wx.request({
            url: app.data.ZLXX_API_URL + 'login.php',
            method: "POST",
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            data: that.data,
            success: function (res) {
                if (res.data.token) {
                    wx.setStorage({
                        key: 'info',
                        data: res.data,
                    })
                    wx.setStorage({
                        key: 'passwd',
                        data: that.data.passwd,
                    })
                    wx.navigateBack({

                    })
                }
                else {
                    wx.showModal({
                        title: 'Error',
                        content: '账号或密码错误',
                        showCancel: false,
                        confirmText: '我知道了',
                        confirmColor: 'black'
                    })
                    that.setData({
                        passwd: null
                    })
                }
            },
            //结束loading
            complete: wx.hideLoading()
        })
    }
})