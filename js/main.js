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
    

    $('#btn-scroll-back').click(()=>{
        $('#product,main#case-detail').fadeOut();
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
                $('.show-section').removeClass('show-section');
                $('main#case-detail').show().addClass('show-section');
                $('main#case').fadeIn();
            }
            else if($('main#case-detail').hasClass('show-section')){
                $('#product').fadeIn();
                $('#product').show().addClass('show-section');
                $('main#case-detail,main#case').fadeIn();;
            }
            else if($('#product').hasClass('show-section')){
                $('#product,main#case-detail').fadeOut();
                $('main#case').show().addClass('show-section-alt');
            }
            break;
        case key.up:
            if($('#product').hasClass('show-section')){
                $('#product').addClass('show-section-rev');
                $('main#case').fadeIn().show().addClass('show-section');
                $('#product,main#case-detail').fadeOut();
            }
            else if($('main#case-detail').hasClass('show-section')){
                $('main#case').fadeIn().show().addClass('show-section');
                $('main#case-detail').fadeOut();
            }
            break;
        default:
            console.log("Nonsense");
            break;
    }
})