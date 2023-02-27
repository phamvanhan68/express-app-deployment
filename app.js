const express = require('express');
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

app.get('/', (req, res)=>{
	res.status(200);
	res.send(`Welcome to root URL of Server Verson 2.1, Using Port ${PORT} and Env ${NODE_ENV}`);
});

app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running, and App is listening on port: "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);
