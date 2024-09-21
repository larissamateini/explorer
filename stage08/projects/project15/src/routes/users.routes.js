const { Router } = require("express");

const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const UsersController = require("../controllers/usersController");

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.post('/', usersController.create);
usersRoutes.put('/', ensureAuthenticated, usersController.update);

module.exports = usersRoutes;