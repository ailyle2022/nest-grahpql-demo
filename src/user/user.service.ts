import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {

  users: User[]

  constructor(){
    this.users = []
    console.log(this.users)
  }

  create(createUserInput: CreateUserInput) {
    const user = new User()
    user.id = uuidv4()
    user.name = createUserInput.name
    this.users.push(user)
    return user
  }

  async findAll(): Promise<User[]> {
    return this.users
  }

  async findOne(id: string):Promise<User> {
    const user = this.users.filter((item) => {
      return item.id === id
    })
    return user[0];
  }
x
  async update(id: string, updateUserInput: UpdateUserInput) {
    let user = await this.findOne(id)
    user.name = updateUserInput.name
    return user
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
