'use strict';

/**
 * @ngdoc directive
 * @name variousAssetsApp.directive:bigHand
 * @description
 * # bigHand
 */
angular.module('variousAssetsApp').directive('bigHand', ['mousePosition', function (mousePosition) {
	
	var link = function($scope, element, attrs){

		var frame = $('#main-frame');

		var pos = mousePosition.getPos();

		var xPos = pos.x;
		var yPos = pos.y;

		//set initial css based on prev position
		element.css({
			left: xPos + 10,
			top: yPos + 10
		});

		//now, listen for changes
		frame.on('mousemove', function(e){
			xPos = e.pageX;
			yPos = e.pageY;
			element.css({
				left: xPos + 10,
				top: yPos + 10
			});
		})
		
	}



	return {
		restrict: 'A',
		link: link
	};
}]);
