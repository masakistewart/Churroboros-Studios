app.controller('MainController', function($scope, $http){
	$http.get('/data/team.json').then(function(data) {
		var teams = data.data;
        console.log(teams.length);
        $scope.team = teams;
		$scope.row1 = [teams[0], teams[1], teams[2]];
		$scope.row2 = [teams[3], teams[4], teams[5]];
        $scope.row3 = [teams[6], teams[7], teams[8]];
		// console.log(teams);
	});

	$scope.load = function() {
		$(".nothing").removeClass("nothing");
        $(".carousel").carousel();
	}

	$scope.load();
})

app.directive('fadeIn',  function() {
return {
    templateUrl: 'views/directives/fadeIn.html',
    link: function(scope, element) {
        var $animation_elements = $('.an-css');
        var $window = $(window);
        // console.log($animation_elements);

        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll')

        function check_if_in_view() {
        	var window_height = $window.height();
        	var window_top_position = $window.scrollTop();
        	var window_bottom_position = (window_height + window_top_position);

        	$.each($animation_elements, function() {
        		var $element = $(this);
    			var element_height = $element.outerHeight();
    			var element_top_position = $element.offset().top;
    			var element_bottom_position = (element_top_position + element_height);

        		if((element_bottom_position >= window_top_position) &&
        				(element_top_position <= window_bottom_position)) {
        			$element.addClass('animated fadeInUp');
        		}
        	})
        }

        $(function(){
            $(".element").typed({
            strings: [
                        "<h1>Ever want to throw something at your friends?</h1>"
                    ],
                contentType: 'html',
                cursorChar: ''
            });
        });


        $("#contact").click(function() {
            $('html, body').animate({
                scrollTop: $("#contact-marker").offset().top
            }, 'fast');
        });

        $("#games").click(function() {
            $('html, body').animate({
                scrollTop: $("#games-marker").offset().top
            }, 'fast');
        });

        $("#team").click(function() {
            $('html, body').animate({
                scrollTop: $("#team-marker").offset().top
            }, 'fast');
        });

        $("#about").click(function() {
            $('html, body').animate({
                scrollTop: $("#about-marker").offset().top
            }, 'fast');
        });
       }
    }
}).directive("pictureBlock", function() {
    return {
        link: function(scope, element) {
            console.log(element)
        },
        templateUrl: "views/directives/pictureBlock.html"
    }
}).directive("carouselBlock", function() {
    return {
        templateUrl: 'views/directives/carouselBlock.html'
    }
}).directive("iconWords", function() {
    return {
        templateUrl: "views/directives/iconWords.html"
    }
})