import PouchDBFind from 'pouchdb-find';
import { v4 as uuid } from 'uuid';
const PouchDB = require('pouchdb').default;
PouchDB.plugin(PouchDBFind);

export class DB {
    private name: string;
    private db: typeof PouchDB

    constructor() {
        this.name = 'todo_list';
        this.db = new PouchDB('todo_list');
        this.db.createIndex({
            fields: ['type', 'laneId']
        })
        this.getItemsForLane = this.getItemsForLane.bind(this);
        this.createLane = this.createLane.bind(this);
        this.getLanesFromDB = this.getLanesFromDB.bind(this);
        this.transformLane = this.transformLane.bind(this);
        this.getLaneItem = this.getLaneItem.bind(this);
        this.createLaneItem = this.createLaneItem.bind(this)
    }


    public async getItemsForLane(laneId: string): Promise<any> {
        try {
            let items = await this.db.find({
                selector: {
                    laneId
                }
            })
            console.log(items)
            return items.docs;
        } catch (e) {
            console.log(e);
        }
    }

    public async createLaneItem(laneId: string, text: string): Promise<any> {
        try {
            let item = await this.db.post({
                laneId,
                text: text,
                type: "lane-item"
            })
            let createdLaneItem = await this.getLaneItem(item._id);
            return createdLaneItem;
        } catch (e: any) {
            console.log(e);
        }
    }

    public async createLane(title: string): Promise<any> {
        try {
            const { id } = await this.db.post({
                "title": title,
                "type": "lane",
            })
            const lane = await this.getLaneById(id);
            return lane;
        }
        catch (e: any) {
            console.log(e);
        }
    }

    public async getLaneById(laneId: string) {
        try {
            const lane = await this.db.get(laneId)
            return lane;
        }
        catch (e) {
            console.log(e);
        }
    }

    async getLanesFromDB(): Promise<any> {
        let lanes: any = await this.db.find({
            selector: {
                type: "lane"
            }
        })
        let convertedLanes = this.transformLane(lanes.docs)
        return convertedLanes;
    }

    async getLaneItem(laneItemId: string): Promise<any> {
        try {
            let laneItem: any = await this.db.get(laneItemId)
            return laneItem;
        } catch (e) {
            console.log(e)
        }

    }

    transformLane(lanes: any[]) {

        var laneObj = lanes.reduce(
            (obj, item) => Object.assign(obj, { [item._id]: item }), {});
        return laneObj;
    }
}
