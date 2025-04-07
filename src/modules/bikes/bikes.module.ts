import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BikesController } from './controllers/bikes.controller';
import { Bikes } from './entities/bikes.entity';
import { BikesRepository } from './repositories/bikes.repository';
import { BikesService } from './services/bikes.service';
import { BikeTransformer } from './transformers/bikes.transormers';

@Module({
  imports: [TypeOrmModule.forFeature([Bikes])],
  controllers: [BikesController],
  providers: [BikesService, BikesRepository, BikeTransformer],
  exports: [BikesService, BikesRepository, BikeTransformer],
})
export class BikesModule {}
