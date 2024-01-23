const express = require("express");
const router = express.Router();
const contact = require("../Models/contactModels");

router.post("/addcontact", async (req, res) => {
  try {
    const newContact = {
      fullName: req.body.fullName,
      email: req.body.email,
      phoneNumbre: req.body.phoneNumbre,
      birthDate: req.body.birthDate,
    };
    const result = await contact.create(newContact);
    res.send({ msgg: " contact added !", result });
  } catch (error) {
    console.log(error);
    res.status(500).json("internal server error ", error);
  }
});
router.get("/getcontacts",async (req,res)=>{
    try{
        const result =await contact.find();
        res.send(result );
    }catch (error) {
        console.log(error);
        res.status(500).json("internal server error ", error);
      }
})

router.get("/getcontact/:id",async (req,res)=>{
    try{
        const id =req.params.id;
        const result =await contact.find({_id : id});
        res.send({msg:" contact affiche !", result });
    }catch (error) {
        console.log(error);
        res.status(500).json("internal server error ", error);
      }
})
router.delete("/deletecontact/:id",async (req,res)=>{
    try{
        const id =req.params.id;
        const result =await contact.findByIdAndDelete({_id : id});
        res.send({msg:" contact deleted !", result });
    }catch (error) {
        console.log(error);
        res.status(500).json("internal server error ", error);
      }
})

router.put("/updatecontact/:id",async (req,res)=>{
    try{
        const id =req.params.id;
        const result =await contact.findOneAndUpdate({_id : id},{$set:req.body},{new:true});
        res.send({msg:" contact updeted !", result });
    }catch (error) {
        console.log(error);
        res.status(500).json("internal server error ", error);
      }
})

module.exports = router;
