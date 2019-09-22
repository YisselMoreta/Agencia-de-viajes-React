const express = require ('express');
const router = express.Router();
const Model = require ('../models/model.js');

router.get('/', async (req, res)=>{
    const models = await Model.find();
    res.json(models);
});
router.get('/:id', async (req, res)=>{
  const model = await  Model.findById(req.params.id);
  res.json(model);
});
router.post('/', async (req, res)=>{
    const {user, password}= req.body;
    const model =new Model({user, password});
    await model.save();
    res.json({status: 'Usuario guardado!'});
});
router.put('/:id', async (req, res)=>{
    const { user, password} = req.body;
    const newModel = { user, password};
    await Model.findByIdAndUpdate(req.params.id, newModel);
    res.json({status: 'Usuario actualizado'});
});
router.delete('/:id', async (req, res)=>{
   await Model.findByIdAndRemove(req.params.id);
   res.json({status: 'Usuario eliminado'});
});




module.exports = router;