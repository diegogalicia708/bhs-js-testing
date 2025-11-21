/*
 * This file is where you should write your code. Remember to click
 * Run after you make changes to re-run the tests with your new code.
 */
//python -m http.server


function sleep_in(weekday,vacation){
    return !weekday || vacation 
}

function string_times(x,num){
    
    let answer = "";
    for(let i = 0; i < num; i++){
       answer = answer + x;
    }   
    return answer;

}
function monkey_trouble(a_smile,b_smile){
   return a_smile == b_smile
}

function front_times(y, number){
    let result = y.substring(0, 3);

    let end = "";
    for(let i = 0; i < number; i++){
        end = end + result; 
    }
    return end;
}

function string_bits(z){
    

   let result = "";
  for (let i = 0; i < z.length; i = i+2) {
     result= result + z.substring(i, i+1); 
 }
  return result;
}

function caughtSpeeding (speed, birthday){
let s = 60 
let p = 80 
if(birthday){
     s = 65 
     p = 85
}
if( speed <= s){
    return 0 
}
if(speed > s && speed <= p){
    return 1 
}
if( speed > p){
    return 2
}
} 
function fizz_buzz(num) {
      if (num%3 == 0 && num%5 == 0) {
        return "FizzBuzz"
    }
    if (num%3 == 0) {
        return "Fizz"
    }
     if (num%5 == 0) {
        return "Buzz"
    }
   
    return num + "!"
}
function specialEleven(i){
    if(i%11==0 || i%11==1){
        return true
    }else{
        return false 
    }
}

function withoutDoubles(x, y, diego) {
    if (x == 6 && y == 6 && diego == true) {
        return 7
    }
   if (x == y && diego == true ) {
    return x + y + 1
   } else {
    return x + y
   }

}

function left2(lsg){
    let shaw = lsg.substring(0,2);
    let grenham =lsg.substring(2,lsg.length);
    return grenham + shaw 
}


function endOther(x,y){
    let strx = x.toUpperCase
    let stry= y.toUpperCase
    if(x.length > y.length && strx.substring(x.length-y.length) == stry){
        return true
    }
}

