const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");

const authCtrl = require("../middlewares/auth");
const queryCtrl = require("../controllers/queryController");


router.post("/signUp", userCtrl.signUp);
router.post("/logIn", userCtrl.logIn);

router.post("/form", queryCtrl.createQuery);
router.get("/admin/queries", authCtrl.auth, authCtrl.isAdmin, queryCtrl.getAllQueries);
router.put("/admin/queries/:id/status", authCtrl.auth, authCtrl.isAdmin, queryCtrl.updateQueryStatus);






module.exports = router;