import { MailtrapEmailProvider } from "../../providers/implementations/MailtrapEmailProvider";
import { PostgresUserRepository } from "../../repository/implementations/PostgresUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserCase } from "./CreateUserUsecase";

const postgresUserRepo = new PostgresUserRepository();
const mailtrapEmailProvider = new MailtrapEmailProvider();

const createUserUsecase = new CreateUserCase(
  postgresUserRepo,
  mailtrapEmailProvider
);
const createUserController = new CreateUserController(createUserUsecase);

export { createUserController, createUserUsecase };
