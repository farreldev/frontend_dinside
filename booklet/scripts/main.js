'use strict';

/*
 * Turn.js responsive book
 */

/*globals window, document, $*/

(function () {
    'use strict';

    var module = {
        ratio: 2.9,
        init: function init(id) {
            var me = this;

            // if older browser then don't run javascript
            if (document.addEventListener) {
                this.el = document.getElementById(id);
                this.resize();
                this.plugins();

                // on window resize, update the plugin size
                window.addEventListener('resize', function (e) {
                    var size = me.resize();
                    $(me.el).turn('size', size.width, size.height);
                });
            }
        },

        resize: function resize() {
            // reset the width and height to the css defaults
            this.el.style.width = '';
            this.el.style.height = '';

            var width = this.el.clientWidth,
                height = Math.round(width / this.ratio),
                padded = Math.round(document.body.clientHeight * 0.9);

            // if the height is too big for the window, constrain it
            if (height > padded) {
                height = padded;
                width = Math.round(height * this.ratio);
            }

            // set the width and height matching the aspect ratio
            this.el.style.width = width + 'px';
            this.el.style.height = height + 'px';

            return {
                width: width,
                height: height
            };
        },

        plugins: function plugins() {
            // run the plugin
            $(this.el).turn({
                gradients: true,
                acceleration: true,
                elevation: 50,
                autoCenter: true
            });

            // hide the body overflow
            // document.body.className = 'hide-overflow';
        }
    };

    function toZoom(id, el) {
        $(id).click(function (evt) {
            $(el).zoomTarget({
                targetsize: 0.94,
                closeclick: true,
                duration: 800,
                nativeanimation: true,
                easing: 'ease-in-out',
                scalemode: 'both'
            });
            evt.stopPropagation();
        });
    }

    $('.era').slick({
        infinite: false,
        variableWidth: true,
        centerMode: true,
        slidesToShow: 3,
        arrows: false
    });
    // ----------------------
    // NEXT BUTTON
    // ---------------------- 
    $('.sliderNext').click(function () {
        $('.era').slick('slickNext');
    });

    // ----------------------
    // PREVIOUS BUTTON
    // ---------------------- 
    $('.sliderPrev').click(function () {
        $('.era').slick('slickPrev');
    });

    module.init('flipBook');
    toZoom('#flipBook', '.page');

    $('#sk').on('click', function () {
        $('#flipBook').turn('page', 4);
    });

    $('#sh').on('click', function () {
        $('#flipBook').turn('page', 10);
    });

    $('#hb').on('click', function () {
        $('#flipBook').turn('page', 26);
    });

    $('#gs').on('click', function () {
        $('#flipBook').turn('page', 28);
    });

    $('#mg').on('click', function () {
        $('#flipBook').turn('page', 30);
    });

    $('#sby').on('click', function () {
        $('#flipBook').turn('page', 35);
    });

    $('#jw').on('click', function () {
        $('#flipBook').turn('page', 38);
    });

    $(window).bind('keydown', function (e) {
        if (e.keyCode == 37) {
            $('#flipBook').turn('previous');
        } else if (e.keyCode == 39) {
            $('#flipBook').turn('next');
        } else if (e.keyCode == 48) {
            $('#flipBook').turn('page', 1);
        } else if (e.keyCode == 49) {
            $('#flipBook').turn('page', 4);
        } else if (e.keyCode == 50) {
            $('#flipBook').turn('page', 10);
        } else if (e.keyCode == 51) {
            $('#flipBook').turn('page', 26);
        } else if (e.keyCode == 52) {
            $('#flipBook').turn('page', 28);
        } else if (e.keyCode == 53) {
            $('#flipBook').turn('page', 30);
        } else if (e.keyCode == 54) {
            $('#flipBook').turn('page', 35);
        } else if (e.keyCode == 55) {
            $('#flipBook').turn('page', 38);
        }
    });
})();
//# sourceMappingURL=main.js.map
