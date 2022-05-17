// get a reference to the textbox where the bill type is to be entered
const billTypeText = document.querySelector(".billTypeText");
const callTotalOne = document.querySelector(".callTotalOne");
const smsTotalOne = document.querySelector(".smsTotalOne");
const totalOneElement = document.querySelector(".totalOne");
//get a reference to the add button
const addToBillBtn = document.querySelector(".addToBillBtn");
//create a variable that will keep track of the total bill
let callsTotal = 0;
let smsTotal = 0;
let totalCost= 0;
callTotalOne.innerHTML=callsTotal.toFixed(2);
smsTotalOne.innerHTML= smsTotal.toFixed(2);
totalOneElement.innerHTML= totalCost.toFixed(2);
//add an event listener for when the add button is presse
    function addToBillBtnClicked(){
       // get the value entered in the billType textfield
       var billTypeEntered = billTypeText.value.trim().toLowerCase();
       
       // update the correct total
       if (billTypeEntered === "call"){
           callsTotal += 2.75
           totalCost= callsTotal + smsTotal;
       }
       else if (billTypeEntered === "sms"){
           smsTotal += 0.75;
           totalCost= callsTotal + smsTotal;
       }
       
       //update the totals that is displayed on the screen.
  
        callTotalOne.innerHTML=callsTotal.toFixed(2);
        smsTotalOne.innerHTML= smsTotal.toFixed(2);
        totalOneElement.innerHTML= totalCost.toFixed(2);
        // totalCost = callsTotal + smsTotal;
   
       totalOneElement.classList.remove("warning")
       totalOneElement.classList.remove("danger")
   
         //color the total based on the criteria
        if (totalCost >= 50){
        // adding the danger class will make the text red
        totalOneElement.classList.add("danger");
    }
         else if (totalCost >= 30){
        totalOneElement.classList.add("warning");
    }
}


   
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

//link the function to a click event on the calculate button
addToBillBtn.addEventListener('click', addToBillBtnClicked);