import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';
import { typeOrmConfig } from './configs/database/typeorm.config';
import { InformationModule } from './modules/information/information.module';
import { UsersModule } from './modules/users/users.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    UsersModule,
    InformationModule
  ],
})
export class AppModule {}
