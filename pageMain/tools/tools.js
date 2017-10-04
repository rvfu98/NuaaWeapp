// pageMain/tools/tools.js
Page({
    data: {
        tool_list: [{
            cn_name: "个人课表",
            en_name: "",
            id: "schedule",
            status: false
        }, {
            cn_name: "其他课表",
            en_name: "",
            id: "classSchedule",
            status: false
        }, {
            cn_name: "教务通知",
            en_name: "",
            id: "notice",
            status: false
        }, {
            cn_name: "空闲教室",
            en_name: "",
            id: "classroom",
            status: false
        }, {
            cn_name: "成绩查询",
            en_name: "",
            id: "grade",
            status: false
        }, {
            cn_name: "选课网址",
            en_name: "",
            id: "elective",
            status: false
        }, {
            cn_name: "校车时刻",
            en_name: "",
            id: "bus",
            status: false
        }, {
            cn_name: "个人信息",
            en_name: "",
            id: "info",
            status: false
        }, {
            cn_name: "考试安排",
            en_name: "",
            id: "exam",
            status: false
        }, {
        //     cn_name: "社区签到",
        //     en_name: "",
        //     id: "forum",
        //     status: false
        // }, {
            cn_name: "二手买卖",
            en_name: "",
            id: "usedMarket",
            status: false
        }, {
            cn_name: "兼职信息",
            en_name: "",
            id: "partTimeJob",
            status: false
        }, {
            cn_name: "常用电话",
            en_name: "",
            id: "phoneNumber",
            status: false
        }, {
            cn_name: "常用网站",
            en_name: "",
            id: "link",
            status: false
        }, {
            cn_name: "修读课程",
            en_name: "",
            id: "course",
            status: false
        }, {
            cn_name: "图书馆",
            en_name: "",
            id: "library",
            status: false
        }, {
            cn_name: "电费查询",
            en_name: "",
            id: "electricityBill",
            status: false
        }, {
            cn_name: "助学薪资",
            en_name: "",
            id: "wage",
            status: false
        }, {
            cn_name: "广告",
            en_name: "",
            id: "ad",
            status: false
        }, {
            cn_name: "新闻资讯",
            en_name: "",
            id: "news",
            status: false
        },{
            cn_name: "讲座信息",
            en_name: "",
            id: "lecture",
            status: false
        }],
        banner: [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ]
    },
    onTool: function(e){
        var id = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: '/pageTool/' + id + '/' + id
        })
    }
})