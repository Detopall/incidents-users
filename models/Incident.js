const mongoose = require("mongoose");

const IncidentSchema = new mongoose.Schema({
	reporterId: {
		type: String,
		required: true
	},
	typeOfIncident: {
		type: String,
		required: true
	},
	aggressors: {
		type: Array,
		required: true
	},
	allies: {
		type: Array
	},
	ended: {
		type: Boolean,
		required: true
	}
});

module.exports = mongoose.model('Incident', IncidentSchema);