import { Module } from '@nestjs/common';
import { InformationService } from './information.service';
import { InformationController } from './information.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Information } from './entities/information.entity';
import { MulterModule } from '@nestjs/platform-express';
import { imageFileFilter } from 'src/common/filter/file-uploading.filter';
import { NestjsFormDataModule } from 'nestjs-form-data';

@Module({
  imports:[
    TypeOrmModule.forFeature([Information]),
    MulterModule.register({
      dest: './uploads/',
      fileFilter: imageFileFilter,
    }),  
    NestjsFormDataModule
  ],
  providers: [InformationService],
  controllers: [InformationController]
})
export class InformationModule {}
