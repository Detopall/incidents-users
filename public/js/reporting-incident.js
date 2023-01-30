"use strict";

async function reportIncident(e){
	const user = JSON.parse(localStorage.getItem("user")).user;
	const body = {
		"reporterId": user._id,
		"typeOfIncident": getRandomIncidentType(),
		"aggressors": await getRandomAggressors(user._id),
		"ended": false
	}
	console.log(body);
	console.log(await createIncident(body));
}

function getRandomIncidentType(){
	const randomNumber = Math.floor(Math.random() * incidentTypes.length);
	return incidentTypes[randomNumber];
}

async function getRandomAggressors(reporterId){
	const retrievedUsers = await getUsers();
	const usersWithoutReporter = retrievedUsers.users.filter(i => i._id !== reporterId);
	const maxUsers = usersWithoutReporter.length;
	const randomCount = Math.floor(Math.random() * maxUsers + 1);
	const randomUsers = [];


	for (let i = 0; i < randomCount; i++) {
		const randomIndex = Math.floor(Math.random() * maxUsers - 1);
		randomUsers.push(usersWithoutReporter[randomIndex]);
		usersWithoutReporter.splice(randomIndex, 1);
	}
	return randomUsers;
}
