$(document).ready(()=>{
    
    $('.transition').addClass('anim-trans');
    $('.menu-mobile menu').hide();

    $('nav button').click(()=>{
        console.log("Sth happens")
        $('.menu-sm').slideDown();
    })
    
    $('.menu-sm button').click(()=>{
        $('.menu-sm').slideUp();
        console.log('clicked');
    })
})