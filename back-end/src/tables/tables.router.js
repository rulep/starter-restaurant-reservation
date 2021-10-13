/**
 * Defines the router for reservation resources.
 *
 * @type {Router}
 */

 const router = require("express").Router();
 const controller = require("./tables.controller");
 const methodNotAllowed = require("../errors/methodNotAllowed");
 
 router
   .route("/")
   .get(controller.list)
   .post(controller.create)
   .all(methodNotAllowed);
 
 router.route("/:tableId").get(controller.read).all(methodNotAllowed);
 
 router
   .route("/:tableId/seat")
   .put(controller.seat)
   .delete(controller.finishTable)
   .all(methodNotAllowed);
 
 module.exports = router;
 