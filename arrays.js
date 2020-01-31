"use strict";


// 1. printIndices
function printIndices(items) {
  // Replace this with your code
  for (const i in items){
    console.log(items[i], i);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code
  const result = [];
  for (let i = 0; i < items.length; i += 2) {
    result.push(items[i]);
  }
  return result;
}


// 2.5 everyOtherItem
function everyOtherItem2_5(items) {
  // Replace this with your code
  const result = [];
  for (const i in items) {
    if (i % 2 == 0) {
    result.push(items[i]);
    }
  }
  return result;
}


// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
  const sortedItems = items.sort()
  const sortedNItems = sortedItems.slice(0, n)
  
  return sortedNItems.reverse()

}

