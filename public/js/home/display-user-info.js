"use strict";

async function displayUserinfo(){
	const user = JSON.parse(localStorage.getItem("user")).user;
	const incidentsHelped = await getAllHelpedIncidents(user._id);
	const incidentsReported = await getAllReportedIncidents(user._id);

	let html = `
		<p> Username: ${user.username} </p>
		<p> Incidents helped: ${incidentsHelped.incidents.length} </p>
		<p> Incidents reported: ${incidentsReported.incidents.length} </p>
	`;

	document.querySelector(".user-info").insertAdjacentHTML("beforeend", html);
}