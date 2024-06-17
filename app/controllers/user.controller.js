const userService = require("../services/user.service");
const userController = {};
const { sendError } = require('../utils/errors.utils');

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

userController.updateAccount = async function (req, res, next) {
  var id = req.params.id;
  var body = req.body;

  try {
    var response = await userService.update(id, body);
    res.json({ data: response, success: true });
  } catch (error) {
    console.log(error);
    sendError(res, error);
  }
};

module.exports = userController;



