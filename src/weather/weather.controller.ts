import { Controller, Get } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly service: WeatherService) {}

  @Get('current')
  public current() {
    return this.service.current();
  }

  @Get('forecast')
  public forecast() {
    return this.service.forecast();
  }
}
