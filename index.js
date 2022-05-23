function isArray(col) {
  let newArr;
  if (Array.isArray(col)) {
    newArr = col;
  } else {
    newArr = Object.values(col);
  }
  return newArr;
}

function myEach(collection, callback) {
  let newArr = isArray(collection);
  for (let i = 0; i < newArr.length; i++) {
    callback(newArr[i]);
  }
  return collection;
}

function myMap(collection, cb) {
  let newArr = []
  const collectionArr = Object.values(collection)
for (const value of collectionArr) {
  
const modifiedValue = cb(value)
newArr.push(modifiedValue)
}
return newArr
}

function myReduce(col, cb, acc) {
  let newArr = isArray(col);
  for (let i = 0; i < newArr.length; i++) {
    if (acc === undefined) {
      acc = newArr[0];
      i = 1;
    }
    acc = cb(acc, newArr[i], col);
  }
  return acc;
}

function myFind(col, predicate) {
  let newArr = isArray(col);
  let answer;
  for (let i = 0; i < newArr.length; i++) {
    if (predicate(col[i])) {
      answer = col[i];
      return answer;
    }
  }
  return answer;
}

function myFilter(col, pred) {
  let newArr = isArray(col);
  let finArr = [];
  for (let i = 0; i < newArr.length; i++) {
    if (pred(col[i])) {
      finArr.push(col[i]);
    }
  }
  return finArr;
}

function mySize(col) {
  let newArr = isArray(col);
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