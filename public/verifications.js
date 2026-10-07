

function threatsVerification() {

    const threats = document.getElementById("threats")
    const threatList = threats.querySelectorAll("li")
    const enterThreats = document.getElementById("enter-threats")

    if (threatList.length === 0){
        console.log("threat is empty.")
        enterThreats.style.display = "block";
        return false

    } else {
        enterThreats.style.display = "none";
        return true
    }
    
}

function detailsVerifications() {

    let valid = true

    // Name verification
    const name = document.getElementById("input-name").value;
    const enterCap = document.getElementById("enter-capital");

    if (name === "") {
        enterCap.style.display = "block";
        valid = false;
    }
    else if (name[0] >= "A" && name[0] <= "Z") { // This is beter than toUpperCase, because the number 1 is seen as a capital.
        enterCap.style.display = "none";
    }
    else {
        enterCap.style.display = "block";
        valid = false;
    }

    // Other name verification
    const surname = document.getElementById("input-surname").value

    // Optional, the user can enter either surname or online profile name

    // Date verification
    const date = document.getElementById("input-date").value
    const enterDate = document.getElementById("enter-date");

    // Optional, the user can enter a date or not

    if (date !== "") {

        // This line uses a JS function to get the current date and turn it into a string
        const today = new Date().toISOString().split("T")[0];

        if (date > today) {
            enterDate.style.display = "block";
            valid = false;
        } else {
            enterDate.style.display = "none";
        }
    }
    // Incident verification

    const incident = document.getElementById("input-incident").value

        if (incident.length > 1000) {
            valid = false
        }

    // Email verification
    const email = document.getElementById("input-email").value
    const enterEmail = document.getElementById("enter-email")
    if  (!email.includes("@") || !(email.endsWith(".com") || email.endsWith(".org") || email.endsWith(".co.uk"))){
        enterEmail.style.display = "block"
        valid = false;
    } else {
        enterEmail.style.display = "none"
    }

    // Phone verification
    const phone = document.getElementById("input-phonenumber").value
    const enterPhone = document.getElementById("enter-phone")

    if (phone.length > 0) {
        if (!phone.startsWith("44") && !phone.startsWith("01") && !phone.startsWith("02")) {
            console.log("invalid number")
            enterPhone.style.display = "block"
        valid = false
        } else {
            enterPhone.style.display = "none"
        }
    }

    // Advice or Assistance verification


    const advice = document.querySelector('input[value="Advice"]')
    const assistance = document.querySelector('input[value="Assistance"]')
    const enterAdviceAssistance = document.getElementById("enter-advice-assistance")

    if (!advice.checked && !assistance.checked) {
        enterAdviceAssistance.style.display = "block"
        valid = false;
    } else{
        enterAdviceAssistance.style.display = "none"
    }

    
        return valid
    }



if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        threatsVerification,
        detailsVerifications
    }}

