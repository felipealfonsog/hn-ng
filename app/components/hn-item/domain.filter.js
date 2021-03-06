/**
 * @example
 *   var domain = 'http://www.locomotivecms.com/articles/we-tried-to-solve-the-open-source-revenue-equation'
 *   console.log($filter('domain')(domain)); // locomotivecms.com
 * @return {string}
 */
export default function(m) {
  'use strict';

  m.filter('domain', function() {
    return function(input) {
      if (!input) {
        return '';
      }
      var domain = input.split('/')[2];
      return domain ? domain.replace('www.', '') : domain;
    };
  });
}
