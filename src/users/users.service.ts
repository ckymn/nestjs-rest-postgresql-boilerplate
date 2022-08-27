import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return `New user with ${JSON.stringify(createUserDto)} fields`;
  }

  findAll(limit: number, offset: number) {
    return `find all limit:${limit} - offset:${offset}`;
  }

  findOne(id: number) {
    return 'find One' + id;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `Updates a #${id} user, with ${JSON.stringify(
      updateUserDto,
    )} fields`;
  }

  delete(id: number) {
    return `This action removes a #${id} user`;
  }
}
