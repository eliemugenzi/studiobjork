$(document).ready(()=>{
    $('#nav-mobile').show();
    $('.transition').addClass('anim-trans');
    $('.menu-mobile menu').hide();

    $('#nav-mobile i.fa.fa-bars').click(()=>{
        console.log("Sth happens")
        $('.menu-sm').slideDown();
    })
    $('i.fa.fa-times-circle').click(()=>{
        $('.menu-sm').slideUp();
        console.log('clicked');
    })
})