Page({
    data: {
        imgs: {}
	},
    notice: function(){
        wx.navigateTo({
            url: '../notice/index',
        })
    },
	onLoad: function(){
		var that = this;
		wx.request({
			url: 'https://proj.rvfu98.com/nuaaweapp/banner.json',
			success: function(e){
				that.setData({
					imgs:e.data
				});
			}
		})
	}
})
