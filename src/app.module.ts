import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { OrganizationModule } from './organization/organization.module';
import { LessonModule } from './lesson/lesson.module';
import { SubscriptionTypeModule } from './subscription-type/subscription-type.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    PrismaModule,
    OrganizationModule,
    LessonModule,
    SubscriptionTypeModule,
  ],
})
export class AppModule {}
