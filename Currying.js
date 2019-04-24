/* function curry(func) {
    return function (a) {
        return function (b) {
            return func(a, b);
        }
    }
}
function sum(a, b) {
    return a + b;
}

let carriedSum = curry(sum);
console.log(carriedSum(1)(5));
 */
var str1 = 'abcx';
var str2 = 'defy';


function mergeString(a, b) {
    var x = a.split("");
    var y = b.split("");
    console.log(`x ${x} y ${y}`);
    var mergedString= '';
    for (let i = 0; i < x.length || i < y.length; i++) {
        if (i < x.length) {
            mergedString += x[i];
        }
        if (i < y.length) {
            mergedString += y[i];
        }
    }
    console.log(mergedString);
}

mergeString(str1,str2);

/* function merge (str1, str2) {

    var a = str1.split("");
  
    var b = str2.split("");
  
    var mergedString = '';
  
  
    for(var i = 0; i < a.length || i < b.length; i++) {  //loop condition checks if i is less than a.length or b.length
     if(i < a.length)  //if i is less than a.length add a[i] to string first.
       mergedString +=  a[i];
     if(i < b.length)  //if i is less than b.length add b[i] to string.
       mergedString +=  b[i];
    }
  return mergedString;
  
  }
  console.log(merge('abc','def')); */