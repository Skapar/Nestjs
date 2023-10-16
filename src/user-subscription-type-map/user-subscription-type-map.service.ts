import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserSubscriptionTypeMapDto } from './dto/user-subscription-type-map.dto';

@Injectable({})
export class UserSubscriptionTypeMapService {
  constructor(private prisma: PrismaService) {}
  async createSubs(dto: UserSubscriptionTypeMapDto) {
    const newUserSubscription = await this.prisma.userSubsTypeMap.create({
      data: {
        subscription_type: { connect: { id: dto.subscription_type_id } },
        user: { connect: { id: dto.user_id } },
      },
    });

    // return the saved user
    return newUserSubscription;
  }
}
