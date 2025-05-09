const {createLogger,format,transports} = require('winston')
const {combine,timestamp,label,printf} = format

const customFormat = printf(({level,timestamp,label,message})=>{
    return `${timestamp} : [${label}] : ${level} : ${message}`
})


const logger = createLogger({
    format:combine(
        label({label:"Right meow"}),
        timestamp({format:"YYYY-MM-DD HH:mm:ss"}),
        customFormat
    ),
    transports:[
        new transports.Console(),
        new transports.File({filename:"combined.log"})
    ]
})

module.exports = logger;