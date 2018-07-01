const lowdb = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const db = new FileSync('./database/db.json')

module.exports = {

    write: (key, value) => {

        db.set(key, value).write()

    },

    getValue: (key, object) => {
        return db.get(key).find(object).value()
    },

    checkValue: (key) => {
        db.has(key).value()
    }, 

    removeValue: () => {
        
    }


}