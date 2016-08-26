# Yplayer

PC 端视频播放器插件 基于Vcastr 2.2 SWF皮肤

在世纪天成工作期间，为了配合日常工作，以及提高页面开发效率，我自主开发了一款适用于PC端的视频播放器插件。

特点：兼容性高，实用性强，使用方便，体积小。

线上调用地址：http://img1.tiancitycdn.com/cls/utils/common/Yplayer/Yplayer.js

使用方法：

var player=new Yplayer({

	"url":"XXX.flv",
	
	"width":720,
	
	"height":405,
	
	"auto":1,
	
	"showbar":3
	
});

player.Load(boxid);初始化播放器 加载式

player.Pop();初始化播放器 弹窗式


参数释义：

url 视频地址 flv文件路径|外网swf后缀名文件

width 播放器宽度

height 播放器高度

auto 是否自动播放 0|1

type 视频地址类型 TC|NW TC为内部视频地址，NW为外网SWF地址

repeat 是否循环播放 0|1 

showbar 0表示不显示|1表示一直显示|2表示鼠标悬停时显示|3表示开始不显示，鼠标悬停时显示 

showtime 是否显示时间 0|1

beginswf 视频播放前动画 默认空

endswf 视频结束后动画 默认空

boxid 要加载视频的元素id

