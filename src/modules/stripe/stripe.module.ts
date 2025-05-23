import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from 'modules/user/user.module';

import { StripeController } from './controller/stripe.controller';
import { StripeService } from './service/stripe.service';

@Module({
  controllers: [StripeController],
  imports: [ConfigModule.forRoot(), UserModule],
  providers: [
    StripeService,
    {
      provide: 'SECRET_STRIPE_KEY',
      useFactory: (configService: ConfigService) =>
        configService.get<string>('SECRET_STRIPE_KEY'),
      inject: [ConfigService],
    },
  ],
  exports: [StripeService],
})
export class StripeModule {}
