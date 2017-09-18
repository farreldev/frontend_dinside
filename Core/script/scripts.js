(function($) {
  "use strict"

  var app = (function() {

    var $siteContainer = $('main.site-container'),
      $siteHeader = $('header.site-header'),
      $isHome = $siteContainer.find('div').hasClass('homepage'),
      $isPageSeacrh = $siteContainer.find('div').hasClass('info-search-results'),
      $isSubHead = $siteContainer.find('div').hasClass('.sub-head-child-pages'),
      $subHead = $siteContainer.find('.sub-head-child-pages'),
      $windw = $(window),
      $winWidth = $windw.innerWidth,
      $winHeight = $windw.innerHeight;

    ($isHome) ? $('.top-center').hide(): $('.top-center').show();
    ($isPageSeacrh) ? $subHead.css({
      marginTop: '-83px'
    }): '';

    $windw.on('scroll', function() {

      if($windw.scrollTop() > 55) {
        $siteContainer.css('marginTop', '55px');
        $siteHeader.css({
          position: 'fixed',
          top: 0,
          zIndex: 3
        });
      }

    });

    $('.humburger-btn').on('click', function() {
      if ($('.inputSearch').hasClass('searchOpen')) {
        $(this).toggleClass('humTrigger');
        $('.navigasi').toggleClass('mnuOpen');
        $('.inputSearch').removeClass('searchOpen');
      } else {
        $('.navOverlay').fadeOut();
        $(this).toggleClass('humTrigger');
        $('.navigasi').toggleClass('mnuOpen');
      }
    });

    $('.cari-btn').on('click', function() {
      if ($('.navigasi').hasClass('mnuOpen') && $('.humburger-btn').hasClass('humTrigger')) {
        $('.navigasi').removeClass('mnuOpen');
        $('.humburger-btn').removeClass('humTrigger');
        $('.inputSearch').toggleClass('searchOpen');
      } else {
        $('.inputSearch').toggleClass('searchOpen');
      }


      if ($isPageSeacrh) {
        $('.info-search-results').siblings('.sub-head-child-pages')
          .animate({
            marginTop: 0,
            paddingBottom: '110px'
          }, 300, function() {
            if (!$('.inputSearch').hasClass('searchOpen')) {
              $('.sub-head-child-pages').animate({
                paddingBottom: 0,
                marginTop: '-83px'
              }, 300)
            }
          });
      }
    })

    $('#txtSearch').on('input', function() {
      if ($(this).val() !== "") {
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
          if ($(this).height() > tinggiKtk) {
            tinggiKtk = $(this).height();
          }
        })
        $(this).find(elBox).height(tinggiKtk);
      });
    };

      samaTinggi('.tabel-paket', '.paket-item');
      samaTinggi('.artikel-terkait', '.item');

    var $ai = $('section.headlines-article').find('div.article-info').children('article'),
      $hSatu = $ai.find('h1'),
      $par = $ai.find('p'),

      $pText = $par.text(),
      $jmlStr = $hSatu.text().length,
      $replaceStr = $pText.substring(0, 170);

    ($jmlStr >= 50) ? $par.text($replaceStr + '..'): $pText;

    $('a.signIn').on('click', function(e) {
      e.preventDefault();
      $('div.overlay-box').fadeIn(200);
      setTimeout(function() {
        $('div.signin-modal').removeClass('animated zoomOut');
        $('div.signin-modal').toggleClass('animated zoomIn').css('display', 'block');
      }, 300);

    })

    $('div.overlay-box').on('click', function() {
      $('div.signin-modal').removeClass('animated zoomIn');
      $('div.signin-modal').toggleClass('animated zoomOut');
      setTimeout(function() {
        $('div.overlay-box').fadeOut(200);
        $('div.signin-modal').css({
          display: 'none'
        });
      }, 300);
    })
  })();

})(jQuery)
