function updateNotice(that){
    wx.showNavigationBarLoading();
    wx.request({
        url: 'https://proj.rvfu98.com/nuaaweapp/notice.php?type=' + that.data.index,
        success: function (e) {
            that.setData({
                notices: e.data
            })
            wx.hideNavigationBarLoading();
        }
    })
}

Page({
    data: {
        array: ['01 - 教学服务', '02 - 学生培养', '03 - 教学建设', '04 - 教学资源'],
        index: 0,
        
    },
    bindPickerChange: function(e){
        // console.log(e.detail.value)
        this.setData({
            index: e.detail.value
        })
        updateNotice(this);
    },
    onTap: function(e){
        //console.log(e.currentTarget.dataset.url)
        wx.navigateTo({
            url: '../noticeDetail/index?url=' + e.currentTarget.dataset.url + '&title=' + e.currentTarget.dataset.title
        })
    },
    onLoad: function(){
        var that = this;
        updateNotice(this)
    }
})