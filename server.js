const express = require('express')
const next = require('next')
const nodeMailer = require("@sendgrid/mail");
console.log("CURRENT ENVIRONMENT: " + process.env.NODE_ENV)
let login = "";

if (process.env.NODE_ENV === "production") {
    login = {
        apiKey: process.env.SENDGRID_API_KEY
    }
}
else {
    login = require("./secrets/email_auth");
} 

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
    const server = express()
    server.use(express.json());

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.get("/", (req, res) => {
        app.render(req, res, "/");
    })
    server.post("/api/email", (req,res) => {
        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey(login.apiKey);
        const msg = {
            to: "kevin.c.bai0@gmail.com",
            from: req.body.email,
            subject: req.body.subject,
            html: "<p>Email: " + req.body.email + "</p>" 
                + "<p>Name: " + req.body.name + "</p>" 
                + "<p>Subject: " + req.body.subject + "</p>"
                + "<p>" + req.body.message.split("\n").join("<br/>") + "</p>"
        };
        sgMail.send(msg).then((sendResponse) => {
            res.send("ok");
        }).catch((err) => {
            res.status(500).send("error");
        })
    });

    server.listen(process.env.PORT || 3000, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:' + process.env.PORT || 3000)
    })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})