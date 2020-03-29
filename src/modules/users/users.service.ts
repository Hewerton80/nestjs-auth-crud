import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { User } from './entities/user.entity';


@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository:Repository<User>){}

    async index():Promise<User[]>{
        return this.userRepository.find()
    }

    async show(id :string):Promise<User | undefined>{
        return this.userRepository.findOne({id})
    }

    async findOne(email:string):Promise<User | undefined>{
        return this.userRepository.findOne({email})
    }

    async store(user:User):Promise<any>{
        return this.userRepository.save(user);
    }


}
