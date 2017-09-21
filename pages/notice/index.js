// pages/notice/index.js=
Page({
    data: {
        
    },
    ontap: function(e){
        //console.log(e.currentTarget.dataset.url)
        wx.navigateTo({
            url: '../noticeDetail/index?url=' + e.currentTarget.dataset.url
        })
    },
    onLoad: function(){
        var that = this;
        wx.request({
            url: 'https://proj.rvfu98.com/nuaaweapp/notice.php',
            success: function (e) {
                that.setData({
                    notice: e.data
                })
            }
        })
    }
})