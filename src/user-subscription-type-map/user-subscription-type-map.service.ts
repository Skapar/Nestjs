import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserSubscriptionTypeMapDto } from './dto/user-subscription-type-map.dto';

@Injectable()
export class UserSubscriptionTypeMapService {
  constructor(private prisma: PrismaService) {}

  async createSubs(dto: UserSubscriptionTypeMapDto) {
    // Check if SubscriptionType with the specified ID exists
    const subscriptionType = await this.prisma.subscriptionType.findUnique({
      where: { id: dto.subscription_type_id },
    });

    if (!subscriptionType) {
      throw new NotFoundException('SubscriptionType not found');
    }

    // Create the UserSubscriptionTypeMap
    const newUserSubscription = await this.prisma.userSubsTypeMap.create({
      data: {
        subscription_type: { connect: { id: dto.subscription_type_id } },
        user: { connect: { id: dto.user_id } },
      },
    });

    // Return the saved user subscription
    return newUserSubscription;
  }
}
