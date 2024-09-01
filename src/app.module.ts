import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { AmbulanceModule } from './ambulance/ambulance.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: process.env.DB_HOST,
          port: parseInt(process.env.DB_PORT),
          username: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          entities: [
            __dirname + '/**/*.entity{.ts,.js}',
          ],
          synchronize: true // Remove the trailing comma here
        }),
        AmbulanceModule,
  ],
})
export class AppModule {}
