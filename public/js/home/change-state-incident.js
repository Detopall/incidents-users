"use strict";


async function changeState(e){
	const userId = JSON.parse(localStorage.getItem("user")).user._id;
	const incidentId = e.target.closest("div").getAttribute("id");


	if (e.target.matches(".end-incident") && e.target.closest("div") !== null){
		await endIncident(userId, incidentId);
		location.reload();
	} else if (e.target.matches(".help-incident") && e.target.closest("div") !== null){
		await helpIncident(userId, incidentId);
		location.reload();
	}

}
