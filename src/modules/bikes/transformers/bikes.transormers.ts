import { Injectable } from '@nestjs/common';

import { BikesDto } from '../dto/bikes.dto';
import { Bikes } from '../entities/bikes.entity';

@Injectable()
export class BikeTransformer {
  constructor() {
    this.transform = this.transform.bind(this);
  }

  transform(bike: Bikes): BikesDto {
    return {
      id: bike.id,
      model: bike.model,
      latitude: bike.latitude,
      longitude: bike.longitude,
      available: bike.available,
      rentalPricePerHour: bike.rentalPricePerHour,
    };
  }
}
