const express = require("express");
const router = express.Router();
const incidentController = require("../controller/incident-controller");
const UserController = require("../controller/user-controller");

//INCIDENT ROUTES
router.post('/incidents/new', incidentController.createIncident);
router.get('/incidents', incidentController.getIncidents);
router.put('/incidents/:id/end', incidentController.endIncident);

module.exports = router;
