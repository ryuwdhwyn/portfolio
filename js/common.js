$("document").ready(function () {
        $(".header .nav ul li").click(function(){
        $(".header .nav ul li").eq().toggleClass("on")
        })

        $(".m-btn, .m-nav ul li").click(function(){
        $(".m-btn").toggleClass("on")
        $(".m-nav").toggleClass("on")
        })


        
        const design_img_content = [
        "images/패키지 프로세스.png",
        "images/로고 프로세스.png",
]

        const design_img_box = [
        "images/포스터 프로세스.png",
        "images/상세페이지 프로세스.png",
]

$(".design .design-box1 .design-box").click(function(){
        let i = $(this).index();
        $(".window").fadeIn()
        $(".window-content").slideDown().scrollTop(0)
        $(".window-content img").attr("src", design_img_content[i])
        $("html, body").css("overflow", "hidden")
})

$(".design .design-box2 .design-box").click(function(){
        let i = $(this).index();
        $(".window").fadeIn()
        $(".window-content").slideDown().scrollTop(0)
        $(".window-content img").attr("src", design_img_box[i])
        $("html, body").css("overflow", "hidden")
})

$(".window, .window-content i").click(function(){
        $(".window").fadeOut()
        $(".window-content").slideUp()
        $("html, body").css("overflow", "visible")
})

let close = parseInt($(".window-content i").css("top"))

$(".window-content").scroll(function(){
        $(".window-content i").css("top", close+$(".window-content").scrollTop()+"px")
})

AOS.init();

        $(window).scroll(function(){


                let pos = $(window).scrollTop();

                if (pos >= 200) {
                $(".aside").show()
                }else{
                $(".aside").hide()
                }
                
                

        })

        $(".aside img").click(function(){
                $("html, body").scrollTop(0)
        })
        

})
