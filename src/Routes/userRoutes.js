const express = require("express");
const User = require("../Models/User");
const router = express.Router();
// GET : Liste des utilisateurs
router.get("/", async (req, res) => {
 const users = await User.find();
 res.json(users);
});
// POST : Ajouter un utilisateur
router.post("/", async (req, res) => {
 const user = new User(req.body);
 await user.save();
 res.status(201).json(user);
});
// GET : Récupérer un utilisateur par ID
router.get("/:id", async (req, res) => {
 const user = await User.findById(req.params.id);
 res.json(user);
});
// PUT : Mettre à jour un utilisateur
router.put("/:id", async (req, res) => {
 const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true
});
 res.json(user);
});
// DELETE : Supprimer un utilisateur
router.delete("/:id", async (req, res) => {
 await User.findByIdAndDelete(req.params.id);
 res.status(204).send();
});
module.exports = router;