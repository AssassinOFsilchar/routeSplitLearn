import express from "express"; 
import {
  addUser,
  delUser,
  findItById,
  getAllUsers,
  special,
  updateById,
} from "../controllers/user.js";
 
const router = express.Router(); 
router.get("/all", getAllUsers);
router.post("/new", addUser);
router.get("/userid/special", special); 
router.route("/userid/:id").get(findItById).put(updateById).delete(delUser); 

export default router;
 