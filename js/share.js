(function(t){t("body").on("click",function(){t(".article-share-box.on").removeClass("on")}).on("click",".article-share-link",function(e){e.stopPropagation();var a=t(this),r=a.attr("data-url"),i=encodeURIComponent(r),o="article-share-box-"+a.attr("data-id"),s=document.title,l=a.offset();if(t("#"+o).length){var c=t("#"+o);if(c.hasClass("on")){c.removeClass("on");return}}else{var n=['<div id="'+o+'" class="article-share-box">','<input class="article-share-input" value="'+r+'">','<div class="article-share-links">','<a href="https://twitter.com/intent/tweet?url='+i+'" class="article-share-twitter" target="_blank" title="Twitter"></a>','<a href="https://www.facebook.com/sharer.php?u='+i+'" class="article-share-facebook" target="_blank" title="Facebook"></a>','<a href="http://service.weibo.com/share/share.php?title='+s+"&url="+i+"&searchPic=true&style=number"+'" class="article-share-weibo" target="_blank" title="Weibo"></a>','<a href="http://s.jiathis.com/qrcode.php?url='+i+'" class="article-share-wechat" target="_blank" title="Wechat"></a>',"</div>","</div>"].join("");var c=t(n);t("body").append(c)}t(".article-share-box.on").hide();c.css({top:l.top+25,left:l.left}).addClass("on")}).on("click",".article-share-box",function(t){t.stopPropagation()}).on("click",".article-share-box-input",function(){t(this).select()}).on("click",".article-share-box-link",function(t){t.preventDefault();t.stopPropagation();window.open(this.href,"article-share-box-window-"+Date.now(),"width=500,height=450")})})(jQuery);