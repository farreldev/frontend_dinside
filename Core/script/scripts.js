(function($) {
  "use strict";

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

    ($isHome) ? $('.top-center').hide() : $('.top-center').show();
    ($isPageSeacrh) ? $subHead.css({
      marginTop: '-83px'
    }): '';

    $windw.on('scroll', function() {

      if($windw.scrollTop() > 55) {
        // $siteContainer.css('marginTop', '55px');
        $siteHeader.css({
          top: 0,
          transition: 'all .3s ease-in-out',
          boxShadow: '0px 0px 10px rgba(0,0,0,.13)'
        });
      } else {
        $siteHeader.css({
          boxShadow: 'none'
        });
      }

    });

    $('.humburger-btn').on('click', function() {
      if ($('.inputSearch').hasClass('searchOpen')) {
        $(this).toggleClass('humTrigger');
        $('nav.navigasi').toggleClass('mnuOpen');
        $('div.inputSearch').removeClass('searchOpen');
      } else {
        $(this).toggleClass('humTrigger');
        $('nav.navigasi').toggleClass('mnuOpen');
      }
      if($(this).hasClass('humTrigger')) {
        $('div.navOverlay').fadeOut(300);
        if(window.innerWidth > 768 ) {
          $('div.navOverlay').css({
            right: 0,
            bottom: 0,
            left: '283px'
          });
        } else {
          $('div.navOverlay').css({
            right: 0,
            bottom: 0,
            left: '100%'
          });
        }
        $('div.navOverlay').fadeIn(300);
      } else {
        $('div.navOverlay').fadeOut();
      }
    });

    $('div.navOverlay').click(function() {
      if($('nav.navigasi').hasClass('mnuOpen') && $('div.humburger-btn').hasClass('humTrigger')) {
        $(this).fadeOut(300);
        $('nav.navigasi').removeClass('mnuOpen');
        $('div.humburger-btn').removeClass('humTrigger');
      }
      if($('div.inputSearch').hasClass('searchOpen')) {
        $('div.navOverlay').fadeOut(300);
        $('div.inputSearch').removeClass('searchOpen');
      }
    });

    $('span.cari-btn a').on('click', function(evnt) {
      evnt.preventDefault();
      if ($('nav.navigasi').hasClass('mnuOpen') && $('.humburger-btn').hasClass('humTrigger')) {
        $('nav.navigasi').removeClass('mnuOpen');
        $('div.humburger-btn').removeClass('humTrigger');
        $('div.inputSearch').toggleClass('searchOpen');
        $('div.navOverlay').fadeOut(300);
        $('div.navOverlay').css({
          top: '55px',
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 2
        });
        $('div.navOverlay').fadeIn(300);
      } else {
        $('div.navOverlay').fadeIn(300);
        $('div.navOverlay').css({
          top: '55px',
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 2
        });
        $('div.inputSearch').toggleClass('searchOpen');
        if(!$('div.inputSearch').hasClass('searchOpen')) {
          $('div.navOverlay').fadeOut(300);
        }
      }

      // if ($isPageSeacrh) {
      //   $('.info-search-results').siblings('.sub-head-child-pages')
      //     .animate({
      //       marginTop: 0,
      //       paddingBottom: '110px'
      //     }, 300, function() {
      //       if (!$('.inputSearch').hasClass('searchOpen')) {
      //         $('.sub-head-child-pages').animate({
      //           paddingBottom: 0,
      //           marginTop: '-83px'
      //         }, 300);
      //       }
      //     });
      // }
    });

    $('#txtSearch').on('input', function() {
      if ($(this).val() !== "") {
        $('.inputSearch a').show();
      } else {
        $('.inputSearch a').hide();
      }
    });

    $('.inputSearch').on('click', '.clear-txt', function(event) {
      event.preventDefault();
      $('#txtSearch').val('').closest('form').next().hide();
    });


    function samaTinggi(parentBox, elBox) {
      $(parentBox).each(function() {
        var tinggiKtk = 0;

        $(this).find(elBox).each(function() {
          if ($(this).height() > tinggiKtk) {
            tinggiKtk = $(this).height();
          }
        });
        $(this).find(elBox).height(tinggiKtk);
      });
    }

      samaTinggi('.tabel-paket', '.paket-item');
      samaTinggi('.artikel-terkait', '.item');

    var $ai = $('section.headlines-article').find('div.article-info').children('article'),
      $hSatu = $ai.find('h1'),
      $par = $ai.find('p'),

      $pText = $par.text(),
      $jmlStr = $hSatu.text().length,
      $replaceStr = $pText.substring(0, 170);

    ($jmlStr >= 56) ? $par.text($replaceStr + '..') : $pText;

    $('a.signIn').on('click', function(e) {
      e.preventDefault();
      $('div.overlay-box').fadeIn(200);
      setTimeout(function() {
        $('div.signin-modal').removeClass('animated zoomOut');
        $('div.signin-modal').toggleClass('animated zoomIn').css('display', 'block');
      }, 300);
    });

    $('div.overlay-box').on('click', function() {
      $('div.signin-modal').removeClass('animated zoomIn');
      $('div.signin-modal').toggleClass('animated zoomOut');
      setTimeout(function() {
        $('div.overlay-box').fadeOut(200);
        $('div.signin-modal').css({
          display: 'none'
        });
      }, 300);
    });
  })();

})(jQuery);
