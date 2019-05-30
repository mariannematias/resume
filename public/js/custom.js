$(document).ready(function(){
    $("a.nav-link").click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 1200);
    });

    $('.color-btn').click(function() {
        $('.color-btn').removeClass("active");
        $(this).addClass("active");

        var colorId = $(this).attr('id');

        $('.chart').removeClass(modifierClassMatcher);
        var chartClass = "chart " + colorId;
        $('.chart').addClass(chartClass);

        var barColor = "";

        if ($('.chart').hasClass('color1')) {
            barColor = '#00BCD4';
        } else if ($('.chart').hasClass('color2')) {
            barColor = '#03A9F4';
        } else if ($('.chart').hasClass('color3')) {
            barColor = '#009688';
        } else if ($('.chart').hasClass('color4')) {
            barColor = '#4CAF50';
        } else if ($('.chart').hasClass('color5')) {
            barColor = '#FFC107';
        } else if ($('.chart').hasClass('color6')) {
            barColor = '#FF5722';
        }

        $('.chart').data('easy-pie-chart', null);
        
		$('.chart').easyPieChart({		
    		barColor: barColor,
    		trackColor: '#f2f2f2',
            scaleColor: false,
            lineWidth: 4,
            animate: 1000,
    	}); 

        var href = colorId + ".css";
        $('link[rel=stylesheet]:last').remove();
        $('head').append('<link rel="stylesheet" href="/css/' + href +'"/>');
    });

    function modifierClassMatcher(index, className) {
        let matchedClasses = className.match(/(^|\s)color\S+/g)
        return (matchedClasses || []).join('')
    }

    $(".chart").easyPieChart({
        barColor: '#00BCD4',
        trackColor: '#f2f2f2',
        scaleColor: false,
        lineWidth: 4,
        animate: 1000,
    });

    $('.carousel').carousel();
});