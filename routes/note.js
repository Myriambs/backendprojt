const express = require('express')
const noteRoute = express.Router();
const noteSchema = require('../model/note')

//route get 
//=>http://localhost:5002/note/getAll
noteRoute.get('/getAll',async(req,res)=>{
    try{
  const getAllNote = await noteSchema.find()
  res.status(200).send({ msg:"voici la listes des notes",getAllNote})
    }catch(err){
        console.log(err)
    }
})
 //partie Add 
 ////=>http://localhost:5002/note/addNote

noteRoute.post('/addNote',async(req,res)=>{
    try {
        const newNote = new noteSchema(req.body);
        const savedNote = await newNote.save();
        res.status(200).json({ message: "Note ajoutée avec succès", savedNote });

    } catch (err) {

        console.error("Erreur lors de l'ajout de la note:", err);
        res.status(500).json({ message: "Erreur serveur lors de l'ajout de la note", error: err.message });
    }
})

//update selon Id 
// http://localhost:5002/note/update/:id
noteRoute.put("/update/:id",(req,res)=>{
    try{
const {id} = req.params
const getUniqueUpdate = noteSchema.findByIdAndUpdate(id,{$set:{...req.body}})

res.status(200).send({ msg:"voici la new note  ",getUniqueUpdate})

    }catch(err){
        console.log(err)
    }
})

// http://localhost:5002/note/getunique/:id
noteRoute.get("/getunique/:id",async(req,res)=>{
    try{
const {id} = req.params
const getunique = await  noteSchema.findById(id)

res.status(200).send({ msg:"voici la new note  ",getunique})

    }catch(err){
        console.log(err)
    }
})

// http://localhost:5002/note/remove/:id
noteRoute.delete("/remove/:id",async(req,res)=>{
    try{
const {id} = req.params
const removeNote =  await noteSchema.findByIdAndDelete(id)

res.status(200).send({ msg:"el remove khidmit   "})

    }catch(err){
        console.log(err)
    }
})

module.exports = noteRoute


