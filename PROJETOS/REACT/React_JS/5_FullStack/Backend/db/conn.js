const { strict } = require("assert")
const mongoose = require("mongoose")

require("dotenv").config()

mongoose.set("strictQuery", true)

async function main() {
    await mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.vwm6scr.mongodb.net/`);

    console.log("OK")
}

main().catch((err) => console.log(err));

module.exports = main