//1
function reverse(str) {
  var arr = str.split("");
  return arr.reverse().join("");
}
//22
function polidrom(str) {
  var arr = str.split("");
  var str1 = arr.reverse().join();
  if(str === str1){
    return "poliidrom";
  }else{
    return "is not polidrom";
  }
}
//3 do not end..
function generword(str) {
    var arr = str.split("");
    var generwords = [];

    for (var i = 0; i < arr.length; i++) {
      generwords[i] = '';
      for (var j = 0; j <= i; j++) {
        generwords[i] += arr[j];
      }
    }
    console.log(generwords);
}


//4
function sortwordbyleeter(str) {
    var arr = str.split("");
    return arr.sort().join("");
}
//5
function upcase(str) {
    var pattern = "\b[a-zA-Z]";
    var matches = str.match(/\b(\w)/g);
    for (var i = 0; i < matches.length; i++) {
      str = str.replace(matches[i], matches[i].toUpperCase());
    }
    return str;
}
//6
function logestworld(str) {
    var str1 = str.split(" ");
    var temp = str1[0];
    for (var i = 0; i < str1.length-1; i++) {
      if(temp.length < str1[i+1].length){
        temp = str1[i+1];
      }
    }
    return temp;
}
//7
function vowel(str) {
  var result = str.match(/[aeiou]/ig);
  return result.length;
        /* work too
        var arr = str.split("");
        var count = 0;
        var vow = ['A', 'E', 'I', 'O', 'U']
        for (var i = 0; i < arr.length; i++) {
          for (var j = 0; j < vow.length; j++) {
                if (arr[i].toUpperCase() === vow[j]) {
                  count++;
                }
          }
        }
        return count;*/
}
//8
function primenumber(num) {
  if(num === 1 || num === 2){
    return "prime";
  }
    for (var i = 2; i < Math.ceil(Math.sqrt(num)); i++) {
      if(num % i === 0){
        return "not Prime";
      }
    }
    return "prime";
}
//9
function type(arg) {
    return typeof arg;
}
//10
function matrix(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr[i] = [];
    for (var j = 0; j < num; j++) {
      if(j === i){
      arr[i][j] = 1;
    }else{
      arr[i][j] = 0;
    }
    }
  }
  return arr;
}
//11
function minmax(arr) {
    arr.sort(function (a,b) {
      return a-b;
    })
    return arr[1] +" "+arr[arr.length-2];
}
//12
function perfectnumber(num) {
  var i = 2;
  var k = num;
  var arr = [];
  var sum = 0;
  while (true) {
    if(num % i === 0){
      num = num / i;
      sum += num;
    }else{
      i++;
    }
    if(i === num){
      break;
    }
  }
  var res = (sum+1+k+num) / 2;
  if(Math.trunc(res) === k){
    return "prfect";
  }else{
    return "non";
  }
}
//13


//14
function amountTocoins(price, arrcoins) {
  var arr = arrcoins.sort(function (a,b) {
      return a+b;
  })
  var i = 0;
  var k = 0;
  var arr2 = [];
  var sum = 0;
  while (true) {
    debugger;
      sum += arr[i];
    if(sum < price){
      arr2[k] = arr[i];
      k++;
    }else if (sum > price){
      sum -= arr[i];
      i++;
    }else if (sum === price) {
      arr2[k] = arr[i];
        return arr2;
    }
  }
}
//15
function mathpow(b,n) {
  return Math.pow(b,n);
}
//16
function unique(str) {
  var arr = str.split("");
  var str1 = "";
  for (var i = 0; i < arr.length; i++) {
    if(str1.indexOf(arr[i]) === -1){
      str1 += arr[i];
    }
  }
  return str1;
}
//17
function lettercount(str) {
     var str = str.replace(/\s/g,'')
      var arr = str.split("");
      var re;
      var result = {};
    for (var i = 0; i < arr.length; i++) {
       re = new RegExp(arr[i],"gi");
       result[arr[i]] = str.match(re).length;
    }
    return result;
}
//18 not to end...
function benarsearch(arr,search) {
//  debugger;
  var low = 0;
  var high = arr.length-1;
  var mid =  Math.ceil((low+high)/2);
    for (var i = 0; i < arr.length; i++) {
      if(arr[mid] < search){
        low = mid+1;
        mid =  Math.ceil((low+high)/2);
      }else if(arr[mid] > search){
        low = mid-1;
        mid =  Math.ceil((low+high)/2);
      }
      else if(arr[high] > search){
        high = mid -1;
      }
      if(arr[mid] === search){
        return find;
      }
      if(arr[mid] === search && arr[low] === search && arr[high] === search){
        return "find";
      }
    }
}
//19
function bigistarray(val,arr) {
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] < val){
        arr.splice(i, 1);
          i--;
        }
    }
    return arr;
}
//20
function randomcharakter(n) {
  var arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var str = "";
    for (var i = 0; i < n; i++) {
       str += arr[Math.floor(Math.random()*arr.length)];
    }
    return str;
}
//21 do not end..










//22
function findwordchar(str,char) {
   var re = new RegExp(char,"gi");
   var res = str.match(re).length;
   return res;
}
//23
function finfirstnotreapetchar(str) {
      var arr = str.split("");
      var re;
      var res;
      for (var i = 0; i < arr.length; i++) {
         re = new RegExp(arr[i],"gi");
         res = str.match(re).length;
         if(res === 1){
           return arr[i];
         }
      }
      return "not have a singel word";
}
//24
function bublesort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if(arr[j] < arr[j+1]){
              temp = arr[j];
              arr[j] = arr[j+1];
              arr[j+1] = temp;
            }
        }
    }
    return arr;
}
//25
function Longest_Country_Name(arr) {
    var temp = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if(temp.length < arr[i].length){
        temp = arr[i];
      }
    }
    return temp;
}
//26 not to end...
function lobestsubsrring(str) {
  var arr = str.split("");
var res ="";
  var i =0;
  var j =0;
  while (true) {
    if(i != j && str[j] !== arr[i]){
      res += arr[i];
      j++;
    }else{
      i++;
    }
    i++
    if(i === arr.length){
      break;
    }
  }
    return res;
}
// 27 not to end..
function polidromeverywhere(str) {
  var polidrom = '/^(r)\w+\1$/gm';
  if(str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase() === str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().split("").reverse().join("")){
    console.log(str);
   return true;
 } else {
   return false;
 }
}
//28
function mainfun(callfun) {
  callfun();
}
function callfun() {
  alert("heelo")
}
//mainfun(callfun);
//29
function funname() {
  console.log(arguments);
  return arguments.callee.name;
}
// omework for the next class


function getname(obj) {
  var regex = /[A-Z]\w+/g;
  var str = obj.match(regex);
  return str.join("");
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max-min) + min);
}
function generateGuid() {
  return Math.random().toString(36).substring(2, 15) +
         Math.random().toString(36).substring(2, 15);
}
function collorrandom() {
  return '#'+ Math.random().toString(16).substring(2, 8);
}
function isEqual(obj1,obj2) {
  var pr = typeof obj1;
  var pr2 = typeof obj2;
  if(pr === 'number' || pr === 'String' || pr === 'Boolean' || pr === 'undefined' || pr === 'null'){
    if(pr === pr2){
      return true;
    }else {
      return false;
    }
  }
    for (var p in obj1) {
          if (obj1.hasOwnProperty(p) === obj2.hasOwnProperty(p)) {
                return true;
          }else{
            return false;
          }
      }
  }
function classNameOf(obj) {
  if(obj === null){
    return "Null";
  }
  return getnameobj(obj['constructor']);
}
