(function($){
    "use strict"
    
    var app = (function() {
        
        var $siteContainer = $('.site-container'),
            $isHome = $siteContainer.find('div').hasClass('homepage'),
            $isPageSeacrh = $siteContainer.find('div').hasClass('info-search-results'),
            $isSubHead = $siteContainer.find('div').hasClass('.sub-head-child-pages'),
            
            $subHead =  $siteContainer.find('.sub-head-child-pages');
            
            ($isHome) ? $('.top-center').hide() : $('.top-center').show();
            ($isPageSeacrh) ? $subHead.css({marginTop: '-83px'}) : '';
        
            $('.humburger-btn').on('click', function() {
                if($('.inputSearch').hasClass('searchOpen')) {
                    $(this).toggleClass('humTrigger');
                    $('.navigasi').toggleClass('mnuOpen');
                    $('.inputSearch').removeClass('searchOpen'); 
                } else {
                    $(this).toggleClass('humTrigger');
                    $('.navigasi').toggleClass('mnuOpen');
                }
            });
            
            $('.cari-btn').on('click', function() {
                if($('.navigasi').hasClass('mnuOpen') && $('.humburger-btn').hasClass('humTrigger')) {
                    $('.navigasi').removeClass('mnuOpen');
                    $('.humburger-btn').removeClass('humTrigger');
                    $('.inputSearch').toggleClass('searchOpen');
                } else {
                    $('.inputSearch').toggleClass('searchOpen');
                }
                
            
                if($isPageSeacrh) {
                    $('.info-search-results').siblings('.sub-head-child-pages')
                    .animate({
                        marginTop: 0,
                        paddingBottom: '110px'
                    }, 300, function() {
                        if(!$('.inputSearch').hasClass('searchOpen')) {
                            $('.sub-head-child-pages').animate({
                                paddingBottom: 0,
                                marginTop: '-83px'
                            }, 300)
                        }
                    });
                }
            })

            $('#txtSearch').on('input', function() {
                if($(this).val() !== "") {
                    $('.inputSearch a').show();
                } else {
                    $('.inputSearch a').hide();
                }
            })

            $('.inputSearch').on('click', 'a', function(event) {
                event.preventDefault();
                $('#txtSearch').val('').next().hide();
                
            })


            function samaTinggi(parentBox, elBox) {
                $(parentBox).each(function() {
                    var tinggiKtk = 0;
                    
                    $(this).find(elBox).each(function() {
                        if($(this).height() > tinggiKtk ) {
                            tinggiKtk = $(this).height();
                        }
                    })
                    $(this).find(elBox).height(tinggiKtk);
                });
            };
            
            samaTinggi('.tabel-paket', '.paket-item');
            samaTinggi('.artikel-terkait', '.item');
            
    })();

})(jQuery)