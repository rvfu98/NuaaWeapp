/**
 * 获取用户微信头像URL(avatarUrl)
 * 先从本地存储中读取用户头像数据，如果读取成功，则do nothing；失败，则调用登陆接口获取头像数据
 * param: null
 * return: null
 */
var getAvatarUrl = function () {
    var that = this;
    wx.getStorage({
        key: 'avatarUrl',
        success: function (res) { },
        fail: function () {
            wx.login({
                success: function () {
                    wx.getUserInfo({
                        success: function (res) {
                            wx.setStorage({
                                key: 'avatarUrl',
                                data: res.userInfo.avatarUrl,
                            })
                        }
                    })
                }
            })
        }
    })
}

/**
 * 登陆教务系统
 * 跳转到pageMain/me/login/login页面
 */
var login = function () {
    wx.navigateTo({
        url: '/pageMain/me/login/login',
    })
}


var isLogged = function () {
    return (Boolean)(wx.getStorageSync('info'));
}
var func = {
    getAvatarUrl: getAvatarUrl,
    login: login,
    isLogged: isLogged
}

module.exports = func;