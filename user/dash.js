$(document).ready(function(){
    $('input[type="radio"]').click(function(){
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".box").not(targetBox).hide();
        $(targetBox).show();
    });
});
        

$(document).ready(function(){

$(".dropdown-menu li a").click(function(){

$(".btn:first-child").text($(this).text());
$(".btn:first-child").val($(this).text());

});

});