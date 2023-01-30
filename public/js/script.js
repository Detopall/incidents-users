"use strict";

checkLocalStorage();
displayIncidents();

const incidentTypes = ["murder", "violence", "theft", "robbery", "burglary", "arson", "kidnapping", "rape", "assault", "bribery"];

const handlers = {
    '#report-incident': reportIncident,
};

document.addEventListener('click', (e) => {
    for (const selector in handlers) {
        if (e.target.matches(selector)) {
            handlers[selector](e);
            break;
        }
    }
});

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
	const randomCount = Math.floor(Math.random() * maxUsers) + 1;
	const randomUsers = [];

	for (let i = 0; i < randomCount; i++) {
		const randomIndex = Math.floor(Math.random() * maxUsers);
		randomUsers.push(usersWithoutReporter[randomIndex]);
		usersWithoutReporter.splice(randomIndex, 1);
	}

	return randomUsers;
}


async function checkLocalStorage(){
	if (!localStorage.getItem("user")){
		localStorage.setItem("user", JSON.stringify(await getUser("63d6db1f0bcd04e6507f1cea")));
	}
}
