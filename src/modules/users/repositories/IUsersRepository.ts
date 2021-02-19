import User from '../infra/typeorm/entities/User';
import ICreateUserDTO from '@modules/users/Dtos/ICreateUserDTOs'

export default interface IUsersRepository {
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<User>;
}