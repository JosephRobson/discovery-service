import { IDbController } from "./interfaces";
import { MongoClient } from "mongodb";
import model from "./model";
import { ClientRequest } from "http";

class DbController implements IDbController {
  readonly dbUrl:string = "mongodb://localhost:27017/client-apps";
  readonly dbName:string = 'client-apps';
  db = new MongoClient(this.dbUrl);

  constructor() {
    this.db.connect();
  }

  async addClientApp(group:string, id:string): Promise<boolean> {
    const db = await new MongoClient(this.dbUrl).connect();
    db.db(this.dbName).createIndex();
  }

  getClientApp(): boolean {
    throw new Error("Method not implemented.");
  }

  deleteClientApp(): boolean {
    throw new Error("Method not implemented.");
  }

  getGroup(): boolean {
    throw new Error("Method not implemented.");
  }

  getGroups(): boolean {
    throw new Error("Method not implemented.");
  }
}

export default DbController;
