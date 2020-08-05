var find_sitter = document.getElementsByClassName("nav-item")[0];
var home = document.getElementsByClassName("nav-item")[1];
var how_it_works = document.getElementsByClassName("nav-item")[2];
var about_us = document.getElementsByClassName("nav-item")[3];
var services = document.getElementsByClassName("nav-item")[4];
var login_signup = document.getElementsByClassName("nav-item")[5];
var contact = document.getElementsByClassName("nav-item")[6];
var profile = document.getElementsByClassName("nav-item")[7];

profile.style.display = "none";

function userLogin() {
	var request = new XMLHttpRequest();

	request.onreadystatechanged = function() {
		if ( this.readyState == 4 && this.status == 200) {

		}
	}

	request.open("POST", "", true);
	request.send();
}

function userRegister() {
	var request = new XMLHttpRequest();

	request.onreadystatechanged = function() {
		if ( this.readyState == 4 && this.status == 200) {

		}
	}

	request.open("POST", "", true);
	request.send();
}

function petSitterRegister() {
	var request = new XMLHttpRequest();

	request.onreadystatechanged = function() {
		if ( this.readyState == 4 && this.status == 200) {

		}
	}

	request.open("POST", "", true);
	request.send();
}

function petSitterLogin() {
	var request = new XMLHttpRequest();

	request.onreadystatechanged = function() {
		if ( this.readyState == 4 && this.status == 200) {

		}
	}

	request.open("POST", "", true);
	request.send();
}


function serachPetSitter() {
	
}