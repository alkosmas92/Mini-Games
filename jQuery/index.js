/*

$("input").keypress(function(event){
    $("h1").text(event.key);
});



$("h1").on("click" , function(){
    $("h1").css("color"  ,"purple");
})


$("button").on("click" , function(){
    $("h1").hide();
} ) ;

$("button").click(function() {
    $("h1").css("color","red");
});



$("h1").on("mouseover" , function(){
    $("h1").css("color"  ,"red");
});

$("button").on("click" , function(){
    $("h1").animate({opacity: 0.5});
});

$("button").on("click" , function(){
    $("h1").slideToggle();
} ) ;

*/


$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity : 0.5});
});