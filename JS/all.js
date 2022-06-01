$(document).ready(function () {
    
// 底層展開

    $('.question-list').click(function(e){
        e.preventDefault();
        

       $(this).find('.question-text').slideToggle(1000);
      
     });

// 往上滑

       $(".top-btn").click(function(e){
        e.preventDefault();
        $("html,body").animate({scrollTop: 0}, 1000);
    });

    
    $(".btn-num").click(function(e){
        e.preventDefault();
        $(this).text();
    $('.price-change-answer').text("600");
$('.price-change-answer-pro').text("1,600");
});
    
$(".btn-num2").click(function(e){
    e.preventDefault();
    $(this).text();
$('.price-change-answer').text("900");
$('.price-change-answer-pro').text("2,400");
});

    
$(".btn-num3").click(function(e){
    e.preventDefault();
    $(this).text();
$('.price-change-answer').text("1,200");
$('.price-change-answer-pro').text("3,200");
});

    
$(".btn-num4").click(function(e){
    e.preventDefault();
    $(this).text();
$('.price-change-answer').text("1,500");
$('.price-change-answer-pro').text("4,000");
});

    
$(".btn-num5").click(function(e){
    e.preventDefault();
    $(this).text();
$('.price-change-answer').text("1,800");
$('.price-change-answer-pro').text("4,800");
});






});