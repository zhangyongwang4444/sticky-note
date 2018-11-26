const path = require('path')
const Sequelize = require('sequelize');
const sequelize = new Sequelize(undefined, undefined, undefined, {
    host: 'localhost',
    dialect: 'sqlite',
    operatorsAliases: false,
    storage: path.join(__dirname, '../database/database.sqlite')
});
/*
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
*/

// id hello UID time1  time2 
const Note = sequelize.define('note', {
    text: {
        type: Sequelize.STRING
    },
    uid: {
        type: Sequelize.STRING
    }
});

// Note.sync({ force: true })
/*
Note.sync().then(() => {
    return Note.create({
        text: 'hello world!'
    });
}).then(() => {
    Note.findAll({ raw: true }).then(notes => {
        console.log(notes)
    })
})
*/


// Note.findAll({ raw: true, where: { id: 2 } }).then(notes => {
//     console.log(notes)
// })

module.exports = Note