let totalbalance = 0;
let totalexpense = 0;

let balance = document.getElementById("balance")
let expense = document.getElementById("expense")
let addAmount = document.getElementById("addAmount")
let addMessage = document.getElementById("addMessage")
let addExpen = document.getElementById("addExpen")
let expenMessage = document.getElementById("expenMessage")
let addbutton = document.getElementById("addbutton")
let expenbutton = document.getElementById("expenbutton")
let calculate = document.getElementById("calculate")
let usermessage = document.getElementById("usermessage")
let history = document.getElementById("history")
let icon = document.getElementById("icon")


function addfunction(inputadd) {
    let amount = parseFloat(inputadd);

    // Check if the input is not a number
    if (isNaN(amount)) {
        alert("Error: Please Enter Number.");
        addAmount.value = "";
        return;
    }

    if (addMessage.value) {
        totalbalance = totalbalance + amount;
        balance.textContent = totalbalance;
        addAmount.value = "";
        usermessage.textContent = "";

        // Create and append a history entry
        let create = document.createElement("p");
        create.textContent = `You added PKR ${amount} by the ${addMessage.value}.`;
        history.appendChild(create);

        // Clear the addMessage input field
        addMessage.value = "";
    } else {
        alert("Please Enter Remembering Message");
    }
}

addbutton.addEventListener("click", () => {
    addfunction(addAmount.value);
});



function expenfunction(inputexpen) {
    let amount2 = parseFloat(inputexpen);

    // Check if the input is not a number
    if (isNaN(amount2)) {
        alert("Error: Please enter number.");
        addExpen.value = "";
        return;
    }
    if(expenMessage.value){
    totalexpense = totalexpense + amount2;
    expense.textContent = totalexpense;
    
    addExpen.value = "";
    usermessage.textContent = "";
    let create = document.createElement("p");
    create.textContent = `You spent PKR ${amount2} in ${expenMessage.value}`
    create.style.color = "#9370DB";
    history.appendChild(create);
    expenMessage.value=""
    }
    else{
        alert("Please enter a message");
    }
}

expenbutton.addEventListener("click", () => {
    expenfunction(addExpen.value);
});


function sum(){
    let total = totalbalance - totalexpense
    if(total>=0){
    let message = `your saving is PKR ${total} this time. `
    usermessage.textContent=message

    }
    else{
        let message = `you not save anything PKR ${total} you should take loan this time. `
        usermessage.textContent=message
    }
} 
calculate.addEventListener("click",()=>{
    sum()
})

icon.addEventListener("click",()=>{
    totalbalance=0
    totalexpense=0
    balance.textContent=0
    expense.textContent=0
    history.textContent=""
    usermessage.textContent=""
})