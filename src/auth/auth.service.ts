import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signin() {
    return { msg: 'I have signed in' };
  }
  async signup(dto: AuthDto) {
    // password hash
    const hash = await argon.hash(dto.password);
    // save new user in db
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        hash,
      },
    });

    // return the saved user
    return user;
  }
}
