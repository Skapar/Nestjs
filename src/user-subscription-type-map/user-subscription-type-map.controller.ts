import { Controller, Post, Body } from '@nestjs/common';
import { UserSubscriptionTypeMapService } from './user-subscription-type-map.service';
import { UserSubscriptionTypeMapDto } from './dto/main';

@Controller('user-subscription-type-map')
export class UserSubscriptionTypeMapController {
  constructor(
    private userSubscriptionTypeMapService: UserSubscriptionTypeMapService,
  ) {}

  @Post()
  create(@Body() dto: UserSubscriptionTypeMapDto) {
    return this.userSubscriptionTypeMapService.createSubs(dto);
  }
}
