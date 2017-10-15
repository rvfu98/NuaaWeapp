var setStudentid = function(that){
    var studentid = wx.getStorageSync('info').number;
    if (! studentid){
        wx.navigateTo({
            url: '../me/login/login',
        })
    }else{
        that.setData({
            studentid: studentid
        })
    }
}

var setSemester = function(that, semester){
    if (semester == null){
        that.setData({
            semester: that.data.SEMESTER
        })
    }else{
        that.setData({
            semester: semester
        })
    }

}

var setWeek = function(that, week){
    if (week == null || that.data.semester == that.data.SEMESTER) {
        var now = new Date();
        var semester_begin = new Date(that.data.SEMESTERS[that.data.semester].begin_day);
        var week = Math.floor((now - semester_begin)/(1000*3600*24*7));
        that.setData({
            week: week
        })
    }else{
        that.setData({
            week: week
        })
    }
}

/**
 * 设置当前日期，需要在setSemes()和setWeek()之后执行
 */
var setDatesAndMonth = function(that){
    var semester = that.data.semester;
    var week = that.data.week;
    var semester_begin = new Date(that.data.SEMESTERS[that.data.semester].begin_day);
    var week_begin = new Date(semester_begin.getTime() + week * (1000 * 3600 * 24 * 7));
    //var week_begin_day = week_begin.getDate();
    var week_begin_month = week_begin.getMonth();
    var dates = new Array();
    for (var i=0; i< 7; i++){
        dates.push(new Date((week_begin.getTime() + 1000*3600*24*i)).getDate());
    }
    that.setData({
        dates: dates,
        month: week_begin_month+1
    }
    )
}

var setDateAndDay = function(that){
    var now = new Date();
    that.setData({
        date: now.getDate(),
        day: (now.getDay()+6)%7
    })
}

var setCourse = function(that, flag){
    var semester_data_name = "classSchedule" + that.data.SEMESTERS[that.data.semester].name;
    var semester_data = wx.getStorageSync(semester_data_name);
    if (semester_data.maxDay &&  (!flag)){
        that.setData({
            courses: semester_data.courses,
            maxDay: semester_data.maxDay,
            maxUnit: semester_data.maxUnit
        })
        that.func.setDatesAndUnits(that)
    }else{
        wx.showLoading({
            title: '非常慢，耐心等...',
        })
        wx.request({
            url: 'https://proj.rvfu98.com/nuaaweapp/zlxxapi/getClassCourse.php',
            method: "POST",
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            data:{
                classid: wx.getStorageSync('info').classnumber,
                semester: that.data.SEMESTERS[that.data.semester].name //这里做过改动，相比个人课表。
            },
            success: function(res){
                that.setData({
                    courses: res.data.courses,
                    maxDay: res.data.maxDay,
                    maxUnit: res.data.maxUnit
                })
                wx.setStorage({
                    key: semester_data_name,
                    data: res.data,
                })
                that.func.setDatesAndUnits(that)
                wx.hideLoading()
            }
        })
    }
}

var setDatesAndUnits = function(that){
    that.setData({
        days: that.data.DAYS.slice(0, that.data.maxDay),
        units: that.data.UNITS.slice(0, that.data.maxUnit)
    })
}

var func = {
    setStudentid : setStudentid,
    setSemester: setSemester,
    setWeek: setWeek,
    setDatesAndMonth: setDatesAndMonth,
    setDateAndDay: setDateAndDay,
    setCourse: setCourse,
    setDatesAndUnits: setDatesAndUnits
            
}
module.exports = func;