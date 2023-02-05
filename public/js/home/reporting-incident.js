"use strict";

const incidentTypes = ["murder", "violence", "theft", "robbery", "burglary", "arson", "kidnapping", "assault", "bribery"];

async function reportIncident(e){
	if (!e.target.matches("#report-incident")) return;
	const user = JSON.parse(localStorage.getItem("user")).user;
	const body = {
		"reporterId": user._id,
		"typeOfIncident": getRandomIncidentType(),
		"aggressors": await getRandomAggressors(user._id),
		"ended": false
	}
	await createIncident(body);
	location.reload();
}

function getRandomIncidentType(){
	const randomNumber = Math.floor(Math.random() * incidentTypes.length);
	return incidentTypes[randomNumber];
}

async function getRandomAggressors(reporterId){
	const retrievedUsers = await getUsers();
	const usersWithoutReporter = retrievedUsers.users.filter(i => i._id !== reporterId);
	const maxUsers = usersWithoutReporter.length - 1;
	const randomCount = Math.floor(Math.random() * maxUsers) + 1;
	const randomUsers = [];

	for (let i = 0; i < randomCount; i++) {
		const randomIndex = Math.floor(Math.random() * usersWithoutReporter.length) | 0;
		randomUsers.push(usersWithoutReporter[randomIndex]);
		usersWithoutReporter.splice(randomIndex, 1);
	}
	return randomUsers;
}
