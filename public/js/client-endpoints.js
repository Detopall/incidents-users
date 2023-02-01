"use strict";

const URL = "http://localhost:3000";

//INCIDENTS ENDPOINTS

async function createIncident(body){
	return postPut(`${URL}/incidents/new`, createOptions(body, 'POST'));
}

async function getAllIncidents(){
	return get(`${URL}/incidents`);
}

async function getAllIncidentsActive(){
	return get(`${URL}/incidents?ended=false`);
}

async function endIncident(incidentId){
	return postPut(`${URL}/incidents/${incidentId}/end`, createOptions({}, 'POST'));
}

//USERS ENDPOINTS

async function registerUser(body){
	const user = await postPut(`${URL}/users/register`, createOptions(body, 'POST'));
	localStorage.setItem("user", JSON.stringify(user));
}

async function loginUser(body){
	const user = await postPut(`${URL}/users/login`, createOptions(body, 'POST'));
	localStorage.setItem("user", JSON.stringify(user));
}

async function helpIncident(userId, incidentId){
	return postPut(`${URL}/users/${userId}/incidents/${incidentId}/help`, createOptions({}, 'PUT'));
}

async function getAllReportedIncidents(userId){
	return get(`${URL}/users/${userId}/incidents/reported`);
}

async function getAllHelpedIncidents(userId){
	return get(`${URL}/users/${userId}/incidents/helped`);
}

async function getUser(userId){
	return get(`${URL}/users/${userId}`);
}

async function getUsers(){
	return get(`${URL}/users`);
}


//HELPER FUNCTIONS

async function get(url) {
    try {
        const fetchedResponse = await fetch(`${url}`);
        return await fetchedResponse.json();
    } catch (e) {
        console.error(e);
    }
    return null;
}

async function postPut(url, options) {
    try {
        const fetchedResponse = await fetch(`${url}`, options);
        return await fetchedResponse.json();
    } catch (e) {
        console.error(e);
    }
    return null;
}

function createOptions(body, method) {
    return {
        method: method,
        headers: {
            'Content-type': 'application/json',
			'Accept': '*/*'
        },
        body: JSON.stringify(body)
    };
}