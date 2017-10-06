var app = getApp();
Page({
    data: {
        courses: [{ "weeks": [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], "weeks_show": "3-18", "day": 2, "period": 5, "duration": 2, "campus": "\u5c06\u519b\u8def", "classroom": "2203", "teacher": "70204556", "teacher_id": "\u738b\u5f64", "classes": ["0116201", "0116202", "0116301", "0116401"], "classes_show": "0116201-202,0116301,0116401", "course": "\u7406\u8bba\u529b\u5b66\u2161", "course_id": "01302090", "year": "2017-2018", "semester": 1, "student_count": 131, "class_count": 64, "ison_when_gcsj": false }, { "weeks": [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], "weeks_show": "3-18", "day": 5, "period": 1, "duration": 2, "campus": "\u5c06\u519b\u8def", "classroom": "5201", "teacher": "70204556", "teacher_id": "\u738b\u5f64", "classes": ["0116201", "0116202", "0116301", "0116401"], "classes_show": "0116201-202,0116301,0116401", "course": "\u7406\u8bba\u529b\u5b66\u2161", "course_id": "01302090", "year": "2017-2018", "semester": 1, "student_count": 131, "class_count": 64, "ison_when_gcsj": false }, { "weeks": [6, 7, 8, 9, 10, 11], "weeks_show": "6-11", "day": 2, "period": 7, "duration": 2, "campus": "\u5c06\u519b\u8def", "classroom": "10206", "teacher": "70206009", "teacher_id": "\u4e07\u7a0b", "classes": ["tz29"], "classes_show": "tz29", "course": "\u6570\u5b57\u56fe\u50cf\u5904\u7406", "course_id": "041K0060", "year": "2017-2018", "semester": 1, "student_count": 60, "class_count": 36, "ison_when_gcsj": false }, { "weeks": [6, 7, 8, 9, 10, 11], "weeks_show": "6-11", "day": 4, "period": 7, "duration": 2, "campus": "\u5c06\u519b\u8def", "classroom": "10208", "teacher": "70206009", "teacher_id": "\u4e07\u7a0b", "classes": ["tz29"], "classes_show": "tz29", "course": "\u6570\u5b57\u56fe\u50cf\u5904\u7406", "course_id": "041K0060", "year": "2017-2018", "semester": 1, "student_count": 60, "class_count": 36, "ison_when_gcsj": false }, { "weeks": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], "weeks_show": "7-18", "day": 3, "period": 3, "duration": 2, "campus": "\u5c06\u519b\u8def", "classroom": "10407", "teacher": "70203644", "teacher_id": "\u5f20\u660a", "classes": ["0117108", "0117109", "1517100", "1517501"], "classes_show": "0117108-109,1517100-501", "course": "\u5de5\u7a0b\u56fe\u5b66\u2160(1)", "course_id": "05101040", "year": "2017-2018", "semester": 1, "student_count": 123, "class_count": 48, "ison_when_gcsj": false }, { "weeks": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], "weeks_show": "7-18", "day": 1, "period": 7, "duration": 2, "campus": "\u5c06\u519b\u8def", "classroom": "2504", "teacher": "70203644", "teacher_id": "\u5f20\u660a", "classes": ["0117108", "0117109", "1517100", "1517501"], "classes_show": "0117108-109,1517100-501", "course": "\u5de5\u7a0b\u56fe\u5b66\u2160(1)", "course_id": "05101040", "year": "2017-2018", "semester": 1, "student_count": 123, "class_count": 48, "ison_when_gcsj": false }, { "weeks": [9, 10, 11, 12, 13, 14, 15, 16, 17, 18], "weeks_show": "9-18", "day": 3, "period": 1, "duration": 2, "campus": "\u5c06\u519b\u8def", "classroom": "D1110", "teacher": "70206420", "teacher_id": "\u80e1\u5fd7\u6210", "classes": ["0116202", "0317001", "0716201"], "classes_show": "0116202,0317001,0716201", "course": "\u7ebf\u6027\u4ee3\u6570", "course_id": "08101240", "year": "2017-2018", "semester": 1, "student_count": 96, "class_count": 40, "ison_when_gcsj": false }, { "weeks": [9, 10, 11, 12, 13, 14, 15, 16, 17, 18], "weeks_show": "9-18", "day": 5, "period": 3, "duration": 2, "campus": "\u5c06\u519b\u8def", "classroom": "D1314", "teacher": "70206420", "teacher_id": "\u80e1\u5fd7\u6210", "classes": ["0116202", "0317001", "0716201"], "classes_show": "0116202,0317001,0716201", "course": "\u7ebf\u6027\u4ee3\u6570", "course_id": "08101240", "year": "2017-2018", "semester": 1, "student_count": 96, "class_count": 40, "ison_when_gcsj": false }, { "weeks": [6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "weeks_show": "6-15", "day": 1, "period": 9, "duration": 3, "campus": "\u5c06\u519b\u8def", "classroom": "2102", "teacher": "70203832", "teacher_id": "\u9a6c\u5112\u5b81", "classes": ["gg11"], "classes_show": "gg11", "course": "\u9ad8\u7b49\u6570\u5b66\u65b9\u6cd5\u8bba", "course_id": "081X0050", "year": "2017-2018", "semester": 1, "student_count": 157, "class_count": 24, "ison_when_gcsj": false }, { "weeks": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "weeks_show": "2-13", "day": 2, "period": 1, "duration": 2, "campus": "\u5c06\u519b\u8def", "classroom": "10301", "teacher": "70203925", "teacher_id": "\u738b\u5f00\u5723", "classes": ["\u216003"], "classes_show": "\u216003", "course": "\u5927\u5b66\u7269\u7406\u2160(2)", "course_id": "08202080", "year": "2017-2018", "semester": 1, "student_count": 119, "class_count": 48, "ison_when_gcsj": false }, { "weeks": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "weeks_show": "2-13", "day": 4, "period": 3, "duration": 2, "campus": "\u5c06\u519b\u8def", "classroom": "10301", "teacher": "70203925", "teacher_id": "\u738b\u5f00\u5723", "classes": ["\u216003"], "classes_show": "\u216003", "course": "\u5927\u5b66\u7269\u7406\u2160(2)", "course_id": "08202080", "year": "2017-2018", "semester": 1, "student_count": 119, "class_count": 48, "ison_when_gcsj": false }, { "weeks": [7, 8, 9, 10, 11], "weeks_show": "7-11", "day": 3, "period": 9, "duration": 2, "campus": "\u5c06\u519b\u8def", "classroom": "10302", "teacher": "70200878", "teacher_id": "\u8521\u555f\u660e", "classes": ["JZ3"], "classes_show": "JZ3", "course": "\u4f01\u4e1a\u6218\u7565\u601d\u8003\u4e0e\u884c\u52a8\u7cfb\u5217\u8bb2\u5ea7", "course_id": "093C0040", "year": "2017-2018", "semester": 1, "student_count": 201, "class_count": 10, "ison_when_gcsj": false }, { "weeks": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], "weeks_show": "2-17", "day": 2, "period": 3, "duration": 2, "campus": "\u5c06\u519b\u8def", "classroom": "2302", "teacher": "70205527", "teacher_id": "\u5ec9\u6e05", "classes": ["0116201", "0116202", "0116301", "0116401", "0116402"], "classes_show": "0116201-202,0116301,0116401-402", "course": "\u6bdb\u6cfd\u4e1c\u601d\u60f3\u548c\u4e2d\u56fd\u7279\u8272\u793e\u4f1a\u4e3b\u4e49\u7406\u8bba\u4f53\u7cfb\u6982\u8bba", "course_id": "10502060", "year": "2017-2018", "semester": 1, "student_count": 139, "class_count": 64, "ison_when_gcsj": false }, { "weeks": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], "weeks_show": "2-17", "day": 5, "period": 5, "duration": 2, "campus": "\u5c06\u519b\u8def", "classroom": "2402", "teacher": "70205527", "teacher_id": "\u5ec9\u6e05", "classes": ["0116201", "0116202", "0116301", "0116401", "0116402"], "classes_show": "0116201-202,0116301,0116401-402", "course": "\u6bdb\u6cfd\u4e1c\u601d\u60f3\u548c\u4e2d\u56fd\u7279\u8272\u793e\u4f1a\u4e3b\u4e49\u7406\u8bba\u4f53\u7cfb\u6982\u8bba", "course_id": "10502060", "year": "2017-2018", "semester": 1, "student_count": 139, "class_count": 64, "ison_when_gcsj": false }, { "weeks": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], "weeks_show": "2-17", "day": 1, "period": 3, "duration": 2, "campus": "\u5c06\u519b\u8def", "classroom": "7107", "teacher": "70205152", "teacher_id": "\u738b\u79c0\u6587", "classes": ["16j\u79d1\u6280\u82f1\u8bed\u7ffb\u8bd11\u73ed"], "classes_show": "16j\u79d1\u6280\u82f1\u8bed\u7ffb\u8bd11\u73ed", "course": "\u79d1\u6280\u82f1\u8bed\u7ffb\u8bd1", "course_id": "12301500", "year": "2017-2018", "semester": 1, "student_count": 29, "class_count": 0, "ison_when_gcsj": false }]
    },
    onLoad: function () {
        this.setData({
            ...app.data
        })
        this.timeSetNow()    //设置时间为当前时间
        this.layoutSet()   //最大节数以及周末是否有课的设置

    },
    onTapOptionSetting: function () {
        wx.showActionSheet({
            itemList: ['回到今天', '更新课表', '添加课程', '问题反馈'],
            itemColor: '#3687be',
            success: function (res) {
                console.log(res.tapIndex)
            }
        })
    },
    onPickSemester: function (e) {
        wx.showNavigationBarLoading();
        var semester = e.detail.value;
        var oneDay = 1000 * 3600 * 24;
        var begin_day = new Date(app.data.SEMESTERS[semester].begain_day);
        var then = new Date(begin_day.getTime() + this.data.week * 7 * oneDay);
        var month = then.getMonth() + 1;
        var date = then.getDate();

        var dates = [];
        for (var i = 0; i < 7; i++) dates[i] = new Date(then.getTime() + i * oneDay).getDate();
        this.setData({
            semester: semester,
            month: month,
            date: date,
            dates: dates
        })
        this.layoutSet();
        wx.hideNavigationBarLoading();
    },
    onPickWeek: function (e) {
        wx.showNavigationBarLoading();
        var week = e.detail.value;
        var oneDay = 1000 * 3600 * 24;
        var begin_day = new Date(app.data.SEMESTERS[app.data.SEMESTER].begain_day);
        var then = new Date(begin_day.getTime() + week*7*oneDay);
        var month = then.getMonth()+1;
        var date = then.getDate();
        
        var dates = [];
        for (var i = 0; i < 7; i++) dates[i] = new Date(then.getTime() + i * oneDay).getDate();
        this.setData({
            week: week,
            month: month,
            date: date,
            dates: dates
        })
        this.layoutSet();
        wx.hideNavigationBarLoading();
    },
    timeSetNow: function () {
        //根据当前时间计算页面数据
        var now = new Date();
        var oneDay = 1000 * 3600 * 24;
        var semester = app.data.SEMESTER;
        var week = Math.floor((now - new Date(app.data.SEMESTERS[app.data.SEMESTER].begain_day)) / (oneDay * 7));
        var date = now.getDate();
        var month = now.getMonth()+1;
        var day = now.getDay();
        var dates = [];
        for (var i = 0; i < 7; i++) dates[i] = new Date((now - (day - 1 - i) * oneDay)).getDate();
        this.setData({
            semester: semester,
            week: week,
            month: month,
            date: date,
            day: day,
            dates: dates
        })
    },
    layoutSet: function () {
        var courses = this.data.courses;
        var course_ids = [];
        var maxDay = 0;
        var maxUnit = 0;
        var isOnThisWeek = [];
        var course_show = [];
        for (var course of courses) {
            if (course_ids.indexOf(course.course_id) === -1) course_ids.push(course.course_id);
            if (course.day > maxDay) maxDay = course.day;
            if (course.period + course.duration - 1 > maxUnit) maxUnit = course.period + course.duration - 1;
            isOnThisWeek.push(course.weeks.indexOf((Number)(this.data.week)+1)!==-1);
            if (course.course.length > 8) course_show.push(course.course.substr(0, 8) + '...');
            else course_show.push(course.course);
        }
        course_ids.sort();
        var colors = [];
        for (var course of courses) {
            colors.push(app.data.COLORS[course_ids.indexOf(course.course_id)]);
        }
        this.setData({
            isOnThisWeek: isOnThisWeek,
            maxDay: maxDay,
            maxUnit: maxUnit,
            colors: colors,
            course_ids: course_ids,
            course_show: course_show,
            units: app.data.NUM_ARR.slice(0, maxUnit),
            days: app.data.NUM_ARR.slice(0, maxDay)
        })
    }
})