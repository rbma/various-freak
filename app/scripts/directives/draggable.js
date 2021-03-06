'use strict';

/**
 * @ngdoc directive
 * @name variousAssetsApp.directive:draggable
 * @description
 * # draggable
 */
angular.module('variousAssetsApp').directive('draggable', function () {

	

	var link = function($scope, element, attrs){

		var cdTarget = element.find('.cd-spin');

		var cds = $('.cd-spin');

		element.draggable({
			addClasses: false,
			revert: true,
			revertDuration: 1000,
			helper: function(event, ui){
				return cdTarget;
			},
			stop: function(event, ui){
				//cancels disappearing cd bug
				$.ui.ddmanager.current.cancelHelperRemoval = true;
			}
		});
	}

	return {
		restrict: 'A',
		link: link
	};
});
