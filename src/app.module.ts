import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { OrganizationModule } from './organization/organization.module';
import { SubscriptionTypeModule } from './subscription-type/subscription-type.module';
import { UserSubscriptionTypeMapModule } from './user-subscription-type-map/user-subscription-type-map.module';
import { CoursesModule } from './courses/courses.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    PrismaModule,
    OrganizationModule,
    SubscriptionTypeModule,
    UserSubscriptionTypeMapModule,
    CoursesModule,
  ],
})
export class AppModule {}
