# Yplayer
PC端视频播放器插件 基于Vcastr 2.2 SWF皮肤

特点：`兼容性高`，`实用性强`，`使用方便`，`体积小`

* `使用方法`：

```javascript
//初始化播放器
var player=new Yplayer({
	url:null,//视频地址，必须
	width:720,//宽度，默认720 可选
	height:405,//高度，默认405 可选
	auto:1,//是否自动播放，默认是 可选
	ext:false,//是否是外链地址，默认否 可选
	repeat:1,//是否重复播放，默认是 可选
	showbar:3,//控制栏显示方式，0不显示，1一直显示，2鼠标悬停显示，3开始不显示鼠标悬停时显示，默认3 可选
	showtime:1,//是否显示播放时间，默认是 可选
	beginswf:"",//开始前加载动画，默认空 可选
	endswf:""//结束后加载动画，默认空 可选
	
})
```
* `调用方法`:

```javascript
player.Load(boxid); //加载式调用方法
player.Pop(); //弹窗式调用方法
```

* [`关于作者`](http://www.douchaoyang.com)
