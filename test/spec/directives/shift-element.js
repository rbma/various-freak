'use strict';

describe('Directive: shiftElement', function () {

  // load the directive's module
  beforeEach(module('variousAssetsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<shift-element></shift-element>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the shiftElement directive');
  }));
});
