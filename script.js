const ip = document.getElementById("n")
const out = document.getElementById("out")
var n

function calculate(){
	n = ip.value

	out.innerText = Math.pow((1 + 1/n), n)
	requestAnimationFrame(calculate)
}

calculate()