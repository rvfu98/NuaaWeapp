// pages/home/index.js
Page({
    notice: function(e){
        wx.navigateTo({
            url: '../notice/index',
        })
    },
    login: function (e) {
        wx.navigateTo({
            url: '../login/index',
        })
    }
})