const express = require("express");
const path = require('path');
const fetch = require("node-fetch");

const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(express.static('public'))

let nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "kevin.c.bai0@gmail.com",
		pass: "Blazer7F"
	}
});


if (process.env.NODE_ENV === 'production') {
	// Serve any static files
	app.use("/", express.static(path.join(__dirname, 'client/build')));
	// Handle React routing, return all requests to React app
	app.get('/', function(req, res) {
		res.redirect("https://www.kevinbai.design/");
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
	app.get("/searchEngine", function(req, res) {
		res.redirect("https://www.kevinbai.design/searchEngine");
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	})
	app.get("/seminar", function(req, res) {
		res.redirect("https://www.kevinbai.design/seminar");
		res.sendFile(path.join(__dirname, 'english-seminar/build', 'index.html'));
	})
}


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
app.get("/api/photoOfTheDay", (req, res) => {
	res.end(JSON.stringify({imageURL: "/image.jpg"}));
});



// Serve any static files
app.use("/stop-motion/", express.static(path.join(__dirname, "client-stop-motion/build")))
app.get("/stop-motion", function(req, res) {
	res.sendFile(path.join(__dirname, 'client-stop-motion/build', 'index.html'));
});

app.use("/about", express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
app.get('/about', function(req, res) {
	res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

/*app.get('/contact', function(req, res) {
	res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
app.get('/work', function(req, res) {
	res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
app.get('/about', function(req, res) {
	res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
app.get("/searchEngine", function(req, res) {
	res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
})
app.get("/seminar", function(req, res) {
	res.sendFile(path.join(__dirname, 'english-seminar/build', 'index.html'));
});*/


app.listen(port, () => console.log("Running on port " + port));