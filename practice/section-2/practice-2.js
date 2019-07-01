'use strict';

function countSameElements(collection) {
  var map = new Map();
  var result = [];

  collection.forEach(element => {
    var { key, number } = mapKeyAndCount(element);
    if (map.has(key)) {
      map.get(key).count += number;
    } else {
      map.set(key, { key: key, count: number });
    }
  });

  map.forEach(function (value, key, map) {
    result.push(value);
  });
  return result;
}

function mapKeyAndCount(element) {
  var number = 1;
  var key = element;
  if (element.length != 1) {
    key = element.substring(0, 1);
    number = parseInt(element.substring(2));
  }
  return { key, number };
}
