(function(e){e.fn.UItoTop=function(t){var n={text:"To Top",min:200,inDelay:600,outDelay:400,containerID:"toTop",containerHoverID:"toTopHover",scrollSpeed:1200,easingType:"linear"},r=e.extend(n,t),i="#"+r.containerID,s="#"+r.containerHoverID;e("body").append('<a href="#" id="'+r.containerID+'">'+r.text+"</a>");e(i).hide().click(function(){e("html, body").animate({scrollTop:0},r.scrollSpeed,r.easingType);e("#"+r.containerHoverID,this).stop().animate({opacity:0},r.inDelay,r.easingType);return!1}).prepend('<span id="'+r.containerHoverID+'"></span>').hover(function(){e(s,this).stop().animate({opacity:1},600,"linear")},function(){e(s,this).stop().animate({opacity:0},700,"linear")});e(window).scroll(function(){var t=e(window).scrollTop();typeof document.body.style.maxHeight=="undefined"&&e(i).css({position:"absolute",top:e(window).scrollTop()+e(window).height()-50});t>r.min?e(i).fadeIn(r.inDelay):e(i).fadeOut(r.Outdelay)})}})(jQuery);