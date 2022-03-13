import {Request,Response} from 'express'
import { FindDeliveriesUseCase } from './FindDeliveriesUseCase';



export class FindDeliveriesController{
    async handle(request: Request, response: Response){
        const { id_client} = request;
        const findDeliveriesUseCase = new FindDeliveriesUseCase();

        const result = await findDeliveriesUseCase.execute(id_client)


            return response.json(result)
    }
}