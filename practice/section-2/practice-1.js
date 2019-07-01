'use strict';

function countSameElements(collection) {
  var map = new Map();
  var result = [];

  collection.forEach(element => {
    if (map.has(element)) {
      map.get(element).count += 1;
    } else {
      map.set(element, {
        key: element,
        count: 1
      });
    }
  });

  map.forEach(function (value, key, map) {
    result.push(value);
  });
  return result;
}
