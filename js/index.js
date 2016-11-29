/**
 * Created by Administrator on 2016/11/29 0029.
 */
$(function(){
    var ch=$(window).height();
    var num=0;
    var flag=true;
    touch.on("body","swipeup","#fullpage",function(){
        if(!flag){
            return;
        }
        num++;
        if(num==$("section").length){
            num=$("section").length-1;
            return;
        }

        $("#fullpage").css({"margin-top":-ch*num,transition:"margin 1s ease"})
        flag=false;
    })
    touch.on("body","swipedown","#fullpage",function(){
        if(!flag){
           return;
        }
        num--;
        if(num==-1){
            num=0;
            return;
        }
        $("#fullpage").css({"margin-top":-ch*num,transition:"margin 1s ease"})
        flag=false;
    })
    $("#fullpage")[0].addEventListener("webkitTransitionEnd",function(){
        flag=true;
    })
    $("#fullpage")[0].addEventListener("mozTransitionEnd",function(){
        flag=true;
    })
})