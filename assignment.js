function kilometerToMeter(kilometer){
    // 1 kilometer=1000 meter  
    var meter=kilometer*1000;
    return meter;
 }
    var userMeter=kilometerToMeter(40.5);
    console.log(userMeter);


 function budgetCalculator(watch,cellphone,laptop){
    // adding price with item
    var result = watch*50+cellphone*100+laptop*500;
    return result;
   
  }

    var sum =budgetCalculator(5,2,4);
    console.log(sum);



function hotelCost(day) {
    var cost = 0;
    // for first 10 days
   if (day <= 10){
       cost = day * 100;
    // for 2nd 20 days   
   } else if (day <= 20) {   
    var firstpart = 10 * 100;
    var remainingday = day - 10;
    var secondpart = remainingday * 80;
    cost = firstpart + secondpart;
   // 20 plus days up... 
} else{

    var firstpart = 10 * 100;
    var secondpart = 10 * 80;
    var remainingday = day - 20;
    var thirdpart = remainingday * 50;
    cost = firstpart + secondpart + thirdpart;
}
return cost;
}
  var count = hotelCost(25);
  console.log(count);



function megaFriend(text) {
    
    var maxLength = 0;
    var result = '';

    for (var i = 0; i < text.length; i++) {
        if (text[i].length > maxLength) {
            maxLength = text[i].length;
            result = text[i];
        }
    }

    return result;
}

var word=megaFriend(["Arik","Shumon","Zakrin Majumdar"]);
console.log(word);

