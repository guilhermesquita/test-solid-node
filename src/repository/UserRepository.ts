import { User } from "../entity/User";

export interface UserRepository {
  findByEmail(email: string): Promise<User | undefined>;
  save(user: User): Promise<void>;
}
