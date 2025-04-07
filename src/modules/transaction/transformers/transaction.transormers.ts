import { Injectable } from '@nestjs/common';

import { TransactionDto } from '../dto/transaction.dto';
import { Transaction } from '../entities/transaction.entity';

@Injectable()
export class TransactionTransformer {
  constructor() {
    this.transform = this.transform.bind(this);
  }

  transform(transaction: Transaction): TransactionDto {
    return {
      id: transaction.id,
      amount: transaction.amount,
      expiresIn: transaction.expiresIn,
      expiresOut: transaction.expiresOut,
      userId: transaction.userId,
      bikeId: transaction.bikeId,
    };
  }
}
