const express = require("express");
const router = express.Router();
const incidentController = require("../controller/incident-controller");
const userController = require("../controller/user-controller");


//PAGES ROUTES
router.get('/', async (req, res) => {res.render('auth')})


//INCIDENT ROUTES
router.post('/incidents/new', incidentController.createIncident);
router.get('/incidents', incidentController.getIncidents);
router.put('/incidents/:incidentId/end', incidentController.endIncident);


//USERS ROUTES
router.post('/users/register', userController.createUser);
router.post('/users/login', userController.loginUser);
router.put('/users/:userId/incidents/:incidentId/help', userController.helpIncident);
router.get('/users/:userId/incidents/helped', userController.getHelpedIncidents);
router.get('/users/:userId', userController.getUser);
router.get('/users', userController.getUsers);

module.exports = router;
