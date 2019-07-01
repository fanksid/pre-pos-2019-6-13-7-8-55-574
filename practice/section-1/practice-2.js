'use strict';

function collectSameElements(collectionA, collectionB) {
  var result = [];
  collectionA.forEach(element => {
    if(collectionBContainsElement(collectionB, element)){
      result.push(element)
    }
  });
  return result;
}
function collectionBContainsElement(collectionB, element) {
  var result = false;
  collectionB.forEach(array => {
    if(array.indexOf(element) != -1){
      result = true;
      return;
    }
  });
  
  return result;
}

