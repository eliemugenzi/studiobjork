$(document).ready(()=>{
    $('#nav-mobile').show();
    $('.transition').addClass('anim-trans');
    $('.menu-mobile menu').hide();

    $('#nav-mobile button').click(()=>{
        console.log("Sth happens")
        $('.menu-sm').slideDown();
    })
    $('.menu-sm button').click(()=>{
        $('.menu-sm').slideUp();
        console.log('clicked');
    })
})