"use strict";

checkLocalStorage();
displayIncidents();
displayUserinfo();

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


async function checkLocalStorage(){
	if (!localStorage.getItem("user")){
		localStorage.setItem("user", JSON.stringify(await getUser("63d6db1f0bcd04e6507f1cea")));
	}
}
