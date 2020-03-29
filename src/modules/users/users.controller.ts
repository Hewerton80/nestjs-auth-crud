
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
    constructor(private userService:UsersService){}

    @Get("/index")
    async index():Promise<User[]>{
        return this.userService.index();
    }

    @Get("/:id")
    async show(@Param("id") id:string):Promise<User | undefined>{
        return this.userService.show(id);
    }

}
