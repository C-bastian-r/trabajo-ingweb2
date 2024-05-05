const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller")

router.post("/cards", (req, res)=>{
    controller.postCards(req, res);
})
 
router.get("/cards", (req, res)=>{
    controller.getCardsInfo(req, res)
})

router.get("/api", (req, res)=>{
    controller.getApiInfo(req, res);
})

router.get("/card/:id", (req, res)=>{
    controller.findById(req, res);
})

router.delete("/card/:id", (req, res)=>{
    controller.deleteById(req, res);
})


module.exports = router;