App({
    //全局变量
    data: {
        COLORS: [
            'ea8200',
            'f76359',
            '6f58f0',
            '37b4ec',
            '81cef8',
            'aabdff',
            '5addf1',
            '5aed56',
            'b2ef4a',
            'ead94b',
            'f3bc1b',
            'c2b4f2',
            '34ebe7'
        ],
        IMAGE_URL: 'https://coding.net/u/rvfu98/p/nuaaweapp/git/raw/master/',   //图片固定前缀
        API_URL: 'https://proj.rvfu98.com/nuaaweapp/', //API固定前缀
        ZLXX_API_URL: 'https://proj.rvfu98.com/nuaaweapp/zlxxapi/', //校园网API固定前缀
        NUM_ARR: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        DAYS: ['一', '二', '三', '四', '五', '六', '日'],
        WEEKS: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        SEMESTER: 0,
        SEMESTERS: [
            {
                show_name: '2017-18 学期1',
                name: '2017-2018,1',
                begain_day: '2017/9/4'
            }, {
                show_name: '2016-17 学期2',
                name: '2016-2017,2',
                begain_day: '2017/2/13'
            }, {
                show_name: '2016-17 学期1',
                name: '2016-2017,1',
                begain_day: '2017/8/29'
            }, {
                show_name: '2015-16 学期2',
                name: '2015-2016,2',
                begain_day: '2017/2/22'
            }, {
                show_name: '2015-16 学期1',
                name: '2015-2016,1',
                begain_day: '2017/8/31'
            }, {
                show_name: '2014-15 学期2',
                name: '2014-2015,2',
                begain_day: '2017/3/2'
            }, {
                show_name: '2014-15 学期1',
                name: '2014-2015,1',
                begain_day: '2017/9/1'
            }
        ],
    }
})