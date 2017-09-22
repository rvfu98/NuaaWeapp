// pages/notice/index.js=
Page({
    data: {
        
    },
    onTap: function(e){
        //console.log(e.currentTarget.dataset.url)
        wx.navigateTo({
            url: '../noticeDetail/index?url=' + e.currentTarget.dataset.url + '&title=' + e.currentTarget.dataset.title
        })
    },
    onLoad: function(){
        var that = this;
        wx.showNavigationBarLoading();
        wx.request({
            url: 'https://proj.rvfu98.com/nuaaweapp/notice.php',
            success: function (e) {
                that.setData({
                    notices: e.data
                })
                wx.hideNavigationBarLoading();
            }
        })
        
    }
})