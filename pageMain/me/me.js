Page({
    data: {
        isLogged: false
    },
    onLog: function () {
        if (this.data.isLogged) this.logout();
        else this.login();
    },
    onShow: function () {
        var that = this;
        wx.getStorage({
            key: 'isLogged',
            success: function (res) {
                if (res.data) {
                    that.setData({
                        isLogged: true
                    })
                }
            }
        })
        wx.getStorage({
            key: 'avatarUrl',
            success: function (res) {
                that.setData({
                    user_head_url: res.data
                })
            },
        })
        wx.getStorage({
            key: 'info',
            success: function (res) {
                var info = JSON.parse(res.data);
                that.setData({
                    user_name: info.name,
                    user_id: info.number
                })
            }
        })
    },
    login: function () {
        wx.navigateTo({
            url: './login/login',
        })
    },
    logout: function(){
        var that = this;
        wx.showModal({
            title: '退出确认',
            content: '您确定要退出登录吗？',
            success: function(e){
                if(e.confirm)
                    {
                    wx.removeStorage({
                        key: 'isLogged',
                        success: function(res) {},
                    })
                    wx.removeStorage({
                        key: 'info',
                        success: function(res) {},
                    })
                    wx.removeStorage({
                        key: 'user',
                        success: function(res) {},
                    })
                    that.setData({
                        isLogged: false
                    })
                    }
                    
            }
        })
    }
})