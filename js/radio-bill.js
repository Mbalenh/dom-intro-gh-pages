// get a reference to the sms or call radio buttons
const billItemTypeRadio = document.querySelector(".billItemTypeRadio");
const smsTotalTwo= document.querySelector(".smsTotalTwo");
const callTotalTwo = document.querySelector(".callTotalTwo");
const totalTwo = document.querySelector(".totalTwo");
//get a reference to the add button
const radioBillAddBtn = document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill
let callsbillItem = 0;
let smsbillItem = 0;
let totalbillItem= 0;
callTotalTwo.innerHTML=callsbillItem.toFixed(2);
smsTotalTwo.innerHTML= smsbillItem .toFixed(2);
totalTwo.innerHTML=  totalbillItem.toFixed(2);
//add an event listener for when the add button is pressed
function radioBillAddBtnClicked(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value;
        // billItemType will be 'call' or 'sms'
        if ( billItemType === "call"){
            callsbillItem += 2.75
            totalbillItem= callsbillItem + smsbillItem;
        }
        else if (billItemType === "sms"){
            smsbillItem += 0.75;
            totalbillItem= callsbillItem + smsbillItem;
        }
    }
   
          // totalCost = callsTotal + smsTotal;
          callTotalTwo.innerHTML=callsbillItem.toFixed(2);
          smsTotalTwo.innerHTML= smsbillItem .toFixed(2);
          totalTwo.innerHTML=  totalbillItem.toFixed(2);
          totalTwo.classList.remove("warning")
          totalTwo.classList.remove("danger")
      
            //color the total based on the criteria
           if (totalbillItem >= 50){
           // adding the danger class will make the text red
           totalTwo.classList.add("danger");
       }
            else if (totalbillItem >= 30){
                totalTwo.classList.add("warning");
       }
}
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
radioBillAddBtn.addEventListener('click', radioBillAddBtnClicked);