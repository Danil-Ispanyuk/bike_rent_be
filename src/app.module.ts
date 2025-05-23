import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { BikesModule } from 'modules/bikes/bikes.module';
import { I18nModule } from 'nestjs-i18n';

import { appConfig, databaseConfig, i18nConfig, i18nResolvers } from './config';
import { AuthModule } from './modules/auth/auth.module';
import { JwtAuthGuard } from './modules/auth/guards/auth.guard';
import { CacheModule } from './modules/cache/cache.module';
import { EmailModule } from './modules/email/email.module';
import { StripeModule } from './modules/stripe/stripe.module';
import { TransactionModule } from './modules/transaction/transaction.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [appConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => ({ ...(databaseConfig as TypeOrmModuleOptions) }),
    }),
    I18nModule.forRootAsync({
      useFactory: i18nConfig,
      resolvers: i18nResolvers,
      inject: [ConfigService],
    }),
    BullModule.forRoot({
      url: process.env.REDIS_URL,
    }),
    UserModule,
    AuthModule,
    EmailModule,
    CacheModule,
    BikesModule,
    StripeModule,
    TransactionModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
