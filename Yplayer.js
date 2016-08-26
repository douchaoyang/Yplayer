/*
**@package Yplayer based on Vcastr 2.2
**@version 1.0.1
**@Author  douchaoyang
**@Date    2016-03-29
**@Link    http://www.tiancity.com
*/
var _$_Player = {
    flag:true,
    IE6:!-[1,]&&!window.XMLHttpRequest,
    $:function(a) {return typeof a === "string" ? document.getElementById(a) :a},
    CE:function(a) {return document.createElement(a)},
    HA:function(a) {return document.getElementsByTagName("head")[0].appendChild(a)},
    BA:function(a) {return document.getElementsByTagName("body")[0].appendChild(a)},
    LA: function(d, e) {return this.$(d).innerHTML = e},
    DE:function(c) {var b = this.$(c);b.parentNode.removeChild(b)}
};
(function(){
    var a = _$_Player.CE("link");
    a.rel = "stylesheet";
    a.type = "text/css";
    a.href = "http://img1.tiancitycdn.com/cls/utils/common/Yplayer/VideoCss.css";
    _$_Player.HA(a)
})();
function Yplayer(params){
	this.url=params.url||null;
	this.width=params.width||960;
	this.height=params.height||540;
	this.auto=params.auto||0;
	this.type=params.type||"TC";
	this.repeat=params.repeat||0;
	this.showbar=params.showbar||0;
	this.showtime=params.showtime||0;
	this.beginswf=params.beginswf||'';
	this.endswf=params.endswf||'';
};
Yplayer.prototype={
	Load:function(id){
		_$_Player.LA(id, this.Init());
		_$_Player.$("imy_video_close").style.display = "none";
		_$_Player.$("imy_video_close").onclick=function(){
			_$_Player.DE("imy_video_content");
			_$_Player.flag = true	
		}
	},
	Pop:function(){
		var _init=this.Init(),_width=this.width,_height=this.height;
			var bw = document.documentElement.clientWidth;
			var bh = document.documentElement.clientHeight;
			if (_$_Player.flag) {
				_$_Player.flag = false;
				var boxVP = _$_Player.CE("div");
				boxVP.id = "imy_video_content";
				_$_Player.BA(boxVP);
				var videoText=_$_Player.IE6?"<div id=\"imy_video_wrapper\"></div><div id=\"imy_video_lock\"><iframe style=\"position:absolute;top:0;left:0;width:100%;height:100%;filter:alpha(opacity=0);z-index:9999\" src=\"javascript:void(0)\"></iframe></div>":"<div id=\"imy_video_wrapper\"></div><div id=\"imy_video_lock\"></div>";
				_$_Player.LA("imy_video_content", videoText);
				_$_Player.$("imy_video_wrapper").style.marginTop = -1 * Math.floor(_height / 2) + "px";
				_$_Player.$("imy_video_wrapper").style.marginLeft = -1 * Math.floor(_width / 2) + "px";
				_$_Player.$("imy_video_wrapper").style.width=_width+"px";
				_$_Player.$("imy_video_wrapper").style.height=_height+"px";
				_$_Player.LA("imy_video_wrapper", _init);
			}
			_$_Player.$("imy_video_content").style.width = bw + "px";
			_$_Player.$("imy_video_content").style.height = bh + "px";
			_$_Player.$("imy_video_lock").style.width = bw + "px";
			_$_Player.$("imy_video_lock").style.height = bh + "px";
			_$_Player.$("imy_video_close").onclick=function(){
				_$_Player.DE("imy_video_content");
				_$_Player.flag = true	
			}
	},
	Init:function(){
		var embedText=null;
		if (this.type.toUpperCase() == "TC") {
		embedText = "<a id=\"imy_video_close\">CLOSE</a><embed wmode=\"transparent\" type=\"application/x-shockwave-flash\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" quality=\"high\" flashvars=\"vcastr_file="+this.url+"&IsAutoPlay="+this.auto+"&IsContinue="+this.repeat+"&IsShowBar="+this.showbar+"&IsShowTime="+this.showtime+"&BeginSwf="+this.beginswf+"&EndSwf="+this.endswf+"\" allowfullscreen=\"true\" src=\"http://img1.tiancitycdn.com/cls/utils/common/Yplayer/vcastr.swf\" height="+this.height+" width="+this.width+"></embed>";
		} else if(this.type.toUpperCase() == "NW"){
		embedText = "<a id=\"imy_video_close\">CLOSE</a><embed src=\"" +this.url+ "\" quality=\"high\" width=" +this.width+ " height=" +this.height+ " align=\"middle\" allowScriptAccess=\"always\" allowFullScreen=\"true\" mode=\"transparent\" type=\"application/x-shockwave-flash\"></embed>";
		}else{alert("VIDEO TYPE ERROR!")};
		return embedText
	}
};