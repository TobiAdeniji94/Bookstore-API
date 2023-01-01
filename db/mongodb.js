const mongoose = require('mongoose')
const CONFIG = require("../config/config")
const logger = require('../logging/logger')

function connectToDB() {
    mongoose.set("strictQuery", false)
    mongoose.connect(CONFIG.MONGODB_URL)

    mongoose.connection.on("connected", () => {
        logger.info("Mongodb connected successfully")
    })

    mongoose.connection.on("error", (err) => {
        logger.error(`An error occured. The error was ${err}`)
    })
}

module.exports = connectToDB