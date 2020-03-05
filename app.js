
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const adminRoute = require('./routes/admin');
const shopRoute =require('./routes/shop');


app.use(bodyParser.urlencoded({extended: false}));//registers a middleware call next in the end and does whole parsing
app.use(express.static(path.join(__dirname,'public')));
app.use('/admin',adminRoute);
app.use(shopRoute);

app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'view','404notfound.html'));
});
app.listen(3100);




/* redirecting according to the  page 
app.use('/product_page', (req,res,next)=> {
    console.log("In the product page");
    res.send("This is your product");
});
 
*/



/* first use of use function:
app.use((req,res,next) => {
    console.log('In the first Middleware');
    next(); // allows to funnel to next funnel of middleware.
});


app.use((req,res,next) => {
    console.log('In the second Middleware');
    res.send("elco back to eve");

});
*/
// you dont need to write this code as express gives a very simple way
/*
const server= http.createServer(app);
server.listen(3100); */