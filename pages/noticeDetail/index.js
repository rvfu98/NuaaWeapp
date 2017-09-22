// pages/noticeDetail/index.js
var WxParse = require('../../utils/wxParse/wxParse.js');
Page({
    data: {

    },
    onLoad: function(options){
        wx.showNavigationBarLoading();
        var that = this;
        this.data.url = options.url;
        this.setData({
            title: options.title
        })
        wx.request({
            url: 'https://proj.rvfu98.com/nuaaweapp/noticeDetail.php',
            method: 'post',
            header: {
                'content-type': 'application/x-www-form-urlencoded' // 默认值
            },
            data: {
                url: options.url
            },
            success : function(e){
                WxParse.wxParse('article', 'html', e.data, that, 5);
                wx.hideNavigationBarLoading();
            },
            fail: function(e){
                wx.hideNavigationBarLoading();
                wx.showToast({
                    title: '发生了一些错误',
                })
            }
        })
    },
    copyLink: function(e){
        var that = this;
        wx.setClipboardData({
            data: 'http://aao.nuaa.edu.cn/detail/' + this.data.url +'?groupId=2',
            success: function (res) {
                wx.getClipboardData({
                    success: function (res) {
                        wx.showToast({
                            title: '本文链接已复制',
                        })
                    }
                })
            }
        })
    }
})