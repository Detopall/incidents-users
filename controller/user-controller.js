const User = require("../models/User");
const Incident = require("../models/Incident");
const bcrypt = require('bcryptjs');

exports.createUser = async (req, res) => {
	if (await usernameAlreadyExists(req)) return;
	const user = new User(req.body);
	await user.save();
	res.send({user: user});
}

async function usernameAlreadyExists(req){
	const username = req.body.username;
	const users = await User.find({"username": username}).lean();
	return users.length >= 1;
}

exports.loginUser = async (req, res) => {
	if (!await usernameAlreadyExists(req)) return;
	if (!await validPassword(req)) return;
	console.log(`${req.body.username} is logged in`);
	res.send({loggedIn: req.body.username});
}

async function validPassword(req){
	const user = await User.find({"username": req.body.username}).lean();
	return bcrypt.compareSync(req.body.password, user[0].password);
}

exports.helpIncident = async (req, res) => {
	const userId = req.params.userId;
	const incidentId = req.params.incidentId;
	if (await helperIsAggressor(userId, incidentId) || await incidentIsEnded(incidentId) || await alreadyHelped(userId, incidentId) || await helperIsReporter(userId, incidentId) || await checkIfRealUser(userId)) return;
	
	const user = await User.findById({"_id": req.params.userId}, {"password": 0});

	const modifiedIncident = await Incident.updateOne(
		{'_id': incidentId},
		{$push: {allies: user}});
	res.send({data: modifiedIncident});
}

async function incidentIsEnded(incidentId) {
	return await Incident.find({$and: [{"ended": true}, {"_id": incidentId}]}).length >= 1;
}

async function helperIsAggressor(userId, incidentId){
	const incident = await Incident.findById({"_id": incidentId});
	if (!incident) return true;
	return incident.aggressors.includes(userId);
}

async function checkIfRealUser(userId){
	return !await User.findById({"_id": userId});
}

async function alreadyHelped(userId, incidentId){
	const incident = await Incident.findById({"_id": incidentId});
	return incident.allies.includes(userId);
}

async function helperIsReporter(userId, incidentId){
	const incident = await Incident.findById({"_id": incidentId});
	return incident.reporterId === userId;
}

exports.getHelpedIncidents = async (req, res) => {
	const allIncidents = await Incident.find().lean();
	const user = await User.findById({"_id": req.params.userId}, {"password": 0});
	res.send({incidents: insertHelpedIncidents(allIncidents, user)});
}

function insertHelpedIncidents(allIncidents, user){
	const allIncidentsUserHelped = [];
	allIncidents.forEach(incident => {
		const allyExists = incident.allies
		.map(ally => ally.username)
		.includes(user.username);

		if (allyExists){
			allIncidentsUserHelped.push(incident);
		}
	});
	return allIncidentsUserHelped;
}

exports.getReportedIncidents = async (req, res) => {
	const allIncidentsUserReported = await Incident.find({"reporterId": `${req.params.userId}`});
	res.send({incidents: allIncidentsUserReported});
}

exports.getUser = async (req, res) => {
	const user = await User.findById({"_id": req.params.userId}, {"password": 0});

	console.log(user);
	res.send({user: user});
}

exports.getUsers = async (req, res) => {
	const users = await User.find({}, {"password": 0}).lean();
	res.send({users: users});
}
