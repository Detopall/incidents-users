const express = require("express");
const router = express.Router();
const incidentController = require("../controller/incident-controller");
const userController = require("../controller/user-controller");

//INCIDENT ROUTES
router.post('/incidents/new', incidentController.createIncident);
router.get('/incidents', incidentController.getIncidents);
router.put('/incidents/:id/end', incidentController.endIncident);


//USERS ROUTES
router.post('/users/register', userController.createUser);
router.post('/users/login', userController.loginUser);

module.exports = router;
