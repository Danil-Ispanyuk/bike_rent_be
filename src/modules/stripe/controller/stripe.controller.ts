import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

import { StripeService } from '../service/stripe.service';
import { PaymentRequestBody } from '../types/payment.type';

@Controller('stripe')
@ApiTags('stripe')
export class StripeController {
  constructor(private paymentService: StripeService) {}

  @Post()
  @ApiOperation({ summary: 'Create payment' })
  @ApiOkResponse({ status: 201, description: 'Payment created' })
  public async createPayments(
    @Res() response: Response,
    @Body() paymentRequestBody: PaymentRequestBody,
  ) {
    this.paymentService.createPayment(paymentRequestBody).then((res) => {
      response.status(HttpStatus.CREATED).json(res);
    });
  }
}
