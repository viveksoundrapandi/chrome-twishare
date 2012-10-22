$(function(){
	function toFb(this1)
	{
		var Ele2 = this1.parentNode.parentNode.parentNode.parentNode.getElementsByClassName('js-tweet-text')[0];
		Ele2 = Ele2.innerHTML.replace(/<\/?[^>]+(>|$)/g, "");
		window.open("http://vivekhas3.herokuapp.com/twishare/?txt=" + Ele2,"_blank");
//		chrome.tabs.create({'url': chrome.extension.getURL("http://vivekhas3.herokuapp.com/twishare/?txt=" + Ele2)}, function(tab){});
	
	}
	if (window.location.hostname=="twitter.com")
	{
		var HtmlText='<li class="action-reply-container">'+
					 '<a title="Share To Facebook" href="#" class="with-icn tofb1">'+
					 '<i class="service-sm-facebook"></i>'+
					 '<b><span title="Share To Facebook" >Facebook</span></b>'+
					 '</a></li>';
		var Ele=document.getElementsByClassName('tweet-actions js-actions');
		for(i=0;i<Ele.length;i++)
		{
			
			Ele[i].innerHTML+=HtmlText;
		}
		var Ele1=document.getElementsByClassName('tofb1');
		for(i=0;i<Ele1.length;i++)
		{
			Ele1[i].addEventListener("click", function()
			{
				toFb(this);
			});
		}
	}

});