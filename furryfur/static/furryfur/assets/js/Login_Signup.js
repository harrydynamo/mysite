var toggle = document.getElementById('containertoggle');
var toggleContainer = document.getElementById('toggle-containertoggle');
var toggleNumber;

toggle.addEventListener('click', function() {
	toggleNumber = !toggleNumber;
	if (toggleNumber) {
		toggleContainer.style.clipPath = 'inset(0 0 0 50%)';
		toggleContainer.style.backgroundColor = '#D74046';
        document.getElementById('containerlogowner').style.display = 'none';
        document.getElementById('containerlogsitter').style.display = 'block';
	} else {
		toggleContainer.style.clipPath = 'inset(0 50% 0 0)';
		toggleContainer.style.backgroundColor = 'dodgerblue';
        document.getElementById('containerlogowner').style.display = 'block';
        document.getElementById('containerlogsitter').style.display = 'none';
	}
	console.log(toggleNumber)
});

const signUpButtonowner = document.getElementById('signUpowner');
const signInButtonowner = document.getElementById('signInowner');
const containerlogowner = document.getElementById('containerlogowner');

signUpButtonowner.addEventListener('click', () => {
	containerlogowner.classList.add("right-panel-active");
});

signInButtonowner.addEventListener('click', () => {
	containerlogowner.classList.remove("right-panel-active");
});



const signUpButtonsitter = document.getElementById('signUpsitter');
const signInButtonsitter = document.getElementById('signInsitter');
const containerlogsitter = document.getElementById('containerlogsitter');

signUpButtonsitter.addEventListener('click', () => {
	containerlogsitter.classList.add("right-panel-active");
});

signInButtonsitter.addEventListener('click', () => {
	containerlogsitter.classList.remove("right-panel-active");
});


function signup(type) {
	console.log(type);	
	switch(type) {
		case "owner":
			ownersignup();
			break;
		case "petsitter":
			petsittersignup();
			break;
	}
}

function signin(type) {
	console.log(type);
	switch(type) {
		case "owner":
			ownersignin();
			break;
		case "petsitter":
			petsittersignin();
			break;
	}
}

function ownersignup() {
	var firstname = document.getElementsByClassName("signupfirstname")[0].value;
	var lastname = document.getElementsByClassName("signuplastname")[0].value;
	var email = document.getElementsByClassName("signupemail")[0].value;
	var password = document.getElementsByClassName("signuppassword")[0].value;
	console.log("ownersignup");
	if ((firstname == "" || firstname == null) || (lastname == "" || lastname == null) || (email == "" || email == null) || (password == "" || password == null)) {
		console.log("Some fields are missing");
		return;
	}
	signupRequest(firstname, lastname, email, password);
	// console.log(type + " => " + firstname + " " + lastname + " " + email + " " + password);
}

function ownersignin() {
	var email = document.getElementsByClassName("signinemail")[0].value;
	var password = document.getElementsByClassName("signinpassword")[0].value;
	console.log("ownersignin");
	if ((email == "" || email == null) || (password == "" || password == null)) {
		console.log("Some fields are missing");
		return;
	}
	// console.log(type + " => " + email + " " + password);
	signinRequest(email, password);
}

function petsittersignup() {
	var firstname = document.getElementsByClassName("signupfirstname")[1].value;
	var lastname = document.getElementsByClassName("signuplastname")[1].value;
	var email = document.getElementsByClassName("signinemail")[1].value;
	var password = document.getElementsByClassName("signinpassword")[1].value;
	console.log("petsittersignup");
	if ((firstname == "" || firstname == null) || (lastname == "" || lastname == null) || (email == "" || email == null) || (password == "" || password == null)) {
		console.log("Some fields are missing");
		return;
	}

	// console.log(type + " => " + firstname + " " + lastname + " " + email + " " + password);
	signupRequest(firstname, lastname, email, password);
}

function petsittersignin() {
	var email = document.getElementsByClassName("signupemail")[1].value;
	var password = document.getElementsByClassName("signuppassword")[1].value;
	console.log("petsittersignin");
	if ((email == "" || email == null) || (password == "" || password == null)) {
		console.log("Some fields are missing");
		return;
	}

	// console.log(type + " => " + firstname + " " + email + " " + password);
	signinRequest(email, password);
}

function signupRequest(firstname, lastname, email, password, type) {
	request = new XMLHttpRequest();
	
	request.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log(this.responseText);
		}
		console.log(this.readyState + " " + this.status)
	}

	request.open("POST", "http://localhost:8080/register", true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.send("firstname="+firstname+"&lastname="+lastname+"&email="+email+"&password="+password);
}

function signinRequest(email, password, type) {
	request = new XMLHttpRequest();
	
	request.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log(this.responseText);
		}
		console.log(this.readyState + " " + this.status);
	}

	request.open("POST", "http://localhost:8080/login", true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.send("email="+email+"&password="+password);
}