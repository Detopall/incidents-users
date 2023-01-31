"use strict";

const domSelectorsWaitForLoad = [".user-info", ".active-incidents"];

const incidentTypes = ["murder", "violence", "theft", "robbery", "burglary", "arson", "kidnapping", "rape", "assault", "bribery"];

const handlers = {
    '#report-incident': reportIncident,
};

checkRunOnLoad();
checkLocalStorage();

document.addEventListener('click', (e) => {
    for (const selector in handlers) {
        if (e.target.matches(selector)) {
            handlers[selector](e);
            break;
        }
    }
});


async function checkLocalStorage(){
	if (!localStorage.getItem("user")){
		localStorage.setItem("user", JSON.stringify(await getUser("63d6db1f0bcd04e6507f1cea")));
	}
}

function checkRunOnLoad(){
	let amount = 0;
	for (let i = 0; i < domSelectorsWaitForLoad.length; i++) {
		if (document.querySelector(domSelectorsWaitForLoad[i])) {
            amount++;
        }
	}

	if (amount === domSelectorsWaitForLoad.length){
		displayIncidents();
		displayUserinfo();
	}
}