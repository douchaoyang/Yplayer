/*
**@Author  douchaoyang
**@Relyed  core.lib.js
*/
(function($){
    $.loadCss("plug.yplayer.css",function(){})
})(core);

window.Yplayer = window.Yplayer || (function($){
	var Yplayer = function(o)
	{
		this.o = {url:null,width:720,height:405,auto:1,ext:false,repeat:1,showbar:3,showtime:1,beginswf:"",endswf:""};
		extend(this.o, o||{});
		this.flag = true

	};
	Yplayer.prototype.Load = function(id)
	{
		g(id).innerHTML = this.Mode(false)
	};
	Yplayer.prototype.Pop = function()
	{
			var _this = this, client_width = document.documentElement.clientWidth, client_height = document.documentElement.clientHeight;
			if (_this.flag) 
			{
				_this.flag = false;
				var video_content = $.creatElment("div");video_content.id = "imy_video_content";$.bodyAdd(video_content);
				var video_text = $.browser.ie6?"<div id=\"imy_video_wrapper\"></div><div id=\"imy_video_lock\"><iframe style=\"position:absolute;top:0;left:0;width:100%;height:100%;filter:alpha(opacity=0);z-index:9999\" src=\"javascript:void(0)\"></iframe></div>":"<div id=\"imy_video_wrapper\"></div><div id=\"imy_video_lock\"></div>";
				g("imy_video_content").innerHTML = video_text;
				$.setStyle(g("imy_video_wrapper"),{
					marginLeft:-1 * Math.floor(_this.o.width / 2) + "px",
					marginTop:-1 * Math.floor(_this.o.height / 2) + "px",
					width:_this.o.width+"px",
					height:_this.o.height+"px"
				});
				g("imy_video_wrapper").innerHTML = _this.Mode(true);
			}
			$.setStyle(g("imy_video_content"),{
				width:client_width + "px",
				height:client_height + "px"
			});
			$.setStyle(g("imy_video_lock"),{
				width:client_width + "px",
				height:client_height + "px"
			});
			$.addEvent(g("imy_video_close"),"click",function(){
				$.removeElment(g("imy_video_content"));
				_this.flag = true
			})
	};
	Yplayer.prototype.Mode = function(fuck)
	{
		if (!this.o.ext) 
		{
			if(fuck)
			{
				return "<a id=\"imy_video_close\"></a><embed wmode=\"transparent\" type=\"application/x-shockwave-flash\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" quality=\"high\" flashvars=\"vcastr_file="+this.o.url+"&IsAutoPlay="+this.o.auto+"&IsContinue="+this.o.repeat+"&IsShowBar="+this.o.showbar+"&IsShowTime="+this.o.showtime+"&BeginSwf="+this.o.beginswf+"&EndSwf="+this.o.endswf+"\" allowfullscreen=\"true\" src=\"plug.yplayer.swf\" height="+this.o.height+" width="+this.o.width+"></embed>"
			}
			else
			{
				return "<embed wmode=\"transparent\" type=\"application/x-shockwave-flash\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" quality=\"high\" flashvars=\"vcastr_file="+this.o.url+"&IsAutoPlay="+this.o.auto+"&IsContinue="+this.o.repeat+"&IsShowBar="+this.o.showbar+"&IsShowTime="+this.o.showtime+"&BeginSwf="+this.o.beginswf+"&EndSwf="+this.o.endswf+"\" allowfullscreen=\"true\" src=\"plug.yplayer.swf\" height="+this.o.height+" width="+this.o.width+"></embed>"
			}
		} 
		else
		{
			if(fuck)
			{
				return "<a id=\"imy_video_close\"></a><embed src=\"" +this.o.url+ "\" quality=\"high\" width=" +this.o.width+ " height=" +this.o.height+ " align=\"middle\" allowScriptAccess=\"always\" allowFullScreen=\"true\" wmode=\"transparent\" type=\"application/x-shockwave-flash\"></embed>";
			}
			else
			{
				return "<embed src=\"" +this.o.url+ "\" quality=\"high\" width=" +this.o.width+ " height=" +this.o.height+ " align=\"middle\" allowScriptAccess=\"always\" allowFullScreen=\"true\" wmode=\"transparent\" type=\"application/x-shockwave-flash\"></embed>";
			}
		}
	};
	return Yplayer

})(core);