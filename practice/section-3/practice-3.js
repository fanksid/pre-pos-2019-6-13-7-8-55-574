'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var result = countSameElements(collectionA);
  result.forEach(element => {
    if(objectB.value.indexOf(element.key) != -1){
        element.count -= parseInt(element.count / 3);
    }
  });

  return result;
}

function countSameElements(collection) {
  var map = new Map();
  var result = [];

  collection.forEach(element => {
    if (map.has(element)) {
      map.get(element).count += 1;
    } else {
      map.set(element, { key: element, count: 1 });
    }
  });

  map.forEach(function (value, key, map) {
    result.push(value);
  });
  return result;
}