const {
  createUser,
  getUserById,
  getUsers,
  updateUsers,
  updateUsersStatus,
  updateUsersVerified,
  deleteUser,
  login } = require("./user.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/signup", createUser);
router.get("/all", checkToken, getUsers);
router.get("/",  getUsers);
router.get("/:id",  getUserById);
router.put("/update/:id",  updateUsers);
router.put("/updateverified/:id",  updateUsersVerified);
router.put("/updatestatus/:id",  updateUsersStatus);
router.delete("/",  deleteUser);
router.post("/login", login);

module.exports = router;
