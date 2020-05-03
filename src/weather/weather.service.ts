import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as fs from 'fs';

const config = JSON.parse(fs.readFileSync('./config/config.json', 'utf8'));

const axiosApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});

@Injectable()
export class WeatherService {
  public async current(): Promise<any> {
    const response = await axiosApi.get('weather', {
      params: config,
    });
    return response.data;
  }

  public async forecast(): Promise<any> {
    const response = await axiosApi.get('forecast', {
      params: config,
    });
    return response.data;
  }
}
