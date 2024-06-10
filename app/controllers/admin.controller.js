const userService = require("../services/user.service");
const adminController = {};
const { sendError } = require('../utils/errors.utils');

adminController.getAll = async function (req, res) {
    try {
        var response = await userService.getAll();
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

adminController.getSingleUser = async function (req, res, next) {
    var id = req.params.id;
    try {
        var response = await userService.getSingleUser(id);
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};


adminController.create = async function (req, res, next) {
    var body = req.body;
    try {
        var response = await userService.create(body);
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

adminController.update = async function (req, res, next) {
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

adminController.deleteUser = async function (req, res, next) {
    var id = req.params.id;
    try {
        var response = await userService.deleteUser(id);
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

module.exports = adminController;



