// function myclick(){
    // myform.display.value="9";
// }
// function greet(name){
//     return"Eidmubarak" +  name;
// }
// function showAlert(){
// alert('hello from external js');   
// // }

// function chooseEasy(){
//     console.log('hello this is level easy');
// }
// function chooseMedium(){
//     console.log('1');
//     console.log('2');
//     console.log('3');
//     console.log('4');
//     console.log('5'); 
//     console.log('6');
//     console.log('7');
// }
// function chooseHard(){
//     alert('hello this is level hard');
// } 

// function showPrice(){
// let costOfApple=15;

// console.log('cost of 1 apple is:')
// console.log(12);
// console.log('cost of 2 apple is:')
// console.log(12 * 2);
// console.log('cost of 3 apple is:')
// console.log(12 * 3);
// console.log('cost of 4 apple is:')
// console.log(12 * 4);
// console.log('cost of 5 apple is:')
// console.log(12 * 5);
// // }
// function login(){
//     let inputElement=document.querySelector('input');
//     console.log(inputElement);
// // }
// function double(paisa){

//     let answer=paisa*2;
       
//     return answer;
// }
// console.log(double(4));
function showAlert(){
   alert ("choose any number from 1 to 10");
}
let input=document.querySelector("input").value;
let randomNumber=1
Math.floor(Math.random* 11);
if (input==randomNumber){
    alert('Congrats');
}
else{
    if(input>randomNumber){
        alert('TOO BIG');
    }
else if(input <randomNumber){
    alert('TOO SMALL');
}

}
