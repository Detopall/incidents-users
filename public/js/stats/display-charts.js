"use strict";

export async function bestBystanderInfo(){
	const fetchedUsers = await getUsers();
	const bystanders = [];
	const amountHelped = [];
	for (const fetchedUser in fetchedUsers.users) {
		const user = fetchedUsers.users[fetchedUser];
		const fetchedIncidentsFromUser = await getAllHelpedIncidents(user._id);

	bystanders.push(`${user.username}`);
	amountHelped.push(fetchedIncidentsFromUser.incidents.length);
	}

	displayBarChartBystanders(bystanders, amountHelped);
}


function displayBarChartBystanders(bystanders, amountHelped) {
	const ctx = document.querySelector("#bar-chart-bystanders").getContext('2d');
	new Chart(ctx, {
		type: 'bar',
		data: {
			labels: bystanders,
			datasets: [{
				label: 'Amount: ',
				data: amountHelped,
				borderWidth: 2,
				backgroundColor: '#5B37DB'
			}]
		},
		options: {
			scales: {
				y: {
					beginAtZero: true
				}
			}
		},
	});
}


export async function mostFrequentTypeInfo(){
	const fetchedIncidents = await getAllIncidents();

	let result = {};
	const incidentTypes = [];
	const incidentAmount = [];
	for (let incident of fetchedIncidents.incidents) {
		if (result[incident.typeOfIncident]) {
			result[incident.typeOfIncident]++;
		} else {
			result[incident.typeOfIncident] = 1;
		}
	}
	
	for (const type in result) {
		incidentTypes.push(type);
		incidentAmount.push(result[type]);
	}

	displayPieChartBystanders(incidentTypes, incidentAmount);
}


function displayPieChartBystanders(listOfTypes, listOfFrequencies){
	const ctx = document.querySelector("#pie-chart-frequent-types").getContext('2d');
	new Chart(ctx, {
		type: 'pie',
		data: {
			labels: listOfTypes,
			datasets: [{
				label: 'Amount',
				data: listOfFrequencies,
			}]
		},
	});
}

