(function () {
  'use strict';

  angular.module('nx.widget', []);

})();

(function () {
  'use strict';

  angular.module('nx.widget')
    .directive('nxDownAppTips', [function ($scope) {
      return {
        restrict: 'E',
        scope: {
          cssClass: '@',
          logoSrc: '@',
          locationUrl: '@',
          title: '@',
          subTitle: '@',
          btnText: '@',
          visible: '='
        },
        template: '<div class="nx-widget-down-app-tips {{cssClass}}" ng-if="visible">' +
        '<div class="logo"><img ng-src="{{logoSrc}}" alt=""></div>' +
        '<div class="titles"><h3 class="title">{{title}}</h3><h4 class="sub-title">{{subTitle}}</h4></div>' +
        '<div class="right"><button class="btn">{{btnText}}</button>' +
        '<span class="close" ng-click="close()">&times;</span></div>' +
        '</div>',
        link: linkFn
      };


      function linkFn(scope, element, attrs) {
        scope.visible = !(_storage() == 'true');
        scope.close = function () {
          scope.visible = false;
          _storage(true);
        };
      }


      function _storage(inValue) {
        if (inValue) {
          localStorage.setItem('app-tips', true);
        } else {
          return localStorage.getItem('app-tips');
        }
      }

    }]);


})();
