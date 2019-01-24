(function($){
$.fn.jump = function(){
    $(this)
    .stop()
    .animate({
        'marginTop' : '-35px'
    }, 150)
    .animate({
        'marginTop' : '0px'
    }, 150)
    .animate({
        'marginTop' : '-35px'
    }, 150)
    .animate({
        'marginTop' : '0px'
    }, 150);
return this;
}
})(jQuery)

