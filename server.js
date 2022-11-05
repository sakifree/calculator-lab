require("dotenv").config()

const express = require("express")
const app = express()
// const PORT = 3000

app.get("/calc/:num1/:num2", (request, response) => {
    const num1 = parseInt(request.params.num1)
    const num2 = parseInt(request.params.num2)
    const sum = num1 + num2
    response.send("The sum is " + sum)
})

app.get("/calcquery/:num1/:num2", (request, response) => {
    // console.log(request.params.num1, request.params.num2, typeof request.params.num1) // ensures that I'm getting the corect parameters and shows the type of data that is being grabbed

    const num1 = parseInt(request.params.num1)
    const num2 = parseInt(request.params.num2)
    const operation = request.query.operation // DRY (Don't Repeat Yourself) coding
    
    if (operation === "add"){
        response.send(`${num1} + ${num2} =  ${num1 + num2}`)
    } else if (operation === "multiply") {
        response.send(`${num1} * ${num2} =  ${num1 * num2}`)
    } else if (operation === "subtract") {
        response.send(`${num1} - ${num2} =  ${num1 - num2}`)
    } else if (operation === "divide") {
        response.send(`${num1} / ${num2} =  ${num1 / num2}`)
    } else if (operation === "exponent") {
        response.send(`${num1} ** ${num2} =  ${num1 ** num2}`)
    } else {
        response.send("No operation!")
    }
})

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})