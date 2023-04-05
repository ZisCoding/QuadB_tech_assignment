// importing db model
const cryptoModel = require('../model/cryptoModel');

module.exports.home = (req,res)=>{
    // finding all the entries inside the db
    cryptoModel.find()
    // if data founded then rendering the home page with data
    .then((data)=>{
        res.render('index.ejs',{
            data:data
        });
    })
    // if any error in finding the data the rendring the error [page]
    .catch((error)=>{
        console.error("Error in finding data",error);
        res.render('error404.ejs');
    })

    
}

