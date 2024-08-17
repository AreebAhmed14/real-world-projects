let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click", (e)=>{
        if (e.target.innerText === "=") {
            try{
            string = eval(string);
            document.querySelector("input").value = string;
            }catch(err){
        document.querySelector("input").value = "SYNTAX ERROR";
        string="";
            }
        }
        else if(e.target.innerText=="AC"){
            string = "";
        document.querySelector("input").value = string;
        }
        else if(e.target.innerText=="DOT"){
            string = string +".";
        document.querySelector("input").value = string;
        }
        else if(e.target.innerText=="DEL"){
            string = string.slice(0,-1);
        document.querySelector("input").value = string;
        }
        else{
        string = string + e.target.innerText;
        document.querySelector("input").value = string;
        }
    })
})