const {sequelize} = require("./db.js")
const {Band} = require('./Band')
const {Musician} = require('./Musician')


Band.hasMany(Musician);
Musician.belongsTo(Band);

// async function main() {
//     await sequelize.sync();

//     await Band.create({
//         name: "ACDC",
//         genre: "rock",
//     });

//     await Musician.create({
//         name:"john",
//         instrument:"guitar",
//     });
// }

// main();






module.exports = {
    Band,
    Musician
};

