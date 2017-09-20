var hashPasswd = require('../../utils/hashPasswd.js');
Page({
    data:{
        nuaaId:'',
        passWd:'',
        isHidden: true
    },
    onLogin: function(e){
        var nuaaId = e.detail.value.nuaaId;
        var passWd = e.detail.value.passWd;
        var hashedPasswd = hashPasswd(passWd);
        //判断学号或密码是否为空
        if (nuaaId=="" || passWd==""){
            wx.showModal({
                title: '错误',
                content: '学号或密码不能为空',
                showCancel: false
            })
            return;
        }
        this.setData({
            isHidden: true
        })
        //判断密码是否正确
        var that = this;
        wx.showLoading({
            title: '正在登陆',
        })
        wx.request({
            url: 'https://proj.rvfu98.com/nuaaweapp/nuaaIdVali.php',
            data: {
                nuaaid: nuaaId,
                hashedpassword: hashedPasswd
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            method:'POST',
            success: function(res){
                if (res.data.name == null){
                    wx.showModal({
                        title: '登陆失败',
                        content: '请检查账号或密码是否正确',
                        showCancel: false
                    })
                    wx.hideLoading()
                    that.setData({
                        passWd: ''
                    })
                } else {
                    console.log(res)
                    that.setData({
                        data: res.data,
                        isHidden: false
                    })
                    wx.hideLoading()
                }
            }

        })


    }
})