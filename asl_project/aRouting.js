const express=require('express');
const app=express();

app.get('/', (request, response)=>{
	response.send('Home page, GET....');
});


app.listen(3000);