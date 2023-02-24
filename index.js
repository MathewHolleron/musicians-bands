const {sequelize} = require("./db.js")
const {Band} = require('./Band')
const {Musician} = require('./Musician')
const {Song} = require('./song')



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
//     await Song.create({
//         title:'hangman',
//         year: 2019,
//     });
        
// }

// main();




Band.hasMany(Musician);
Musician.belongsTo(Band);
Song.belongsToMany(Band,{through:'song_bands'})
Band.belongsToMany(Song,{through:'song_bands'})

module.exports = {
    Band,
    Musician,
    Song
};

