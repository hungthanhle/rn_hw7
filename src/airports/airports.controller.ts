import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AirportsService } from './airports.service';
import { ScopesGuard } from '../common/guards/scopes.guard';
import { Scopes } from '../common/decorators/scopes.decorator';

@Controller('airports')
@UseGuards(ScopesGuard)
export class AirportsController {
  constructor(private airportsService: AirportsService) {}

  @Get()
  @Scopes('airports:list')
  getList(@Request() req) {
    return this.airportsService.getListAirport();
  }
}
