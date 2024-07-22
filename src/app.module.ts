import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AirportsModule } from './airports/airports.module';

@Module({
  imports: [AuthModule, UsersModule, AirportsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
