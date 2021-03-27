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


    const newExcerise = new Excersie({username,description,duaration,date});

    newExcerise.save()
    .then(()=> res.json('Excerise Added'))
    .catch(err => res.status(400).json('Error' + err));
});
// Find By Id
router.route('/:id').get((req,res) => {
    Excersie.findById(req.params.id)
    .then(excerise => res.jsonp(excerise))
    .catch(err => res.status(400).json('Error' + err));
});
// Deletting Request
router.route('/:id').delete((req,res) => {
    Excersie.findByIdAndDelete(req.params.id)
    .then(excerise => res.jsonp(excerise))
    .catch(err => res.status(400).json('Error' + err));
});
//  Update Request
router.route('/update/:id').post((req,res)=>{
    Excersie.findById(req.params.id)
    .then(excerise => {
        excerise.username = req.body.username;
        excerise.description = req.body.description;
        excerise.duaration = Number(req.body.duaration);
        excerise.date = Date.parse(req.body.date);

        excerise.save()
        .then(() => res.json('Excise Updated'))
        .catch(err => res.status(400).json('Error' + err));
        })
        .catch(err => res.status(400).json('Error' + err));
});
module.exports = router;
