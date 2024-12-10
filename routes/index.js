var express = require('express');
var router = express.Router();

let userModel = require('./users')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
router.get('/search', function(req, res) {
  res.render('search');
});
router.get('/delete', function(req, res) {
  res.render('delete');
});


router.post("/create", async(req,res)=>{
  await inputModel.create({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password,
    contact:req.body.contact
 })
  res.send('Created successful')
})



router.get('/update', function(req, res) {
  res.render('update');
});
router.get('/showdata', function(req, res) {
   let data = userModel.find()

   res.send(data)

});

module.exports = router;
