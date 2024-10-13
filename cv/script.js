document.getElementById('download-pdf').addEventListener('click', function () {
    if(document.querySelector(".checkblank").value !== ""){
    let mainNameInput = document.getElementById("name").value
    let mainPhoneInput = document.getElementById("phone").value
    let mainEmailInput = document.getElementById("email").value
    let mainAddressInput = document.getElementById("address").value
    let mainobjectiveInput = document.getElementById("objective").value
    let mainEducationInput = document.getElementById("education").value
    let mainExperienceInput = document.getElementById("experience").value
    let mainskillsInput = document.getElementById("skills").value

    document.querySelector(".mainHeading").textContent = mainNameInput;
    document.querySelector(".contact").textContent = mainPhoneInput;
    document.querySelector(".gmail").textContent = mainEmailInput;
    document.querySelector(".patta").textContent = mainAddressInput;
    document.querySelector(".innerobj").textContent = mainobjectiveInput;
    document.querySelector(".inneredu").textContent = mainEducationInput;
    document.querySelector(".innerExpi").textContent = mainExperienceInput;
    document.querySelector(".innerskills").textContent = mainskillsInput;
    
    setTimeout(() => {
        let element = document.getElementById('cv-content');
        html2pdf().from(element).save();
    }, 100);

    document.querySelector(".confirmMessae").style.display = "block"

}
else{
    alert("Please Fill at least Name Field.")
}
});
function backcv(){
    document.querySelector(".confirmMessae").style.display = "none"

}
