import { Module } from '@nestjs/common';
import { UserSubscriptionTypeMapController } from './user-subscription-type-map.controller';
import { UserSubscriptionTypeMapService } from './user-subscription-type-map.service';

@Module({
  controllers: [UserSubscriptionTypeMapController],
  providers: [UserSubscriptionTypeMapService],
})
export class UserSubscriptionTypeMapModule {}
