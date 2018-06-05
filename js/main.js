$(document).ready(()=>{
    $('#nav-mobile').show();
    $('.transition').addClass('anim-trans');
    $('.menu-mobile menu').hide();

    $('i.fa.fa-bars,i.fa.fa-times-circle').click(()=>{
        $('.menu-sm').slideToggle();
    })
})