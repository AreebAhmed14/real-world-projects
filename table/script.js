let btn = document.getElementById("btn")
let input = document.querySelector("input")
let main = document.getElementById("final")

function tableFunc(number) {
    if(number===""){
        main.innerHTML = "PLEASE ENTER NUMBER"
    }
    else{
    let a = '';
    for(let i = 1; i <= 10; i++) {
       a += `${number} x ${i} = ${number * i}<br>`;
    }
    main.innerHTML = a; // Use innerHTML to render the line breaks
}
}



btn.addEventListener("click",()=>{
    tableFunc(input.value)
})