/*
* 以后要经常写注释，提高代码的可读性
* */
/**
 * Created by hanjinxiu@bmkp.cn on 2018/4/19.
 * 写出作者，如果别人有疑问，别人可以找到你咨询
 */

var myVue = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    // musicClassArr: ['摇滚','古典','爵士','民谣/乡村','流行','电子','原声配乐','轻音乐','说唱','雷鬼'],
    musicClassArr: [{name:'摇滚'},{name:'古典'},{name:'爵士'}],
    bannerArr:[]
  }
})

function getMusicBanners(){
    return axios.get('http://restaurant.yijiahotel.shop/test/musicbanners');
}
axios.all([getMusicBanners()])
    .then(axios.spread(function(banner){
    	console.log(banner);
        //请求现在都完成
        myVue.bannerArr = banner.data.data
    }));