$(document).ready(()=>{
    $('.transition').addClass('anim-trans');
    $('.menu-mobile menu').hide();
    $('main#case').addClass('show-section');

    $('nav button').click(()=>{
        console.log("Sth happens")
        $('.menu-sm').slideDown();
    })
    
    $('.menu-sm button').click(()=>{
        $('.menu-sm').slideUp();
        console.log('clicked');
    })
    $('#product').hide();
       $('main#case .btn-scroll').click(()=>{
           $('#product').fadeIn();
           $('#product').show().addClass('show-section');
           $('main#case').fadeOut();
       })

    $('#btn-products').click(()=>{
        $('#product').fadeIn();
        $('#product').show().addClass('show-section');
        $('main#case-detail,main#case').fadeIn();
    })
    

    $('#btn-scroll-back').click(()=>{
        $('#product').hide();
        $('main#case').show().addClass('show-section-alt');
        

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



$(document).keydown(e=>{
    const key={up:38,down:40};
    switch(e.keyCode){
        case key.down:
            console.log('Down Pressed');
            if($('main#case').hasClass('show-section')|| $('main#case').hasClass('show-section-alt')){
                $('#product').fadeIn().show().addClass('show-section');
                $('main#case').fadeIn();
            }
            
            break;
        case key.up:
            if($('#product').hasClass('show-section')){
                $('#product').removeClass('show-section');
                $('main#case').addClass('show-section show-section-alt');
            }
            
            break;
        default:
            console.log("Nonsense");
            break;
    }
})