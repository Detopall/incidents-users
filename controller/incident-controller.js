const Incident = require("../models/Incident");

exports.createIncident = async (req, res) => {
	try {
		const incident = new Incident(req.body);
		await incident.save();
		res.send({data: incident});
	} catch (err) {
		console.error(err);
	}
}

exports.getIncidents = async (req, res) => {
	try {
		let incidents = await Incident.find().lean();
		res.send({incidents: incidents});
	} catch (err){
		console.error(err);
	}
}

exports.endIncident = async (req, res) => {
	const incidentId = req.params.incidentId;
	try {
		const modifiedIncident = await Incident.updateOne({'_id': incidentId},
		{$set :{'ended': true}});
		res.send({data: modifiedIncident});
	} catch (err) {
		console.error(err);
	}
}

