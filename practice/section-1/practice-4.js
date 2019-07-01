'use strict';

function collectSameElements(collectionA, objectB) {
  var result = [];
  collectionA.forEach(element => {
    if(objectB.value.indexOf(element.key) != -1){
      result.push(element.key)
    }
  });
  return result;
}
