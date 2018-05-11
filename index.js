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
    bannerArr:[],
    arr:[1,2,3,4,5],
    currentIndex:0,
    hotMhzArr:[],
    fastMhzArr:[]
  },
  methods:{
  	pageNumEnter:function(index) {
  		this.currentIndex = index
  	},
  	pageNumOut:function() {
  		
  	}
  }
})
/*获取banner的数据*/
function getMusicBanners(){
    return axios.get('http://restaurant.yijiahotel.shop/test/musicbanners');
}


/*获取热门兆赫数据*/
function getMusicHotMhz(){
	return axios.get('http://restaurant.yijiahotel.shop/test/musicHotMhz');
}

/*获取上升最快兆赫数据*/
function getMusicFastMhz(){
	return axios.get('http://restaurant.yijiahotel.shop/test/musicFastMhz');
}

axios.all([getMusicBanners(),getMusicHotMhz(),getMusicFastMhz()])
    .then(axios.spread(function(banner,hotMhz,fastMhz){
    	console.log(banner);
        //请求现在都完成
        
        myVue.fastMhzArr = fastMhz.data.data
        myVue.bannerArr = banner.data.data
        myVue.hotMhzArr = hotMhz.data.data
    }));