// pages/noticeDetail/index.js
var WxParse = require('../../utils/wxParse/wxParse.js');
Page({
    onLoad: function(options){
        var that = this;
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
            }
        })
    }
})