const express = require("express");
const router = express.Router();
const incidentController = require("../controller/incident-controller");
const userController = require("../controller/user-controller");


//PAGES ROUTES
router.get('/', async (req, res) => {res.render('home')});
router.get('/home', async (req, res) => {res.redirect('/')});
router.get('/statistics', async (req, res) => {res.render('statistics')});
router.get('/history', async (req, res) => {res.render('history')});
router.get('/auth', async (req, res) => {res.render('auth')});


//INCIDENT ROUTES
router.post('/incidents/new', incidentController.createIncident);
router.get('/incidents', incidentController.getIncidents);


//USERS ROUTES
router.get('/users', userController.getUsers);
router.get('/users/:userId', userController.getUser);
router.post('/users/register', userController.createUser);
router.post('/users/login', userController.loginUser);
router.put('/users/:userId/incidents/:incidentId/help', userController.helpIncident);
router.put('/users/:userId/incidents/:incidentId/end', userController.endIncident);
router.get('/users/:userId/incidents/helped', userController.getHelpedIncidents);
router.get('/users/:userId/incidents/reported', userController.getReportedIncidents);

module.exports = router;
