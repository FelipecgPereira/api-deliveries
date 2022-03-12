import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";

interface IAuthenticateClient{
    username: string;
    password: string
}


export class AuthenticateDeliverymanUseCase{

    async execute({username, password}: IAuthenticateClient){
        const deliveryman = await prisma.deliveryman.findFirst({
            where:{
                username
            }
        })


        if(!deliveryman){
            throw new Error('User name or password invalid!')
        }

        const passwordMatch = await compare(password, deliveryman.password);

        if(!passwordMatch){
            throw new Error('User name or password invalid!')
        }


        const token =  sign({username},"d46ada2ecec6cbc36556107dae95435f",{
            subject: deliveryman.id,
            expiresIn: '1d'
        } )

        return token
    }
}