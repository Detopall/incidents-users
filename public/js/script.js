"use strict";
import { bestBystanderInfo, mostFrequentTypeInfo } from "./stats/display-charts.js";

runOnPageLoad();
checkLocalStorage();

document.addEventListener("click", reportIncident);

async function checkLocalStorage(){
	if (!localStorage.getItem("user")){
		localStorage.setItem("user", JSON.stringify(await getUser("63d6db1f0bcd04e6507f1cea")));
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