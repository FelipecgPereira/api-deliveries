import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";

interface IAuthenticateClient{
    username: string;
    password: string
}


export class AuthenticateClientUseCase{

    async execute({username, password}: IAuthenticateClient){
        const client = await prisma.clients.findFirst({
            where:{
                username
            }
        })


        if(!client){
            throw new Error('User name or password invalid!')
        }

        const passwordMatch = await compare(password, client.password);

        if(!passwordMatch){
            throw new Error('User name or password invalid!')
        }


        const token =  sign({username},"d46ada2ecec6cbc36556107dae95435f",{
            subject: client.id,
            expiresIn: '1d'
        } )

        return token
    }
}