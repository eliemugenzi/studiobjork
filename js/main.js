$(document).ready(()=>{
    $('#nav-mobile').show();
    $('.transition').addClass('anim-trans');
    $('.menu-mobile menu').hide();

    $('i.fa.fa-bars').click(()=>{
        $('.menu-sm').slideDown();
    })
    $('i.fa.fa-times-circle').click(()=>{
        $('.menu-sm').fadeOut();
        console.log('clicked');
    })
})