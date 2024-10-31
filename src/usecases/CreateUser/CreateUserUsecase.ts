import { User } from "../../entity/User";
import { EmailProvider } from "../../providers/EmailProvider";
import { UserRepository } from "../../repository/UserRepository";
import { CreateUserDTO } from "./CreateUserDTO";

export class CreateUserCase {
    constructor(
        private userRepository: UserRepository,
        private emailProvider: EmailProvider
    ){}
    async execute(data: CreateUserDTO){
        const userAlredyExists = await this.userRepository.findByEmail(data.email)

        if(userAlredyExists) {
            throw new Error('User already exists')
        }

        const user = new User(data)

        await this.userRepository.save(user)

        await this.emailProvider.sendMail({
            to: {email: data.email, name: data.name},
            from: {email: 'data.email', name: 'data.name'},
            body: '<p>Faça o Login</p>',
            subject: 'Email'
        })
    }
}