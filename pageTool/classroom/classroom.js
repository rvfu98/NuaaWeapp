Page({
    data: {
        campus: 0,
        day: [0,0],
        today: [0, 0],
        unit: 0,
        campuses: ["将军路", "明故宫"],
        days: [['本周', '下周'], ['周一', '周二', '周三', '周四', '周五', '周六', '周日']],
        units: ['1-2', '3-4', '5-6', '7-8', '9-10'],
        hasRoom: 1,
        rooms: []
    },
    onLoad: function(){
        // time变量存储几个时间节点，这么做的目的是让默认的节次显示最近的一次时间
        // 因为每天23点门禁，自习室也会关门，所以把23点作为每一天的0点，其他时间的计算是 (timeOrigin+1)%24
        var times = [10.75, 13, 16.75, 19, 24]
        var date = new Date();
        var today = [0, date.getDay() - 1];
        var timeNow = (date.getHours() + 1)%24 + date.getMinutes()/60;
        for (var unit = 0; unit<times.length; unit++){
            if (times[unit] > timeNow) break;
        }
        var campus = Number(wx.getStorageSync('campus'));   //如果没有设置Number('')是0
        console.log(campus)
        this.setData({
            day: today,
            today: today,
            unit: unit,
            campus: campus
        })
    },
    onCampus: function(e){
        var campus = e.detail.value;
        wx.setStorage({
            key: 'campus',
            data: campus,
        })
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
                'content-type': 'application/x-www-form-urlencoded'
            },
            success(e){
                that.setData({
                    hasRoom: e.data.length,
                    rooms: e.data
                })
                wx.hideLoading();
            }
        })
    },
    
})