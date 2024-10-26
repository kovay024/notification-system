import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { NotificationsModule } from './notifications/notifications.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { VerificationModule } from './verification/verification.module';
import { ScheduleModule } from '@nestjs/schedule';
import { JobQueueModule } from './job-queue/job-queue.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    VerificationModule,
    UsersModule,
    NotificationsModule,
    AuthModule,
    JobQueueModule,
  ],
})
export class AppModule {}
