var express      =  require("express"),
    app          =  express();
    
    
app.set('view engine', 'hbs');
app.use(express.static(__dirname + "/public"));


app.get("/", function(req, res){
   res.render("index"); 
});


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The Weather App Server Has Started!");
});