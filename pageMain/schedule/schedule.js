var data = require('./data.js');
var func = require('./func.js');

Page({
    func: func,
    onLoad: function () {

    },
    onShow: function () {
        this.setData({
            ...data
        })
        this.func.setStudentid(this)
        this.func.setSemester(this)
        this.func.setWeek(this);
        this.func.setDatesAndMonth(this);
        this.func.setDateAndDay(this);
        this.func.setCourse(this);
        //this.func.setDatesAndUnits(this);
    },
    onPickSemester: function (e) {
        this.func.setSemester(this, e.detail.value),
        this.func.setWeek(this, 1);
        this.func.setDatesAndMonth(this);
        this.func.setDateAndDay(this);
        this.func.setCourse(this);
        this.func.setDatesAndUnits(this);
    },
    onPickWeek: function (e) {
        this.func.setWeek(this, e.detail.value),
        this.func.setDatesAndMonth(this);
        this.func.setDateAndDay(this);
        this.func.setCourse(this);
        this.func.setDatesAndUnits(this);
    },
    onTapOptionSetting: function(e){
        var that = this;
        wx.showActionSheet({
            itemList: ['回到今天','更新课表', '意见反馈'],
            success: function(res){
                switch(res.tapIndex){
                    case 0:
                        that.func.setStudentid(that)
                        that.func.setSemester(that)
                        that.func.setWeek(that);
                        that.func.setDatesAndMonth(that);
                        that.func.setDateAndDay(that);
                        that.func.setCourse(that);
                        break;
                    case 1:
                        that.func.setCourse(that, true);
                        break;
                    case 2:
                        wx.navigateTo({
                            url: '../me/issues/issues',
                        })
                }
            }
        })
    }
})