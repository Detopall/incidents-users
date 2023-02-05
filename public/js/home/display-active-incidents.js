"use strict";

async function displayIncidents(){
	if (!userAuthenticated()) return;
	let html = "";
	const allIncidents = await getAllIncidentsActive();
	html = injectAllIncidentsInHTML(allIncidents, html);
	document.querySelector(".active-incidents").insertAdjacentHTML("beforeend", html);
}

function injectAllIncidentsInHTML(allIncidents, html){
	console.log(allIncidents);
	allIncidents.incidents.forEach(incident => {
		html += `
		<div id="${incident._id}">
			<h3> ReporterId: ${incident.reporterId}</h3>
			<p> Type of incident: ${incident.typeOfIncident}</p>
			<p> aggressors: ${getAllAggressorsToDisplay(incident)} </p>
			${checkIfCanHelp(incident)}
			${checkIfCanEnd(incident)}
		</div>`;
	});
	return html;
}

function checkIfCanEnd(incident){
	const userId = JSON.parse(localStorage.getItem("user")).user._id;
	if (incident.reporterId === userId){
		return `<button type="button" class="end-incident">End incident </button>`;
	} else {
		return "";
	}
}

function checkIfCanHelp(incident){
	const userId = JSON.parse(localStorage.getItem("user")).user._id;

	if (!incident.aggressors.includes(userId) && incident.reporterId !== userId && insertHelpedIncidents(incident, userId).length === 0){
		return `<button type="button" class="help-incident">Help incident </button>`
	} else {
		return "<b> You cannot help this incident </b>";
	}
}

function insertHelpedIncidents(incident, userId){
	const allIncidentsUserHelped = [];
	const allyExists = incident.allies
	.map(ally => ally._id)
	.includes(userId);

	if (allyExists){
		allIncidentsUserHelped.push(incident);
	}
	return allIncidentsUserHelped;
}


function getAllAggressorsToDisplay(incident) {
	let names = "";
	incident.aggressors.forEach((aggressor, index) => {
	  names += aggressor.username;
	  if (index < incident.aggressors.length - 1) {
		names += ", ";
	  }
	});
	return names;
}

function getAllAlliesToDisplay(incident) {
	let names = "";
	incident.allies.forEach((ally, index) => {
	  names += ally.username;
	  if (index < incident.allies.length - 1) {
		names += ", ";
	  }
	});
	return names;
}
