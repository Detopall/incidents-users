"use strict";

async function displayIncidentsHistory(){
	if (!userAuthenticated()) return;
	
	const userId = JSON.parse(localStorage.getItem("user")).user._id;
	
	const fetchedReported = await getAllReportedIncidents(userId);
	const fetchedHelped = await getAllHelpedIncidents(userId);
	const incidentsReported = document.querySelector("#incidents-reported");
	const incidentsHelped = document.querySelector("#incidents-helped");
	
	displayIncidentsHistoryTemplate(fetchedHelped, incidentsHelped);
	displayIncidentsHistoryTemplate(fetchedReported, incidentsReported);
}

function displayIncidentsHistoryTemplate(fetchedIncidents, htmlLocation){
	let html = "";
	if (fetchedIncidents.incidents.length === 0){
		html += "<h2> There are no incidents</h2>";
		htmlLocation.insertAdjacentHTML("beforeend", html);
		return;
	}

	fetchedIncidents.incidents.forEach(incident => {
		html +=
		`<div id="${incident._id}">
			<h4> - Type of incident: ${incident.typeOfIncident}</p>
			<p> aggressors: ${getAllAggressorsToDisplay(incident)} </p>
			<p> allies: ${getAllAlliesToDisplay(incident)} </p>
		</div>`;
	});

	htmlLocation.insertAdjacentHTML("beforeend", html);
}
