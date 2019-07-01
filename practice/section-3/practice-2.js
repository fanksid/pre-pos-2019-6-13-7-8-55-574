'use strict';

function createUpdatedCollection(collectionA, objectB) {
  collectionA.forEach(element => {
    if(objectB.value.indexOf(element.key) != -1){
        element.count -= parseInt(element.count / 3);
    }
  });

  return collectionA;
}
