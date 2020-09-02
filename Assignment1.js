// QUESTION 1 : TO FIND PARTICULAR CHARACTER OF A STRING 

let word = " hello everyone ";
let index=console.log(word.charAt(5)); 


//QUESTION 3 : TO SEARCH FOR A ELEMENT IN A ARRAY

 let house = ["sofa","television","refrigerator","air conditioner","fan","light"]
 console.log(house[1]);


//  QUESTION 5 : TO PRINT ARRAY IN REVERSE ORDER

let house = ["sofa","television","refrigerator","air conditioner","fan","light"]
console.log(house.reverse());


// QUESTION 2 : TO CONVERT MINUSTES TO SECONDS

let minutes = 5;
let seconds = minutes * 60;
console.log(seconds);


// QUESTION 4 : DISPLAY ONLY ELEMENTS CONTAINING "A" IN THEM FROM A ARRAY

let house = ["sofa","television","refrigerator","air conditioner","fan","light"];
var s;
for(let i=0;i<house.length;i++)
{
    s=house[i].search("a");
    if(s>0)
    {
        console.log(house[i])
    }
}
