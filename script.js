//your JS code here. If required.
document.getElementById("sum_btn").addEventListener("click", function() {
	let num1 = document.getElementById("n1").value;
	let num2 = document.getElementById("n2").value;

	if(num1 !== "" && num2 !== ""){
		let sum = Number(num1) + Number(num2);
		document.getElementById("sum").innertext = sum;
	} else {
		document.getElementById("sum").innertext = "";
	}
});
