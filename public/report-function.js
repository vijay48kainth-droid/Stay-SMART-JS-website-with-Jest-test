            // incident counter code

            document.addEventListener("DOMContentLoaded", function() {

                const incident = document.getElementById("input-incident")
                const incidentCounter = document.getElementById("incident-counter")

                incident.addEventListener("input", function() {
                    const characterCount = incident.value.length
                    incidentCounter.textContent = `${characterCount} / 1000 characters`
                })

            })

function handleEmailDisplay() {

                document.getElementById("email-display").style.display = "block"

            }
            // backend email code 
            const emailForm = document.getElementById("email-form")

            emailForm.addEventListener("submit", subscribeEmailReport)

            async function subscribeEmailReport(event) {

                document.getElementById("email-form").style.display = "none"
                document.getElementById("email-thanks").style.display = "block"

                event.preventDefault()

                const reportEmail = document.getElementById("report-email").value

                const payload = {
                    subscribeReportEmail: reportEmail
                }

                console.log("Sending:", payload)

                const response = await fetch("/save-email", {
                    method: "POST",

                    headers: {
                        'Accept': 'application/json',
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(payload)
                })

                const jsonRes = await response.json()

                console.log("Response from server:", jsonRes)
            }

            function handleStartReportFunction(){
                document.getElementById("Report-view").style.display = "none"
                document.getElementById("Edit-view").style.display = "block"
            }


                function addItemToTasks(textValue) {
                    var ulEl = document.getElementById("threats");
                    var threat = textValue.trim();

                    // Stop if the string is empty
                    if (threat === "") {
                        return;
                    }

                    

                    // Scan all existing text containers in the list
                    var existingSpans = Array.from(ulEl.querySelectorAll('li span.text-content'));
                    // This console.log is to see the items in the array from the DOM
                    console.log("Current items in the array:", existingSpans);
                    var isAlreadyInList = existingSpans.some(function(span) {
                        return span.textContent.trim() === threat;
                    });

                    // If it's already on the screen, block it completely
                    if (isAlreadyInList) {
                        return; 
                    }

                    // Create the new item with unified structure (both text and close button are spans)
                    var liEl = document.createElement("li");
                    liEl.innerHTML = "<span class='text-content'>" + threat + "</span> <span class='close-btn'>&times;</span>";
                    
                    ulEl.appendChild(liEl);
                }

                // 2. Handle the manual typing input field
                function handleListFunction() {

                    var inputEl = document.getElementById("user-threat");
                    
                    if (inputEl) {
                        // Send the input text to our master add function
                        addItemToTasks(inputEl.value);
                        inputEl.value = "";
                    }
                }

                // 3. Set up everything when the page loads
                document.addEventListener("DOMContentLoaded", function () {
                    const ulEl = document.getElementById("threats");
                    const threatButtons = document.querySelectorAll(".button");

                    // Connect all the clickable option buttons to the duplicate system
                    threatButtons.forEach(button => {
                        button.addEventListener("click", function () {
                            // Send the button's text to our master add function
                            addItemToTasks(button.textContent);
                        });
                    });

                    // An event listener to handle closing items
                    if (ulEl) {
                        ulEl.addEventListener("click", function (event) {
                            if (event.target.classList.contains("close-btn")) {
                                event.target.parentNode.remove();
                            }
                        });
                    }
                });
                

            function handleEditView(event){

                // threat code

                const Threats = document.getElementById("threats").innerHTML;
                const ConfirmTasks = document.getElementById("confirm-threats");
                // 1. Assign the HTML to both of your views first
                document.getElementById("confirm-threats").innerHTML = document.getElementById("threats").innerHTML = Threats;

                // 2. Select all list items inside the confirmation view
                document.querySelectorAll("#confirm-threats li").forEach((li, index, items) => {
                    let text = li.textContent.trim();

                    // Remove the final X
                    text = text.slice(0, -2);

                    // Add comma only if this isn't the last item
                    if (index !== items.length - 1) {
                        text += ",";
                    }

                    li.textContent = text;
                });

                if (Threats === ""){
                    document.getElementById("threats-list-header").style.display = "none"
                } else {
                    document.getElementById("threats-list-header").style.display = "block"
                }

                // name code

                const inputName = document.getElementById("input-name").value;
                const confirmName = document.getElementById("name");
                confirmName.textContent = inputName;

                // othernames code

                const inputSurname = document.getElementById("input-surname").value;
                const confirmSurname = document.getElementById("surname");
                document.getElementById("surname").textContent = inputSurname || "N/A";
            

                // date of incident code

                const inputDate = document.getElementById("input-date").value;
                const confirmDate = document.getElementById("date");
                document.getElementById("date").textContent = inputDate || "N/A";


                // incident description code

                const inputIncident = document.getElementById("input-incident").value;
                const confirmIncident = document.getElementById("incident");
                document.getElementById("incident").textContent = inputIncident;

                // email code

                const inputEmail = document.getElementById("input-email").value;
                const confirmEmail = document.getElementById("email");
                confirmEmail.textContent = inputEmail;

                // phonenumber code

                const inputPhonenumber = document.getElementById("input-phonenumber").value;
                const confirmPhonenumber = document.getElementById("phonenumber");
                document.getElementById("phonenumber").textContent = inputPhonenumber || "N/A"

                // Advice / Assistance 

                const selected = document.querySelector(
                    'input[name="advice or assistance"]:checked'
                );

                if (selected){
                    document.getElementById("confirm-advice").checked = 
                        selected.value === "Advice";

                    document.getElementById("confirm-assistance").checked = 
                        selected.value === "Assistance";
                }

                event.preventDefault();
                

                const confirmView = document.getElementById("Confirm-view")
                const editView = document.getElementById("Edit-view")
                const emailInput = document.getElementById("email-input")

                editView.style.display = "none"
                confirmView.style.display = "block"
            }
  
            

            function handleConfirmView() {
                document.getElementById("Confirm-view").style.display = "none"
                document.getElementById("Edit-view").style.display = "block"
            }

            async function handleSentView() {

            // backend report code 
            
            const confirmTasks = document.getElementById("confirm-threats").textContent;
            const confirmName = document.getElementById("name").textContent;
            const confirmSurname = document.getElementById("surname").textContent;
            const confirmDate = document.getElementById("date").textContent;
            const confirmIncident = document.getElementById("incident").textContent;
            const confirmEmail = document.getElementById("email").textContent;
            const confirmPhonenumber = document.getElementById("phonenumber").textContent;
            const confirmAdvice = document.getElementById("confirm-advice");
            const confirmAssistance = document.getElementById("confirm-assistance");

            const payload = {

                    threats: confirmTasks,
                    name: confirmName,
                    surname: confirmSurname, 
                    date: confirmDate,
                    incident:confirmIncident,
                    email:confirmEmail,
                    phone: confirmPhonenumber,
                    advice: confirmAdvice.checked,
                    assistance: confirmAssistance.checked

                }

                const response = await fetch('save-report', {

                        method:"POST",
                        
                        body: JSON.stringify(payload),
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                    }
                })
                
                jsonRes = await response.json()
                console.log(jsonRes)
                
                document.getElementById("Confirm-view").style.display = "none"
                document.getElementById("Sent-view").style.display = "block"

                const sentName = document.getElementById("name");
                const thankName = document.getElementById("thank-name");
                thankName.textContent = sentName.textContent;

                const inputSurname = document.getElementById("input-surname").value;
                const sentSurname = document.getElementById("surname");
                const thankSurname = document.getElementById("thank-surname");
                thankSurname.textContent = document.getElementById("surname").innerHTML =  "\xa0".concat(sentSurname.innerHTML)

                if (inputSurname === "") {
                    document.getElementById("last-name-container").style.display = "none"
                } else {
                    document.getElementById("last-name-container").style.display = "block"
                }


                const sentEmail = document.getElementById("email");
                const thankEmail = document.getElementById("thank-email");
                thankEmail.value = sentEmail.textContent;
            }

                        // thank email code 

                const thankEmailForm = document.getElementById("thanks-email-container");
                
                thankEmailForm.addEventListener("submit", handleThankView)

                async function handleThankView(event) {

                    event.preventDefault()

                    const thankEmail = document.getElementById("thank-email").value

                document.getElementById("Sent-view").style.display = "none";
                document.getElementById("Report-view").style.display = "block";


                const payload = {
                    thanksEmail: thankEmail
                }

                const response = await fetch ('/save-thanks-email',{

                    method:"POST",
                    body: JSON.stringify(payload),
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                    }

                })
            
                jsonRes = await response.json()
                console.log(jsonRes)
                
            
            }