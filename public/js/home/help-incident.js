"use strict";

async function userHelpsIncident(e){
	if (!e.target.matches(".help-incident") || e.target.closest("div") === null) return;
	const userId = JSON.parse(localStorage.getItem("user")).user._id;
	const incidentId = e.target.closest("div").getAttribute("id");
	
	await helpIncident(userId, incidentId);
	location.reload();
}

