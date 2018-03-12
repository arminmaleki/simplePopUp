//alert("here I am!");
function showPopUp1(){
    $(".screen").slideDown(500,showPopUp2);
    

}
function showPopUp2(){
    $(".popup").fadeIn(500);

}
$(document).ready(function(){
    setTimeout(showPopUp1,5000);
    $(".popup").click(function(){$(this).fadeOut(100);$(".screen").slideUp(500);});
});
