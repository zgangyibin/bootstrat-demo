import "../bootstrap-5.1.3-dist/css/bootstrap.css";
import "../font/iconfont.css";
import "../css/main.css";


import $ from "jquery";

let winHeight = $(window).height();//获取可视区域高度
function animateInit(){
    let scrollTop = $(window).scrollTop();//获取窗口的滚动距离
    $(".shandow-animate").each(function(){
        let top = $(this).offset().top;//获取元素离页面顶部的距离
        if(winHeight + scrollTop >= top){//判断元素是否出现在可视区
            $(this).addClass("right-animate")
        }
    })
    $(".card").each(function(){
        let top = $(this).offset().top;//获取元素离页面顶部的距离
        if(winHeight + scrollTop >= top){//判断元素是否出现在可视区
            $(this).addClass("bottom-to-up");
        }
    })
    $("h3>a").each(function(){
        let top = $(this).offset().top;//获取元素离页面顶部的距离
        if(winHeight + scrollTop >= top){//判断元素是否出现在可视区
            $(this).addClass("top-to-bottom");
        }
    })
}
$(window).scroll(function(){//窗口的滚动事件
    animateInit()
})
$(window).resize(function(){//窗口大小发生变化
    $(".shandow-animate").removeClass("right-animate");
    $(".card").removeClass("bottom-to-up");
    $("h3>a").removeClass("top-to-bottom");
    animateInit();
})

// footer时分秒
var s1 = new Date("May 21,2022 01:15:00");
var s2 = s1.getTime()
var timer = setInterval(function(){
    var now = new Date();
    var now2 = now.getTime();
    var total = (now2 - s2)/1000;
    var day = parseInt(total / (24*60*60));
    var afterDay = total - day*24*60*60;
    var hour = parseInt(afterDay/(60*60));
    var afterHour = total - day*24*60*60 - hour*60*60;
    var minites = parseInt(afterHour/60);
    var seconds = Math.floor(total - day*24*60*60 - hour*60*60 - minites*60);
    $(".day").text(day);
    $(".hours").text(hour);
    $(".minites").text(minites);
    $(".seconds").text(seconds);
},1000);

