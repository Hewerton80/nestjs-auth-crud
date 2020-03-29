import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from  '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(){}
  async use(req: Request, res: Response, next: Function) {
    console.log(req.headers.authorization);
    next();
  }
}
