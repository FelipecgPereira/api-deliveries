import { UpdateDeliverymanController } from './modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController';
import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryman/AuthenticateDeliverymanController';
import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import {Router} from 'express'
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDevliveryman/CreateDeliverymanController';
import { ensureAuthenticateClients } from './middlewares/ensureAuthenticateClients';
import { FindAllAvailableController } from './modules/deliveries/useCases/findAllAvailable/FindAllAvailableController';
import { ensureAuthenticateDeliveryman } from './middlewares/ensureAuthenticateDeliveryman';
import { FindDeliveriesController } from './modules/clients/useCases/findDeliveries/FindDeliveriesController';
import { FindAllDeliveriesController } from './modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesController';
import { UpdateEndDateController } from './modules/deliveries/useCases/updateEndDate/UpdateEndDateController';

const routes = Router();

const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController= new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();
const findDeliveriesController = new FindDeliveriesController();
const findAllDeliveriesController = new FindAllDeliveriesController();
const updateEndDateController = new UpdateEndDateController();


routes.post('/authenticate/client/',authenticateClientController.handle)
routes.post('/client/',createClientController.handle)
routes.post('/deliveryman/',createDeliverymanController.handle)
routes.get('/deliveryman/available',ensureAuthenticateDeliveryman,findAllAvailableController.handle)
routes.post('/authenticate/deliveryman/',authenticateDeliverymanController.handle)
routes.post('/delivery/',ensureAuthenticateClients,createDeliveryController.handle)
routes.put('/delivery/updateDeliveryman/:id',ensureAuthenticateDeliveryman,updateDeliverymanController.handle)
routes.get('/client/deliveries',ensureAuthenticateClients,findDeliveriesController.handle)
routes.get('/deliveryman/deliveries',ensureAuthenticateDeliveryman,findAllDeliveriesController.handle)
routes.put('/delivery/updateEndDate/:id',ensureAuthenticateDeliveryman,updateEndDateController.handle)


export {routes}