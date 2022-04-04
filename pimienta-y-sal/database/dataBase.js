let fs = require('fs');

module.exports = {
    getMenu : JSON.parse(fs.readFileSync('./database/menu.json', 'utf-8')),
    writeJson : (dataBase) => {
        fs.writeFileSync('./database/menu.json', JSON.stringify(dataBase), "utf-8")
    },
}

