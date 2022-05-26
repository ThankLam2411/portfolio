import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { UsersController } from './users.controller';
import { NestjsFormDataModule } from 'nestjs-form-data';
@Module({
  imports: [
    TypeOrmModule.forFeature([UsersRepository]),
    NestjsFormDataModule
  ],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
