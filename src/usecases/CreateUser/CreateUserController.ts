import { Request, Response } from "express";
import { CreateUserCase } from "./CreateUserUsecase";

export class CreateUserController {
    constructor(
        private createUserCase: CreateUserCase
    ){}
    async handle(request: Request, response: Response): Promise<Response>{
        try {
            const {name, email, password} = request.body
    
            await this.createUserCase.execute({name, email, password})
            return response.status(201).send()
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Unexpected Error'
            })
        }
    }
}