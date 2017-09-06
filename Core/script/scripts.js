(function($){
    "use strict"
    
    var app = (function() {
        
        var $siteContainer = $('.site-container'),
            $isHome = $siteContainer.find('div').hasClass('homepage'),
            $isPageSeacrh = $siteContainer.find('div').hasClass('info-search-results'),
            $isSubHead = $siteContainer.find('div').hasClass('.sub-head-child-pages'),
            
            $subHead =  $siteContainer.find('.sub-head-child-pages'),
            
            word_list = [
                {text: "Bumn", weight: 72, link: "https://facebook.github.io/react/"},
                {text: "Beras", weight: 48, link: "https://facebook.github.io/react/"},
                {text: "Daya Beli", weight: 24, link: "https://facebook.github.io/react/"},
                {text: "Reshuffle", weight: 58,link: "https://facebook.github.io/react/"},
                {text: "Pertumbuhan Ekonomi", weight: 38, link: "https://facebook.github.io/react/"},
                {text: "Fintech", weight: 35, link: "https://facebook.github.io/react/"},
                {text: "Maritim", weight: 55, link: "https://facebook.github.io/react/"},
                {text: "Bisnis", weight: 55, link: "https://facebook.github.io/react/"},
                {text: "Infrastruktur", weight: 30, link: "https://facebook.github.io/react/"},
                {text: "Pertambangan", weight: 38, link: "https://facebook.github.io/react/"},
                {text: "Analisis", weight: 25, link: "https://facebook.github.io/react/"},
                {text: "Bursa", weight: 72, link: "https://facebook.github.io/react/"},
                {text: "Migas", weight: 50, link: "https://facebook.github.io/react/"},
                {text: "CPO", weight: 36, link: "https://facebook.github.io/react/"},
                {text: "Finansial", weight: 44, link: "https://facebook.github.io/react/"},
                {text: "Bursa", weight: 40, link: "https://facebook.github.io/react/"},
                {text: "Daya Beli", weight: 48, link: "https://facebook.github.io/react/"},
                {text: "UKM", weight: 45, link: "https://facebook.github.io/react/"},
            ];

            $("#txtCloud").jQCloud(word_list);

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

            $('.inputSearch').on('click', '.clear-txt', function(event) {
                event.preventDefault();
                $('#txtSearch').val('').closest('form').next().hide();
                
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

            jQuery('#startDate, #endDate, #highlightDate').datetimepicker();
            
            $(window).on('load', function() {
                samaTinggi('.tabel-paket', '.paket-item');
                samaTinggi('.artikel-terkait', '.item');
            })

            
    })();

})(jQuery)