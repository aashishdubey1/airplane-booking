const {ServerConfig} = require('./config')
const express = require('express');
const app = express();

const apiRoutes = require('./routes')

app.use('/api',apiRoutes)


app.listen(ServerConfig.PORT,()=>{
    console.log(`Server is Running or PORT ${ServerConfig.PORT}`)
    // Logger.info("Successfully started the server",{})
})