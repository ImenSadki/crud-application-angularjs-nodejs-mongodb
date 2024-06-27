var express = require ('express') ;
var server = express();
var routes = require ('./routes/routes');
//permettre de connecter  ala db
var mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect("mongodb://localhost:27017/entrep", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connected !!!!");
    })
    .catch((error) => {
        console.error("error ", error);
    });



server.use(express.json());
server.use(routes);
server.use(cors(
   // origin: 'http://localhost:4200'  //
));

server.listen(8000,function check(error) {   
    if(error){
        console.log ("error");
    }
    else
    {
        console.log ("started")
    }
});

