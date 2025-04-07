import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BikesModule } from 'modules/bikes/bikes.module';
import { UserModule } from 'modules/user/user.module';

import { TransactionController } from './controllers/transaction.controller';
import { Transaction } from './entities/transaction.entity';
import { TransactionRepository } from './repositories/transaction.repository';
import { TransactionService } from './services/transaction.service';
import { TransactionTransformer } from './transformers/transaction.transormers';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction]), UserModule, BikesModule],
  controllers: [TransactionController],
  providers: [
    TransactionService,
    TransactionRepository,
    TransactionTransformer,
  ],
  exports: [TransactionService, TransactionRepository, TransactionTransformer],
})
export class TransactionModule {}
