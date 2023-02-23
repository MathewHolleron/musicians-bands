const {sequelize} = require('./db');
const {Band, Musician} = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const band1 = new Band({name:'shinedown', genre:'rock'})
        expect(band1.name).toBe('shinedown');
    })

    test('can create a Musician', async () => {
        const singer1 = new Musician({name:'Dave groll'})
        expect(singer1.name).toBe('Dave groll');
    })

    test('should have many musicians', async () => {
        const band = await Band.create({ name: 'The Beatles', genre: 'Rock' });
        const musician1 = await Musician.create({ name: 'John Lennon', instrument: 'Guitar'});
        const musician2 = await Musician.create({ name: 'Paul McCartney', instrument: 'Bass'});
        await band.addMusician(musician1);
        await band.addMusician(musician2);
        const musicians = await band.getMusicians();
    
        expect(musicians.length).toBe(2);
        
    })

    test('should belong to a band', async () => {
        const band = await Band.create({ name: 'The Rolling Stones', genre: 'Rock' });
        const musician = await Musician.create({ name: 'Mick Jagger', instrument: 'Vocals'});
        await band.addMusician(musician);
        const musicianBand = await band.getMusicians();
        
        expect(musicianBand[0].name).toBe('Mick Jagger');
      });

});