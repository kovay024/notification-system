import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { NotificationsModule } from './notifications/notifications.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { VerificationModule } from './verification/verification.module';
import { ScheduleModule } from '@nestjs/schedule';
import { JobQueueModule } from './job-queue/job-queue.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { MiscModule } from './misc/misc.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    MailerModule.forRoot({
      transport: process.env.SMTP_URL,
      defaults: {
        from: "'No Reply' <noreply@edhsftdwre-api.com>",
      },
      template: {
        dir: __dirname + '/../templates',
        adapter: new EjsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
    VerificationModule,
    UsersModule,
    NotificationsModule,
    AuthModule,
    JobQueueModule,
    MiscModule,
  ],
})
export class AppModule {}
