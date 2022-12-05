function send() {
	var message = document.getElementsByTagName("textarea")[0].value;
	var email = document.getElementsByTagName("input")[1].value;
	window.open(`mailto:pets@adoção.com?body=${message + ` from: ${email}`}&subject=problema`)
	location.href = "prototipo.html";
}

function success() {
	if(document.getElementById("textsend").value==="") { 
					 document.getElementById('button').disabled = true; 
			 } else { 
					 document.getElementById('button').disabled = false;
			 }
	 }
