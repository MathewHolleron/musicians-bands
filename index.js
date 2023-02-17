const sequelize = require("sequelize")
const {Band} = require('./Band')
const {Musician} = require('./Musician')

module.exports = {
    Band,
    Musician
};

sequelize.sync()
.then((result) => {
    console.log(result);
})
.catch((err) =>{
    console.log(err);
});