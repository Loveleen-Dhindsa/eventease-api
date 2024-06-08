const userService = require("../services/user.service");
const userController = {};
const { sendError } = require('../utils/errors.utils');


userController.create = async function (req, res, next) {
  var body = req.body;
  try {
    var response = await userService.create(body);
    res.json({ data: response, success: true });
  } catch (error) {
    console.log(error);
    sendError(res, error);
  }
};

userController.signup = async function (req, res, next) {
  var body = req.body;
  try {
    var response = await userService.signup(body);
    res.json({ data: response, success: true });
  } catch (error) {
    console.log(error);
    sendError(res, error);
  }
};


userController.login = async function (req, res, next) {
  var body = req.body;
  try {
    var response = await userService.login(body);
    res.json({ data: response, success: true });
  } catch (error) {
    console.log(error);
    sendError(res, error);
  }
};

module.exports = userController;



