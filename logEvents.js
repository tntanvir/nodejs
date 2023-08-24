const { format } = require('date-fns')
const { v4: uuid } = require('uuid')

const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

const logEvents = async (massage) => {
    const newDate = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`
    const newItem = `${newDate}\t${uuid()}\t${massage}`
    console.log(newItem);
    try {
        if (!fs.existsSync(path.join(__dirname, "loges"))) {
            await fsPromises.mkdir(path.join(__dirname, "loges"))
        }
        await fsPromises.appendFile(path.join(__dirname, "loges", 'loges.txt'), newItem)
    } catch (error) {
        console.log(error);

    }
}

module.export = logEvents;