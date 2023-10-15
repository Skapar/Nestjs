import { Body, Controller, Post } from '@nestjs/common';
import { SubscriptionTypeService } from './subscription-type.service';
import { CreateSubscriptionTypeDto } from './dto/subscription-type.dto';

@Controller('subscription-type')
export class SubscriptionTypeController {
  constructor(private SubscriptionTypeServ: SubscriptionTypeService) {}

  @Post()
  async createSubType(@Body() dto: CreateSubscriptionTypeDto) {
    return this.SubscriptionTypeServ.CreateSubtype(dto);
  }
}
