'use strict';

function createUpdatedCollection(collectionA, objectB) {
  collectionA.forEach(element => {
    if(objectB.value.indexOf(element.key) != -1){
        element.count -= 1;
    }
  });

  return collectionA;
}
