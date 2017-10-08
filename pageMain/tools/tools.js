var app = getApp();
Page({
    data: {
        //首页工具图标及对应页面的配置选项
        tool_list: [{
            cn_name: "空闲教室",
            en_name: "",
            id: "classroom",
            status: true
        }, {
            cn_name: "教务通知",
            en_name: "",
            id: "notice",
            status: true
        }, {
            cn_name: "物理实验",
            en_name: "",
            id: "phyexp",
            status: true

        }]
    },
    onLoad: function () {
        //把app设置成数据
        this.setData({
            ...app.data
        });
        //首页加载的时候向服务器请求banner图片地址
        var that = this;
        wx.request({
            url: app.data.API_URL + 'banner.json',
            success: function (res) {
                that.setData({
                    banner: res.data
                })
            }
        });
        console.log('您好，首页的这几个错误。应该是一个bug.当图片链接地址是动态数据的时候，会有Error，但是图片可以动态加载。')
    },
    onTool: function (e) {
        //当点击图标的时候，跳转页面
        var id = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: '/pageTool/' + id + '/' + id,
        })
    },
    onSchedule: function (e) {
        wx.switchTab({
            url: '/pageMain/schedule/schedule'
        })
    }
})