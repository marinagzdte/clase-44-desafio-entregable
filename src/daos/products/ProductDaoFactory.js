import MongoDbProductsDao from './MongoDbProductsDao.js'
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers'

const argv = yargs(hideBin(process.argv)).argv;
const option = argv.persistence || 'mongo';

let dao
switch (option) {
    case 'mongo':
        dao = new MongoDbProductsDao()
        break
    default:
        dao = new MongoDbProductsDao()
}

export default class PersonasDaoFactory {
    static getDao() {
        return dao
    }
}