const express = require('express');
const path = __dirname;
const host = "localhost";
const app = express();
const router = express.Router();
app.set('port', process.env.PORT || 4444);
router.use(function (req,res,next) {
next();
});

router.get('/', function(req, res){
res.sendFile(path + '/index.html');
}
);

app.use(express.static(__dirname + '/resources'));

app.use('/', router);
app.use( (req,res,next)=>{
res.end("<h1> 404 Not Found </h1>");
})

app.listen(app.get('port'), function(){

});