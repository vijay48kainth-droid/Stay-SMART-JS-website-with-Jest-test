
/**
 * @jest-environment jsdom
 */

const { threatsVerification, detailsVerifications } = require('./public/verifications')

beforeEach(() => { // I must recreate the HTML before the test.
    document.body.innerHTML = `
        <div class="threats-list">
            <ul id="threats"></ul>
        </div>

        <h1 id="enter-threats"></h1>
        
        <input id="input-name" value="Anne">

        <h1 id="enter-capital"></h1>

        <input id="input-surname" value="" >

        <input type="date" id="input-date">
        <h1 id="enter-date"></h1>

        <input type="email" id="input-email" value="anna.smith@example.com">
        <h1 id="enter-email"></h1>

        <textarea id="input-incident"></textarea>

        <input id="input-phonenumber" value="">

        <h1 id="enter-phone"></h1>

        <input value="Advice" type="radio" name="advice or assistance" checked>Advice

        <input value="Assistance" type="radio" name="advice or assistance">Assistance

        <h1 id="enter-advice-assistance"></h1>

    `
})

// This tests if the threats list is empty
test('is Threats empty', function() {
    const result = threatsVerification()

    expect(result).toBe(false)
})

// This tests if the threats list has any values
test('has Threats', function() {
    document.getElementById("threats").innerHTML = `
        <li>
            <span class="text-content">Phishing</span>
            <span class="close-btn">&times;</span>
        </li>
    `

    const result = threatsVerification()

    expect(result).toBe(true)
})

// This test is for the rest of the input from the threats detailsVerifications function


// Name tests
// Test if the name is capitalised
test('capitalised name', function(){

    const name = document.getElementById("input-name")

    name.value = 'Anne'

    const result = detailsVerifications()
    
    expect(result).toBe(true)
})

// Test if the name is not capitalised
test('none-capitalised name', function() {

    const name = document.getElementById("input-name")

    name.value = 'anne'

    const result = detailsVerifications()

    expect(result).toBe(false)
})

// Test if the name is empty
test('no-name entered in name', function() {

    const name = document.getElementById("input-name")

    name.value = ''

    const result = detailsVerifications()

    expect(result).toBe(false)
})

// Othername tests
// Test if the other name is a surname

test('surname entered in other name', function(){

    const surname = document.getElementById("input-surname")
    surname.value = 'Smith'

    const result = detailsVerifications()
    expect(result).toBe(true)
})

// Test if the other name will accept an online profile name

test('online profile entered in other name', function(){

    const surname = document.getElementById("input-surname")
    surname.value = "@AnneOnymous"

    const result = detailsVerifications()
    expect(result).toBe(true)

})

// Date tests
// Test if a valid date was entered

test('valid date entered', function(){

    const date = document.getElementById("input-date")
    date.value = "2026-08-08"

    const result = detailsVerifications()
    expect(result).toBe(true)
})

// Test if a date was not entered but is still valid

test('no date entered', function() {

    const date = document.getElementById("input-date")
    date.value = ""

    const result = detailsVerifications()
    expect(result).toBe(true)
})

// Test if an invalid date was entered

test('invalid date entered', function() {

    const date = document.getElementById("input-date")
    date.value = "2030-08-08"

    const result = detailsVerifications()
    expect(result).toBe(false)
})

// Incident Tests
// Test if the incident is over the character limit

test('incident description over character limit', function() {
    const incident = document.getElementById("input-incident")

    incident.value = "A".repeat(1001)

    const result = detailsVerifications()

    expect(result).toBe(false)

})

// Test if the incident is the exact character limit

test('incident description at character limit', function() {
    const incident = document.getElementById("input-incident")

    incident.value = "A".repeat(1000)

    const result = detailsVerifications()

    expect(result).toBe(true)
})

// Test if the incident is under the character limit

test('incident description under character limit', function() {
    const incident = document.getElementById("input-incident")

    incident.value = "A".repeat(999)

    const result = detailsVerifications()

    expect(result).toBe(true)
})

// Email tests
// Test if the email is valid

test('valid email', function(){
    const email = document.getElementById("input-email")

    email.value = "anna.smith@example.co.uk"

    const result = detailsVerifications()
    expect(result).toBe(true)
})

// Test if the email is invalid

test('invalid email', function(){
    const email = document.getElementById("input-email")

    email.value = "anna.smithexample"

    const result = detailsVerifications()
    expect(result).toBe(false)
})

// Phone tests
// Test if the phone number is valid

test('valid phone number', function(){
    const phone = document.getElementById("input-phonenumber")
    phone.value = "44874830436438"

    const result = detailsVerifications()

    expect(result).toBe(true)
})


// Test if the phone number is invalid

test('invalid phone number', function(){
    const phone = document.getElementById("input-phonenumber")
    phone.value = "03874830436438"

    const result = detailsVerifications()

    expect(result).toBe(false)
})

// Advice or Assistance tests
// Test if the Advice is selected

test('advice selected', function(){
    const advice = document.querySelector('input[value="Advice"]')
    advice.checked = true

    const result = detailsVerifications()
    expect(result).toBe(true)
})

// Test if the Assistance is selected

test('assistance selected', function(){
    const assistance = document.querySelector('input[value="Assistance"]')
    assistance.checked = true

    const result = detailsVerifications()
    expect(result).toBe(true)
})

// Test if neither Advice nor Assistance are selected

test('neither advice or assistance are selected', function(){
    const assistance = document.querySelector('input[value="Assistance"]')
    const advice = document.querySelector('input[value="Advice"]')

    advice.checked = false
    assistance.checked = false

    const result = detailsVerifications()
    expect(result).toBe(false)
})



