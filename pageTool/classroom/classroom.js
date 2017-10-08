var setCampus = function (that, campus) {
    if (campus == null) {
        that.setData({
            campus: wx.getStorageSync('campus')
        })
    } else {
        that.setData({
            campus: campus
        })
        wx.setStorageSync('campus', campus)
    }
}

var setDay = function (that, day) {
    if (day == null) {
        var today = [0, (new Date().getDay() + 6) % 7];
        that.setData({
            day: today,
            today: today
        })
    } else {
        that.setData({
            day: day
        })
    }
}

var setUnit = function (that, unit) {
    if (unit == null) {
        var date = new Date();
        var times = [9.75 + 1, 12 + 1, 15.75 + 1, 18 + 1, 23 + 1];
        var time = (date.getHours() + 1) % 24 + date.getMinutes() / 60;
        for (var unit in times) {
            if (times[unit] > time) break;
        }
        that.setData({
            unit: unit
        })
    } else {
        that.setData({
            unit: unit
        })
    }
}

var setRooms = function (that, flag) {
    if (flag == null) {  //flag为空清楚数据
        that.setData({
            rooms: []
        })
    } else {  //flag非空从网络取值
        wx.showLoading({
            title: '正在加载',
        })
        wx.request({
            url: 'https://proj.rvfu98.com/nuaaweapp/zlxxapi/getFreeRoom.php',
            method: "POST",
            data: {
                campus: that.data.campus,
                week: that.data.day[0],
                day: that.data.day[1] + 1,
                unit: 2 * that.data.unit + 1
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success: function (res) {
                that.setData({
                    rooms: res.data,
                    hasRoom: res.data.length
                })
            },
            complete: function () {
                wx.hideLoading()
            }
        })
    }
}


Page({
    data: {
        campus: 0,
        day: [0, 0],
        day_today: [0, 0],
        unit: 0,
        CAMPUSES: ['将军路', '明故宫'],
        DAYS: [['本周', '下周'], ['周一', '周二', '周三', '周四', '周五', '周六', '周日']],
        UNITS: ['1-2', '3-4', '5-6', '7-8', '9-10'],
        hasRoom: true,
        rooms: []
    },
    onLoad: function (e) {
        setRooms(this);
        setCampus(this);
        setDay(this);
        setUnit(this);
    },
    onShow: function (e) {
    },
    onCampus: function (e) {
        setRooms(this);
        setCampus(this, e.detail.value)
    },
    onDay: function (e) {
        setRooms(this);
        setDay(this, e.detail.value)
    },
    onUnit: function (e) {
        setRooms(this);
        setUnit(this, e.detail.value)
    },
    onSubmit: function () {
        setRooms(this, 1)

    }
})