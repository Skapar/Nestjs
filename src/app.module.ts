import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { OrganizationModule } from './organization/organization.module';
import { SubscriptionTypeModule } from './subscription-type/subscription-type.module';
import { UserSubscriptionTypeMapModule } from './user-subscription-type-map/user-subscription-type-map.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    PrismaModule,
    OrganizationModule,
    SubscriptionTypeModule,
    UserSubscriptionTypeMapModule,
  ],
})
export class AppModule {}
