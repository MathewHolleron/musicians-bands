const sequelize = require("sequelize")
const {Band} = require('./Band')
const {Musician} = require('./Musician')
const sequelize = require("./db.js")

async function main() {
    await sequelize.sync();

    await Band.create({
        name: "ACDC",
        Genre: "rock",
    });

    await Musician.create({
        name:"john",
        instrument:"guitar",
    });
}

main();






module.exports = {
    Band,
    Musician
};

