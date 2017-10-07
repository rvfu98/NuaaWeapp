Page({
    data: {
        nuaaid: null,
        passwd: null
    },
    onNuaaid: function (e) {
        this.setData({
            nuaaid: e.detail.value
        })
    },
    onPasswd: function (e) {
        this.setData({
            passwd: e.detail.value
        })
    },
    onSubmit: function (e) {
        var that = this;
        if (this.data.nuaaid && this.data.passwd) {
            wx.request({
                url: 'https://proj.rvfu98.com/nuaaweapp/zlxxapi/login.php',
                data: this.data,
                header: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                success: function (res) {
                    if (res.data.token != null) {
                        wx.navigateBack({
                            
                        })
                        wx.setStorage({
                            key: 'user',
                            data: JSON.stringify(that.data),
                        })
                        wx.setStorage({
                            key: 'info',
                            data: JSON.stringify(res.data),
                        }),
                        wx.setStorage({
                            key: 'isLogged',
                            data: '1',
                        })
                    }
                    else {
                        wx.showToast({
                            title: '账号或密码错误',
                        })
                    }
                }
            })
        } else {
            wx.showToast({
                title: '学号或密码不能为空',
            })
        }
    }
})