'use strict';

function collectSameElements(collectionA, collectionB) {
  var result = [];
  collectionA.forEach(element => {
    if(collectionB.indexOf(element) != -1){
      result.push(element)
    }
  });
  return result;
}
