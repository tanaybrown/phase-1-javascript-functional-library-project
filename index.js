function isArray(collection) {
    let newArr;
    if (Array.isArray(collection)) {
        newArr = collection;
    } else {
        newArr = Object.values(collection);
    } 
return newArr;
}

function myEach(collection, callback) {
    let newArr = isArray(collection);
   
    for(let i = 0; i < newArr.length; i++){
        callback(newArr[i]);
}

return collection;
}

function myMap(collection, callback) {
    let newArr = isArray(collection);
    const answer = {}
    for (let i = 0; i < newArr.length; i++) {
        let final = callback(newArr[i]);
       answer.push(final);
}
return answer;
}

function myReduce(collection, callback, acc) {
    let newArr = isArray(colleciton)
    for (let i = 0; i < newArr.length; i++) {
        if (acc === undefined) {
            acc = newArr[0];
            i = 1;
        }
        return acc;
    }
}

function myFind(collection, predicate) {
    let newArr = isArray(collection);
    let answer;
    for (let i = 0; i < newArr.length; i++) {
        if (predicate(collection[i])) {
            answer = collection[i];
            return answer;
        }
    }
    return answer;
}
function myFilter(collection, predicate) {
    let newArr = isArray(collection);
    let finArr = [];
    for (let i = 0; i < newArr.length; i++) {
      if (predicate(collection[i])) {
        finArr.push(collection[i]);
      }
    }
    return finArr;
}
function mySize(collection) {
    let newArr = isArray(collection);
    return newArr.length;
  }
  
  function myFirst(arr, n) {
    if (n === undefined) {
      return arr[0];
    } else if (arr.length > 1) {
      return arr.splice(0, n);
    }
  }

  function myLast(arr, n) {
    let copy = arr.slice();
    if (n === undefined) {
      return copy.pop();
    } else {
      return copy.slice(-n);
    }
  }

  function myKeys(obj) {
    let answer = Object.keys(obj);
    return answer;
  }
  
  function myValues(obj) {
    let answer = Object.values(obj);
    return answer;
  }