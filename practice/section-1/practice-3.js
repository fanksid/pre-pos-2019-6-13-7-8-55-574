'use strict';

function collectSameElements(collectionA, objectB) {
  var result = [];
  collectionA.forEach(element => {
    if(objectB.value.indexOf(element) != -1){
      result.push(element)
    }
  });
  return result;
}
