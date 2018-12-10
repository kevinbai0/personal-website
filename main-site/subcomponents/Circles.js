import React, { Component } from "react";


class Circles extends Component {
	circles = [];
	radius = 100;

	constructor(props) {
		super(props);
		this.state = {
			intervalId: null,
			canvas: null
		}
	}

	componentDidMount() {
		window.addEventListener("resize", () => {
			const dpi = window.devicePixelRatio;
			this.state.canvas.width = window.innerWidth * dpi;
			this.state.canvas.height = window.innerHeight * dpi;
		})
		this.setState({canvas:  document.getElementById("circles-container")}, () => {
			const dpi = window.devicePixelRatio;
			this.state.canvas.width = window.innerWidth * dpi;
			this.state.canvas.height = window.innerHeight * dpi;
			this.circles = this.createCircles();
			let ctx = this.state.canvas.getContext("2d");
			var interval = setInterval((e) => this.animateCircles(ctx), 1000 / 60);
			this.setState({intervalId: interval});
		})
		
	}

	render() {
		return <canvas id="circles-container">

		</canvas>
	}

	animateCircles = (ctx) => {
		// create circles
		const canvas = this.state.canvas;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.beginPath();

		// hit test
		for (let i = 0; i < this.circles.length; i++) {
			
		}
		this.circles.map((circle, i) => {
			let x = circle.x;
			let y = circle.y;
			ctx.moveTo(x + this.radius, y);
			
			ctx.arc(x, y, this.radius,0, Math.PI * 2);
			ctx.strokeStyle = "#DEDEDE"
			
			ctx.stroke();

			// update positions
			if (circle.x <= this.radius || circle.x >= canvas.width - this.radius) {
				circle.dx *= -1;
			}
			if (circle.y <= this.radius || circle.y >= canvas.height - this.radius) {
				circle.dy *= -1;
			}
			for (let j = i + 1; j < this.circles.length; j++) {
				// collision:
				let c2 = this.circles[j];

				// check for collision
				if (Math.sqrt(Math.pow(circle.x - c2.x, 2) + Math.pow(circle.y - c2.y, 2)) <= this.radius * 2) {
					//if collision, change dx and dy
					let temp  = circle.dx;
					circle.dx = c2.dx;
					c2.dx = temp;
					c2.x += c2.dx;
					c2.y += c2.dy;
				}
			}
			circle.x += circle.dx;
			circle.y += circle.dy;
		})
	}

	createCircles = () => {
		// vw : vh ratio
		let ratio = window.innerWidth / window.innerHeight;
		let circles = [];
		for (let i = 0; i < 20; i++) {
			let pos = this.genUniquePosition(circles, ratio);
			// dv is all constant but dy and dx are random.
			// dv = 3
			let dx = Math.round((0.1 + Math.random() * 0.1) * 10) ;
			let dy = Math.sqrt(9 - dx*dx);
			dx *= Math.random() < 0.5 ? -1 : 1;
			dy *= Math.random() < 0.5 ? -1 : 1;

			circles.push({
				x: pos.x, y: pos.y, dx: dx, dy: dy
			})
		}
		return circles;
	}
	genUniquePosition(circles, ratio) {
		let pos = {
			x: Math.random() * (this.state.canvas.width - this.radius * 2) + this.radius,
			y: Math.random() * (this.state.canvas.height - this.radius * 2) + this.radius,
		}
		for (let i = 0; i < circles.length; i++) {
			if (this.overlap(circles[i], pos, ratio)) {
				return this.genUniquePosition(circles, ratio);
			}
		}
		return pos;
	}

	overlap(pos1, pos2, ratio) {
		let dist = Math.sqrt(Math.pow(pos1.x - pos2.x, 2) + Math.pow((pos1.y - pos2.y) / ratio, 2));
		if (dist <= this.radius * 2) {
			return true;
		}
		return false;
	}
}

export default Circles;