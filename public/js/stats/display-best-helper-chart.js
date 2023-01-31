"use strict";

bestBystanderInfo();


async function bestBystanderInfo(){
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
