App({
    data: {
    },
    onLaunch: function () {
        this.data.isEn = (wx.getSystemInfoSync().language == 'en') ? true : false;
    }
});
