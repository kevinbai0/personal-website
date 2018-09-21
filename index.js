const express = require("express");
const path = require('path');


const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

let nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "kevin.c.bai0@gmail.com",
		pass: "Blazer7F"
	}
});

//if (process.env.NODE_ENV === 'production') {
	// Serve any static files
	app.use(express.static(path.join(__dirname, 'client/build')));
	// Handle React routing, return all requests to React app
	app.get('/', function(req, res) {
		res.redirect("https://www.kevinbai.design");
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
	app.get('/contact', function(req, res) {
		res.redirect("https://www.kevinbai.design/contact");
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
	app.get('/work', function(req, res) {
		res.redirect("https://www.kevinbai.design/work");
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
	app.get('/about', function(req, res) {
		res.redirect("https://www.kevinbai.design/about");
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
//}

app.post("/api/email", (req,res) => {
	let options = {
		from: "kevin.c.bai0@gmail.com",
		to: "kevin.c.bai0@gmail.com",
		subject: "Email List",
		text: "Email: " + req.body.email
	}
	transporter.sendMail(options);
	setTimeout(() => {
		res.end(JSON.stringify({
			success: "Ok"
		}));
	}, 1000)
	
})


app.listen(port, () => console.log());