Page({
    onTapLink: function () {
        wx.setClipboardData({
            data: 'http://phyexp.nuaa.rvfu98.com/',
            success: function () {
                wx.showToast({
                    title: '链接已复制'
                })
            }
        })
    }
})