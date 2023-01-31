"use strict";

async function displayIncidents(){
	let html = "";
	const allIncidents = await getAllIncidentsActive();
	html = injectAllIncidentsInHTML(allIncidents, html);
	document.querySelector(".active-incidents").insertAdjacentHTML("beforeend", html);
}

function injectAllIncidentsInHTML(allIncidents, html){
	allIncidents.incidents.forEach(incident => {
		html += `
		<div id="${incident._id}">
			<h3> ReporterId: ${incident.reporterId}</h3>
			<p> Type of incident: ${incident.typeOfIncident}</p>
			<p> aggressors: ${getAllAggressorsToDisplay(incident)} </p>
		</div>`;
	});
	return html;
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
