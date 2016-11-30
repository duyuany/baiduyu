/**
 * Created by Administrator on 2016/11/29 0029.
 */
$(function(){
    $("#fullpage").mousedown(function(e){
        e.preventDefault();
    }).mousemove(function(e){
        e.preventDefault();
    });
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

    var flag2=true;
    $(".menu-option").click(function(){
        if(flag2){
            $(this).find(".menu-option-tline").css({transform: "rotateZ(45deg) translateY(10px)"})
            $(this).find(".menu-option-bline").css({transform: "rotateZ(-45deg) translateY(-10px)"})
            $(".menu a").each(function(index,obj){
                //alert(index)

                $(obj).css({
                    opacity:0,
                    animation: "menu 2s ease "+index*0.2+"s forwards"})
            })
            flag2=false;
        }else{
            $(this).find(".menu-option-tline").css({transform: "rotateZ(0deg) translateY(0px)"})
            $(this).find(".menu-option-bline").css({transform: "rotateZ(0deg) translateY(0px)"})
            $(".menu a").each(function(index,obj){
                //alert(index)
                $(obj).css({
                    opacity:1,
                    animation: "menu1 2s ease "+(1.2-index*0.2)+"s forwards"})
            })
            flag2=true;
        }
    })
})