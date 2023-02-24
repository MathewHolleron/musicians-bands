const {sequelize} = require('./db');
const {Band, Musician, Song} = require('./index')

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

      test("can create a multiple to multiple relationship between bands and songs and create songs", async function() {
        
        const song1 = await Song.create({title:'song1', year:2010});
        const song2 = await Song.create({title:'song2', year:2010});
        const band1 = await Band.findByPk(1);
        console.log(band1);
        const band2 = await Band.findByPk(2);
        await band1.addSong([1,2]);
        await band2.addSong([1,2]);
        const song = await band1.getSongs();
        expect(song[0].title).toBe("song1");
        expect(song[1].title).toBe("song2");
        expect(song[0].year).toBe(2010);
        expect(song[1].year).toBe(2010);
    })
});

//     describe('eager loading', () => {
//         beforeEach(async () => {
//           // Create some bands, musicians, and songs for testing
//           const band1 = await Band.create({ name: 'The Beatles', genre: 'Rock' });
//           const band2 = await Band.create({ name: 'The Rolling Stones', genre: 'Rock' });
    
//           const musician1 = await Musician.create({ name: 'John Lennon', instrument: 'Guitar'});
//           const musician2 = await Musician.create({ name: 'Paul McCartney', instrument: 'Bass'});
//           const musician3 = await Musician.create({ name: 'Mick Jagger', instrument: 'Vocals'});
    
//           const song1 = await Song.create({ title: 'Yesterday', year:2010});
//           const song2 = await Song.create({ title: 'Let It Be', year:2010});
//           const song3 = await Song.create({ title: 'Satisfaction', year:2010});
//           await sequelize.sync({ force: true });
//         });
//     test('should eagerly load musicians', async () => {
//         const bands = await Band.findAll({
//           include: [{ model: Musician, as:'artist' }],
//         });
  
//         expect(bands.length).toBe(2);
  
//         expect(bands[0].Musicians.length).toBe(2);
//         expect(bands[0].Musicians[0].name).toBe('John Lennon');
//         expect(bands[0].Musicians[1].name).toBe('Paul McCartney');
  
//         expect(bands[1].Musicians.length).toBe(1);
//         expect(bands[1].Musicians[0].name).toBe('Mick Jagger');
//       });
  
//       test('should eagerly load songs', async () => {
//         const bands = await Band.findAll({
//           include: [{ model: Song, as:'discography' }],
//         });
  
//         expect(bands.length).toBe(2);
  
//         expect(bands[0].Songs.length).toBe(2);
//         expect(bands[0].Songs[0].title).toBe('Yesterday');
//         expect(bands[0].Songs[1].title).toBe('Let It Be');
  
//         expect(bands[1].Songs.length).toBe(1);
//         expect(bands[1].Songs[0].title).toBe('Satisfaction');
//       });

// });