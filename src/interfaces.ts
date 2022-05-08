export interface IDbController{
  addClientApp(group:string, id:string): Promise<boolean>;
  getClientApp(group:string, id:string): boolean;
  deleteClientApp(group:string, id:string): boolean;

  getGroup(group:string): boolean;
  getGroups(): boolean;
}