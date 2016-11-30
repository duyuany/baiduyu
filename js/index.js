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
        $("section").each(function(index,obj){
            if(index==0){
                return;
            }
            if(num!==0){
                if(index==num){
                    $(".aa").eq(index).css({
                        transform: "translateX(0px)",opacity: 1
                    })
                    $(".bb").eq(index).css({
                        transform: "translateX(0px)",opacity: 1
                    })

                }else{
                    $(".aa").eq(index).css({
                        transform: "translateX(-50px)",opacity: 0
                    })
                    $(".bb").eq(index).css({
                        transform: "translateX(50px)",opacity: 0
                    })
                }
            }


        })
    })
    $("#fullpage")[0].addEventListener("mozTransitionEnd",function(){
        flag=true;
        $(".con-wrap").each(function(index,obj){
            $(obj).eq(index).css({
                transform: "translateX(0px)",opacity: 1
            })
        })
        $(".tree").each(function(index,obj){
            $(obj).eq(index).css({
                transform: "translateX(0px)",opacity: 1
            })
        })
    })



    var flag2=true;
    $(".menu-option").click(function(){
        $(".menu").css({display:"block"});
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
            setTimeout(function(){
                $(".menu").css({display:"none"});
            },6000)
        }
    })
    /*浏览器尺寸变化*/
    $(window).resize(function(){
        ch=$(window).height();
        var cw=$(window).width();
        $("#fullpage").css("margin-top",-ch*num);
        if(cw>1000){
            $(".menu a").css({
                animation:"none",
                opacity:0
            })
            $(".menu-option-tline").css({transform: "rotateZ(0deg) translateY(0px)"})
            $(".menu-option-bline").css({transform: "rotateZ(0deg) translateY(0px)"})
            flag2=true
        }
    })

})