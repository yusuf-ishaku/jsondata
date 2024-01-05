import express, { IRouter } from 'express';
const router = express.Router();

import userRoute from './jsondata.route';

/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = (): IRouter => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/jsondata', new userRoute().getRoutes());

  return router;
};

export default routes;
