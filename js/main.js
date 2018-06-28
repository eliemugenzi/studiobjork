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
    $('main#case-detail,#product').hide();
    $('main#case .btn-more').click(()=>{
        
        $('main#case-detail').show().addClass('show-section');
        $('main#case').fadeIn();
    })

    $('#btn-products').click(()=>{
        $('#product').fadeIn();
        $('#product').show().addClass('show-section');
        $('main#case-detail,main#case').fadeIn();
    })

    $('.service-carousel').slick({
        dots:true,
        autoplay:true,
        autoplaySpeed:2000,
        responsive:[
            {
                breakpoint:750,
                settings:{
                    dots:false
                }
            }
        ]
    })

   
})