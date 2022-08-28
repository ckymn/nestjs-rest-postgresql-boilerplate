import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { User } from './entities/user.entitiy';
export declare class UsersController {
    usersService: UsersService;
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(paginationQuery: PaginationQueryDto): Promise<User[]>;
    findOne(id: string): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User>;
    delete(id: string): Promise<User>;
}
