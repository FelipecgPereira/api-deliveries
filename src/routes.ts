import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryman/AuthenticateDeliverymanController';
import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import {Router} from 'express'
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDevliveryman/CreateDeliverymanController';

const routes = Router();

const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();

routes.post('/client/authenticate/',authenticateClientController.handle)
routes.post('/client/',createClientController.handle)
routes.post('/deliveryman/',createDeliverymanController.handle)
routes.post('/deliveryman/authenticate',authenticateDeliverymanController.handle)
routes.post('/delivery/',createDeliveryController.handle)

export {routes}