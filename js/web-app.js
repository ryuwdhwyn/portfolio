$("document").ready(function () {


    const app_img_content = [
        "images/앱 프로세스.jpg",
]


$(".web .web-box .content-app").click(function(){
    let i = $(this).index();
    $(".window").fadeIn()
    $(".window-content").slideDown().scrollTop(0)
    $(".window-content img").attr("src", app_img_content[0])
    $("html, body").css("overflow", "hidden")
})

const web_img_content = [
    "images/마세라티 프로세스.png",
]

$(".web .web-box .content-box3").click(function(){
    let i = $(this).index();
    $(".window").fadeIn()
    $(".window-content").slideDown().scrollTop(0)
    $(".window-content img").attr("src", web_img_content[0])
    $("html, body").css("overflow", "hidden")
})




});