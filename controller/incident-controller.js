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
		if (Object.keys(req.query).length === 0){
			let incidents = await Incident.find().lean();
			res.send({incidents: incidents});
		} else {
			let incidents = await Incident.find({'ended': req.query.ended}).lean();
			res.send({incidents: incidents.reverse()});
		}
		
	} catch (err){
		console.error(err);
	}
}

