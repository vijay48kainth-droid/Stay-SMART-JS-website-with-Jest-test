
const express = require("express")

const path = require("path")

const validator = require("validator")

const app = express()

app.use(express.json())

app.use(express.static(path.join(__dirname, "public",)))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "Stay-SMART-report.html"));
});

app.post("/save-email", function(req, res) {

    console.log("Request body:", req.body)

    const userEmail = req.body

    console.log(
        "Saved email:",
        userEmail.subscribeReportEmail
    )

    res.json({
        EmailReceived: userEmail.subscribeReportEmail
    })

});

app.post("/save-report", function(req, res) {

    console.log("Request body:", req.body)

    const userReport = req.body

    console.log(
        "Saved report:" + "\n" + 
        "threat(s): " + userReport.threats + "\n" + 
        "Name: " + userReport.name + "\n" + 
        "Othername: " + userReport.surname + "\n" +
        "date: " + userReport.date + "\n" +
        "incident: " + userReport.incident + "\n" +
        "email: " + userReport.email + "\n" +
        "phonenumber: " + userReport.phone + "\n" +
        "Advice: " + userReport.advice + "\n" +
        "Assistance: " + userReport.assistance + "\n"
    )

    res.json({
        threats: userReport.threats,
        name: userReport.name, 
        surname: userReport.surname,
        date: userReport.date,
        incident: userReport.incident,
        email: userReport.email,
        phonenumber: userReport.phone,
        advice: userReport.advice,
        assistance: userReport.assistance
    })
});

app.post("/save-thanks-email", function(req, res){
    
    console.log("Request body:", req.body)

    const userThanks = req.body

    console.log(
        "Report thanks email:" + userThanks.thanksEmail
    )

    res.json({
        thanksEmail: userThanks.thanksEmail
    })
})


app.listen(3001, function() {

    console.log("Stay SMART listening on port 3001")

});