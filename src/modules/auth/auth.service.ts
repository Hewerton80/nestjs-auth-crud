import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from  '@nestjs/jwt';
import { User } from '../users/entities/user.entity';
import { hash, compare } from "bcryptjs"
@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private readonly jwtService: JwtService
    ){}
    
    // private async validateUser(email: string):Promise<any>{
    //     return this.usersService.findOne(email);
    // }

    async singin(userdata: User): Promise<any | {status: number}> {
        const {email, password} = userdata;
        const user = await this.usersService.findOne(email)
        console.log(user)
        if(!user){
            console.log("email not found")
            return {
                status:404,
            }
        }
        if (!await compare(password, user.password)) {
            console.log("password not matched", password, user.password)
            return {
                status:404,
            }
        }
        const payload = {
            id: user.id,
            email: user.email,
            role: user.role
        }
        const token = this.jwtService.sign(payload);
        const {password: pass, ...rest} = user;
        return {
            user:rest,
            token
        };
    }
    async singup(userData: User): Promise<any> {
        const userExists = await this.usersService.findOne(userData.email);
        if(userExists){
            return {
                status:404,
            }
        }
        userData.password = await hash(userData.password,10)
        const user = await this.usersService.store(userData);
        const { password, ...rest} = user;
        return rest;
    }
}
