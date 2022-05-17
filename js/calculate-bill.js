//get a reference to the calculate button
const calculateBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
const billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
const billStringElement = document.querySelector(".billString");
//create the function that will be called when the calculate button is pressed
function calculateBtnClicked(){
    // console.log("test");
//  * this function should read the string value entered - split it on a comma.
var billString = billStringElement.value;
var billItems = billString.split(",");
var billTotal = 0;
//  * loop over all the entries in the the resulting list
for (var i=0;i<billItems.length;i++){
    var billItem = billItems[i].trim().toLowerCase();
    if (billItem == "call"){
        billTotal += 2.75;
    }
    else if (billItem  == "sms"){
        billTotal += 0.75;
    }
   
}
console.log(billTotal)
//  * check if it is a call or an sms and add the right amount to the overall total
var roundedBillTotal = billTotal.toFixed(2);
//  * once done looping over all the entries - display the total onto the screen in the billTotal element
// add or remove classes from the element classlist to change screen behaviour
    billTotalElement.classList.remove("warning")
    billTotalElement.classList.remove("danger")
    if (billTotal >= 30){
        billTotalElement.classList.add("danger") 
    }
    else if (billTotal >=20.00 && billTotal < 30.00){
        billTotalElement.classList.add("warning") 
    }
    
billTotalElement.innerHTML = roundedBillTotal;
}
//link the function to a click event on the calculate button
calculateBtn.addEventListener('click', calculateBtnClicked);
   