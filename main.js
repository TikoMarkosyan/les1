//1
function max(num1,num2) {
  if(num1 > num2){
    console.log("max is "+num1);
  }else if(num1 < num2){
      console.log("max is "+num2);
  }else{
    console.log("too number are equals");
  }
}
max(95,95);
//2
function plussorminus(num1,num2,num3) {
    if(num1 > 0 && num2 > 0 && num3 > 0){
      console.log("+");
    }else{
      console.log("-");
      }
    }
}
//3
function sort(num1,num2,num3) {
  if(num1 > num2){
      if(num1 > num3){
          if(num2 > num3){
            console.log(num1 +" "+num2+" "+num3);
          }else{
            console.log(num1 +" "+num3+" "+num2);
          }
      }else{
          console.log(num3 +" "+num1+" "+num2);
      }
  }else{
        if(num2 > num3){
            if(num1 > num3){
              console.log(num2 +" "+num1+" "+num3);
            }else{
                console.log(num2 +" "+num3+" "+num1);
            }
        }else{
          console.log(num3 +" "+num2+" "+num1);
        }
  }
}
sort(3,-7,0);
//4
function findbigist(arr) {
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if(max < arr[i]){
      max = arr[i];
    }
  }
  console.log(max);
}
findbigist([-5, -2, -6, 0, -1]);

//5
function evenodd() {
  for(let i=0; i <= 15; i++){
    if(i % 2 == 0){
      console.log(i +' even');
    }else{
      console.log(i +' odd');
    }
  }
}
evenodd();
//6
function classfind() {
  var sum =0;
  for(let i =0; i<arguments.length; i++){
    sum += arguments[i];
  }
  var res = sum / arguments.length;
  var arr = [60,70,80,90,100];
  var arrl = ['F','D','C','B','A'];
  for(let i = 0; i<arr.length; i++){
    if(res <= arr[i]){
        console.log(arrl[i]);
        break;
    }
  }
}
classfind(80,77,88,95,68);
//7
function FizzBuzz() {
  for (var i = 1; i < 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          console.log(i+ ' FizzBuzz');
        continue;
      }else if(i % 3 === 0){
        console.log(i + ' Fizz');
      }else if(i % 5 === 0){
        console.log(i +' Buzz');
      }
  }
}
FizzBuzz();
//9
function Armstrong(num) {
  var sum = 0;
  num = num.toString();
  var digits = num.split("");
  for (var i = 0; i < digits.length; i++) {
  sum += Math.pow(digits[i],digits.length);
  }
  if(sum === +num){
  console.log("Amstrong");
  }else{
    console.log("not amstrong");
  }
}
Armstrong(371);
//10
function drawtrigale() {
  var star = '';
    for (var i = 1; i < 10; i++) {
        for (var j = 0; j < i; j++) {
            star += '*';
        }
        console.log(star);
        star = '';
    }
}
drawtrigale();
//11
function gcd(num1, num2) {
  if(num1 === num2){
    console.log("bigist divistion " + num1);
    return;
  }
  var max = Math.max(num1,num2);
  var min = Math.min(num1,num2);
  var res;
  while (true) {
    var res = max - min;
    if(res === min){
      console.log("bigist divistion " + res);
      break;
    }
    max = res;
    if(max < min){
      let temp = min;
      min = max;
      max = temp;
    }
  }
}
gcd(15,5);
//12
function multiples() {
  var sum = 0;
        for (var i = 0; i < 1000; i++)
        {
            if (i % 3 === 0 || i % 5 === 0)
            {
               sum += i;
            }
        }
  console.log(sum);
}
multiples();
