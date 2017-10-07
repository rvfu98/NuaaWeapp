Page({
    data: {
        campuses: ["将军路", "明故宫"],
        days: [['本周', '下周'], ['周一', '周二', '周三', '周四', '周五', '周六', '周日']],
        units: ['1-2', '3-4', '5-6', '7-8', '9-10'],
        day: [0,0],
        campus: 0,
        unit: 0,
        today: [0, 0]
    },
    onLoad: function(){
        var today = [0, new Date().getDay() - 1];
        this.setData({
            day: today,
            today: today
        })
    },
    onCampus: function(e){
        var campus = e.detail.value;
        this.setData({
            campus: campus,
            rooms:null
        })
    },
    onDay: function(e){
        var day = e.detail.value;
        console.log(day)
        this.setData({
            day: day,
            rooms: null
        })
    },
    onUnit: function (e) {
        var unit = e.detail.value;
        this.setData({
            unit: unit,
            rooms:null
        })
    },
    onSubmit: function(){
        var that = this;
        wx.showLoading({
            title: '正在加载...',
        })
        wx.request({
            url: 'https://proj.rvfu98.com/nuaaweapp/zlxxapi/getFreeRoom.php',
            method: 'POST',
            data: {
                campus: this.data.campus,
                week: this.data.day[0],
                day: this.data.day[1]+1,
                unit: 2*this.data.unit+1,
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded' // 默认值
            },
            success(e){
                that.setData({
                    rooms: e.data
                })
                wx.hideLoading();
            }
        })
    }
})