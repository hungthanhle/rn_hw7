import { Injectable } from '@nestjs/common';

@Injectable()
export class AirportsService {
  getListAirport() {
    return [
      {
        id: 1,
        name: "airport 1"
      },
      {
        id: 2,
        name: "airport 2",
      }
    ];
  }
}
