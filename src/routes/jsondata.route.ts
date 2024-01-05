import express, { IRouter } from 'express';
import jsonDataController from '../controllers/jsondata.controller';
import userValidator from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

class UserRoutes {
  private JsonDataController = new jsonDataController();
  private router = express.Router();
  private UserValidator = new userValidator();

  constructor() {
    this.routes();
  }

  private routes = () => {
    //route to get the file
    this.router.get('', this.JsonDataController.getJsonData)
  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default UserRoutes;
