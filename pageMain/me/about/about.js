Page({
    oncopy: function () {
        wx.setClipboardData({
            data: 'https://github.com/rvfu98/NuaaWeapp',
            success: function () {
                wx.showToast({
                    title: '链接已复制'
                })
            }
        })
    }
})