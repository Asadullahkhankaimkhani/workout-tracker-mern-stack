const router = require('express').Router();

let Excersie = require('../models/excersie.model');
// Defining Routers 
router.route('/').get((req,res) =>{
    Excersie.find()
    .then(excerise => res.json(excerise))
    .catch(err => res.status(400).json('Error' + err));
});
// Assigin Data to Router
router.route('/add').post((req , res)=> {
    const username = req.body.username;
    const description = req.body.description;
    const duaration =  Number(req.body.description);
    const date = Date.parse(req.body.date);


    const newExcerise = new Excersie(
        {
            username,
            description,
            duaration,
            date,
        }
    );

    newExcerise.save()
    .then(()=> res.json('Excerise Added'))
    .catch(err => res.status(400).json('Error' + err));
});



module.exports = router;
