import { Controller, Post, Body, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../users/entities/user.entity';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}

    @Post("singin")
    async singin(@Body() userData:User, @Res() res: Response):Promise<any>{
        
        return this.authService.singin(userData)
    }

    @Post("singup")
    async singup(@Body() user:User):Promise<any>{
        return this.authService.singup(user)
    }
     
}
