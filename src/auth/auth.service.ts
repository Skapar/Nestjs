import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as argon from 'argon2';
import { AuthDto } from './dto/auth.dto';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signin(dto: AuthDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (!user) throw new ForbiddenException('Netu takogo, incorrect');

    const pwMatches = await argon.verify(user.hash, dto.password);

    if (!pwMatches) throw new ForbiddenException('Parol incorrect');

    delete user.hash;
    return user;
  }
  async signup(dto: AuthDto) {
    // password hash
    const hash = await argon.hash(dto.password);
    // save new user in db
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        hash,
        firstname: dto.firstname,
        lastname: dto.lastname,
        organizationId: dto.organization_id,
      },
    });

    // return the saved user
    return user;
  }
}
