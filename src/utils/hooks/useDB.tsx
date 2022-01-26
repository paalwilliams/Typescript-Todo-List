import { DB } from "../PouchDB";

let db = new DB()

const useDB = () => {
    return db;
}

export default useDB;
