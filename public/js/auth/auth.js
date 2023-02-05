"use strict";

async function registerUserClient(e){
	if (!e.target.matches("#register")) return;

	await registerUser(getBodyAuthenticate());
	location.replace(`${URL}/home`);
}

async function loginUserClient(e){
	if (!e.target.matches("#login")) return;
	console.log(getBodyAuthenticate());
	await loginUser(getBodyAuthenticate());
	location.replace(`${URL}/home`);
}

function getBodyAuthenticate(){
	return {
		"username": document.querySelector("#username").value,
		"password": document.querySelector("#password").value
	}
}

function userAuthenticated(){
	if (window.location.pathname === "/auth") return;
	const authError = document.querySelector("h2.non-auth");
	if (localStorage.getItem("user")){
		authError.classList.add("hidden");
		return true;
	} else {
		authError.classList.remove("hidden");
		return false;
	}
}
