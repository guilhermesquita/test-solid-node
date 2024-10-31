import { User } from "../../entity/User";
import { UserRepository } from "../UserRepository";

export class PostgresUserRepository implements UserRepository {

  private users: User[] = [];

  async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find(user => user.email === email)
    return user
  }
  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}
