const { readDb, writeDb } = require("./db_function");
 
const dataObj = {
    name: 'Carl',
    favorite_hobbies: ['surfing', 'basketball']

}

// writeDb(dataObj)

const saved_data = readDb()

saved_data['height'] = 189

writeDb(saved_data)

console.log(readDb())