const express=require("express");
const https=require("https");
const app=express();

app.get("/",function(req,res){
    const url="https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=2ac1eb05d60de438f580d45f560c0c18&units=metric";
    https.get(url,function(res){
        console.log(res.statusCode);
        res.on("data",function(data){
            const weatherData=JSON.parse(data);
            console.log(weatherData.main.temp);
            console.log(weatherData.weather[0].description);
           // res.write("<h1>The temperature in Delhi is:"+weatherData.main.temp+"degree Celsius</h1>");
            //res.send(weatherData.main.temp);

        })
    });
    res.send("Response sent from the server");

});

app.listen(3000,function(){
    console.log("listening to port 3000");
});