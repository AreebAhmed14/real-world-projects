let open = document.getElementById("open")
let close = document.getElementById("close")
let boxx = document.getElementById("boxx")

open.addEventListener("click",()=>{
    boxx.style.display = "block";
})
close.addEventListener("click",()=>{
    boxx.style.display = "none";
})