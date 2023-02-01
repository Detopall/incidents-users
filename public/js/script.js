"use strict";
import { bestBystanderInfo, mostFrequentTypeInfo } from "./stats/display-charts.js";

runOnPageLoad();

document.addEventListener("click", reportIncident);
document.addEventListener("click", changeState);
document.addEventListener("click", registerUserClient);
document.addEventListener("click", loginUserClient);


function runOnPageLoad(){
	if (window.location.pathname === "/") {
		displayIncidents();
		displayUserinfo();
	} else if (window.location.pathname === "/statistics") {
		bestBystanderInfo();
		mostFrequentTypeInfo();
	} else if (window.location.pathname === "/history"){
		displayIncidentsHistory();
	} else if (window.location.pathname === "/auth"){
		localStorage.removeItem("user");
	}
}
