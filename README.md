# Yplayer
PC端视频播放器插件 基于Vcastr 2.2 SWF皮肤

在世纪天成任职期间，为配合日常工作，以及提高页面开发效率，自主开发了一款适用于PC端的视频播放器插件。现在主要用于《封印者》官方网站。

特点：`兼容性高`，`实用性强`，`使用方便`，`体积小`

* `使用方法`：

```javascript
//初始化播放器
var player=new Yplayer({
	url:null,//视频地址，必须
	width:720,//宽度，默认720
	height:405,//高度，默认405
	auto:1,//是否自动播放，默认是
	ext:false,//是否是外链地址，默认否
	repeat:1,//是否重复播放，默认是
	showbar:3,//控制栏显示方式，0不显示，1一直显示，2鼠标悬停显示，3开始不显示鼠标悬停时显示，默认3
	showtime:1,//是否显示播放时间，默认是
	beginswf:"",//开始前加载动画，默认空
	endswf:""//结束后加载动画，默认空
	
})
```
* `调用方法`:

```javascript
player.Load(boxid); //加载式调用方法
player.Pop(); //弹窗式调用方法
```

* [`关于作者`](http://www.douchaoyang.com)
