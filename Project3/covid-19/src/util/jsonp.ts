export default function jsonp(url, params={}){
    return new Promise((resolve, reject)=>{
        wx.request({
            type: "get",
            dataType: 'json',
            data: params,
            jsonp: "callback",
            jsonpCallback: "QQmap",
            url: url,
            success: function(res) {
                if (res.data.data){
                    resolve(JSON.parse(res.data.data));
                }
            },
            fail: function(res) {
                reject(res);
            },
          })
    })
}