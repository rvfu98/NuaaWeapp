var hashPasswd = require('../../utils/hashPasswd.js');  //获取密码加密函数
var app = getApp();    //获取应用实例

Page({
    data:{
        nuaaId:'',
        passWd:'',
        isHidden: true,
        isEn: app.data.isEn
    },
    onLogin: function(e){
        var nuaaId = e.detail.value.nuaaId;
        var passWd = e.detail.value.passWd;
        var hashedPasswd = hashPasswd(passWd);
        //判断学号或密码是否为空
        if (nuaaId=="" || passWd==""){
            wx.showModal({
                title: this.data.isEn?'Error':'错误',
                content: this.data.isEn ?'Student id or password can not be null':'学号或密码不能为空',
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
            title: that.data.isEn?'Logging in':'正在登陆',
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
                if (res.data.name == null){    //密码错误
                    wx.showModal({
                        title: that.data.isEn?'login failed':'登陆失败',
                        content: that.data.isEn ? 'Please check your student id and password' :'请检查账号或密码是否正确',
                        showCancel: false
                    })
                    wx.hideLoading()
                    that.setData({
                        passWd: ''
                    })
                } else {    //密码正确
                    that.setData({
                        data: res.data,
                        isHidden: false
                    })
                    wx.hideLoading()
                }
            },
            fail: function(e){
                console.log(e)
            }
        })
    }
})
