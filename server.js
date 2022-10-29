const express = require('express')

const app = express()

app.set("view engine", "ejs")

app.get('/', (req, res) => {
    const items = [
        {
            title: 'D',
            message: 'esenvolver aplicações e serviços de forma facil'
        },
        {
            title: 'E',
            message: 'JS usa JavaScript para renderizar HTML'
        },
        {
            title: 'M',
            message: 'uito fácil de usar'
        },
        {
            title: 'A',
            message: 'migavél e simples'
        },
        {
            title: 'I',
            message: 'nstall ejs'
        },
        {
            title: 'S',
            message: 'intaxe simples'
        },
    ]
    res.render("pages/index", {
        qualitys: items,
    })
})

app.get('/sobre', (req, res) => {
    res.render("pages/about")
})

app.listen(8080)
console.log("connect")
