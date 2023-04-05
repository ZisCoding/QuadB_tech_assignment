// importing express module
const express = require('express');
// defining the port number for server to listen
const port = 8000;
// importing the customized routes module/middleware
const routes = require('./routes/index.js');
// imprting mongoose config to connect use db
const db = require('./config/mongoose');
// importing  axios to make api call
const axios = require('axios');
// importing db model
const cryptoModel = require('./model/cryptoModel');
// importing ejs module
const ejs = require('ejs');
//firingup the express server
const app = express();
// setting the view engine to ejs
app.set('view engine',ejs);
// setting the path for the static files
app.use(express.static('./assets'));
// deleting all the documemnt already present in the db before fetching and inserting new data in db so that no duplicate document present in db
cryptoModel.deleteMany()
.catch((err)=>{
    console.error("error in deleting");
});

// fetching the data 
axios.get('https://api.wazirx.com/api/v2/tickers')
.then((response)=>{
    // slicing the top 10 result
    const data = Object.entries(response.data).slice(0,10);
    // looping over all the sliced elements
    data.forEach(element=>{
        // inserting each entry into the database
        cryptoModel.create({
            name: element[0],
            last: element[1].last,
            buy: element[1].buy,
            sell: element[1].sell,
            volume: element[1].volume,
            base_unit: element[1].base_unit
        })
        .catch((error)=>{
            console.error("Error in creating document",error)
        });
    });
    
});


// using the customized route module for all the routes
app.use('/',routes);


// telling server to listen at port 
app.listen(port , function(err){
    if(err){
        console.error('Error in running the server');
        return;
    }

    console.log(`Server is up and running at port: ${port}`);
});