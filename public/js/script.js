"use strict";
import { bestBystanderInfo, mostFrequentTypeInfo } from "./stats/display-charts.js";

runOnPageLoad();
checkLocalStorage();

document.addEventListener("click", reportIncident);
document.addEventListener("click", userHelpsIncident);

async function checkLocalStorage(){
	if (!localStorage.getItem("user")){
		localStorage.setItem("user", JSON.stringify(await getUser("63d6e4d2daed6f5e371fee72")));
	}
}

function runOnPageLoad(){
	if (window.location.pathname === "/") {
		displayIncidents();
		displayUserinfo();
	} else if (window.location.pathname === "/statistics") {
		bestBystanderInfo();
		mostFrequentTypeInfo();
	} else if (window.location.pathname === "/history"){
		displayIncidentsHistory();
	}
}