$("document").ready(function () {
    $(".header .etc-menu img").click(function(e){
        e.preventDefault();
        $(".header .etc-menu ul li").fadeToggle()
    });    
    
    $(".header .nav ul li:nth-child(1)").click(function () { 
        $(".header .submenu").slideToggle("on")
        $(".header .nav ul li p i").toggleClass("fa-angle-up fa-angle-down")
    })


    

    $(".color .car-color ul li").eq(0).addClass("on")

    let arr = ["images/흰.jpg","images/검.jpg","images/빨.jpg","images/회.jpg","images/노.jpg","images/파.jpg"]
    $(".car-color ul li").click(function() {
        let i = $(this).index();
        console.log(i);
        $(".color ul li img").attr("src", arr[i]);
        $(".color .car-color ul li").removeClass("on").eq(i).addClass("on")
    })
    

})
