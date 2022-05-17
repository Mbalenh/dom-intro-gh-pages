// get a reference to the sms or call radio buttons
const billItemTypeWithSettingsElem= document.querySelector(".billItemTypeWithSettings");
const callTotalSettings = document.querySelector(".callTotalSettings");
const smsTotalSettings= document.querySelector(".smsTotalSettings");
const totalSettings= document.querySelector(".totalSettings");
// get refences to all the settings fields
const callCostSetting = document.querySelector(".callCostSetting");
const smsCostSetting = document.querySelector(".smsCostSetting");
const warningLevelSetting = document.querySelector(".warningLevelSetting");
const criticalLevelSetting = document.querySelector(".criticalLevelSetting");
//get a reference to the add button
const addbtnSettings= document.querySelector(".addbtnSettings");
//get a reference to the 'Update settings' button
const Updatesettings = document.querySelector(".Updatesettings");
// create a variables that will keep track of all the settings
// callCostSetting.innerHTML=callTotalSettings.toFixed(2);
// smsCostSetting.innerHTML= smsTotalSettings.toFixed(2);


// create a variables that will keep track of all three totals.
let totalcallsSettings=0;
let totalsmsSettings=0;
let totalCostSettings=0;

//add an event listener for when the 'Update settings' button is pressed
function Updatesetting(){
        
    let  warningLevel = warningLevelSetting.value;
    let criticalLevel = criticalLevelSetting.value;
        addColorBehavior()
}
function addbtnSetting(){
    var checkedaddbtnSettings = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    let  warningLevel = warningLevelSetting.value;
    let criticalLevel = criticalLevelSetting.value;
    if (checkedaddbtnSettings){
        var billItemTypeWithSettings  = checkedaddbtnSettings.value;

        // console.log(callCostSetting.value);
        
        if(Number(totalCostSettings) <= Number(criticalLevel)){
           
            // billItemTypeWithSettings will be 'call' or 'sms'
            if(billItemTypeWithSettings === "call"){
                totalcallsSettings += Number(callCostSetting.value)
            }
            else if(billItemTypeWithSettings === "sms"){
                totalsmsSettings += Number(smsCostSetting.value)
    
    }  
        }else{
    totalcallsSettings,
    totalsmsSettings
        }
    
      
    }
    callTotalSettings.innerHTML=Number(totalcallsSettings).toFixed(2);
    smsTotalSettings.innerHTML= Number(totalsmsSettings).toFixed(2);
    // * add the appropriate value to the overall total
    totalCostSettings = Number(totalcallsSettings) + Number(totalsmsSettings);
    // * display the latest total on the screen.
    totalSettings.innerHTML = Number(totalCostSettings).toFixed(2);
   
    addColorBehavior()
    
}

//add an event listener for when the add button is pressed  
function addColorBehavior(){
    let  warningLevel = warningLevelSetting.value;
    let criticalLevel = criticalLevelSetting.value;
    // * check the value thresholds and display the total value in the right color.
    totalSettings.classList.remove("danger");
    totalSettings.classList.remove("warning");
    if(Number(totalCostSettings) >=Number(criticalLevel)){
        totalSettings.classList.add("danger");

    }
     else if(Number(totalCostSettings) >= Number(warningLevel)){
        totalSettings.classList.add("warning");

    }
    if(Number(totalCostSettings) >= Number(criticalLevel)){
        addbtnSettings.disable = true

    }
    else{
        addbtnSettings.disable = false
    }

}
// //in the event listener get the value from the billItemTypeRadio radio buttons
// // * add the appropriate value to the call / sms total
// // * add the appropriate value to the overall total
// // * add nothing for invalid values that is not 'call' or 'sms'.
// // * display the latest total on the screen.
// // * check the value thresholds and display the total value in the right color.
addbtnSettings.addEventListener('click', addbtnSetting);
Updatesettings.addEventListener('click', Updatesetting);
 