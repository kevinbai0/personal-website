const express = require('express')
const next = require('next')
const nodeMailer = require("nodemailer");
console.log("CURRENT ENVIRONMENT: " + process.env.NODE_ENV)
const login = process.env.NODE_ENV === "production" ? {
    email: process.env.NODEMAILER_EMAIL,
    password: process.env.NODEMAILER_PASSWORD
} : require("./secrets/email_auth");

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
        var transporter = nodeMailer.createTransport({
            service: 'gmail',
            auth: {
                user: login.email,
                pass: login.password
            }
        });

        const mailOptions = {
            from: req.body.email, // sender address
            to: login.email, // list of receivers
            subject: "Client: " + req.body.subject, // Subject line
            html: "<p>Email: " + req.body.email + "</p>" 
                + "<p>Name: " + req.body.name + "</p>" 
                + "<p>Subject: " + req.body.subject + "</p>"
                + "<p>" + req.body.message.split("\n").join("<br/>") + "</p>"
        };
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) res.status(500).send("error");
            else res.send("ok");
        });
    });

    server.listen(3000, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:3000')
    })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})