import { inject, injectable } from 'tsyringe';
import IUsersRepository from '../repositories/IUsersRepository';

import User from '../infra/typeorm/entities/User';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
export default class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ name, email, password }: IRequest): Promise<User> {
    const userExistent = await this.usersRepository.findByEmail(email);

    if(userExistent) {
      throw new Error('User Existent');
    }

    const user = await this.usersRepository.create({
      name,
      email,
      password
    })

    return user;
  }
}