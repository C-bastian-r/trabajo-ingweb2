const express = require("express");
const router = express.Router();


const controller = require("../controllers/controller")

router.get("/hola", (req, res)=>{
    controller.hola(req, res);
});

router.post("/cards", (req, res)=>{
    controller.postCards(req, res);
})

router.get("/cards", (req, res)=>{
    controller.getCardsInfo(req, res)
})

module.exports = router;