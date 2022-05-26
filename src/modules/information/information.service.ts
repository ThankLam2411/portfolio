import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInformationDto } from './dtos/create-information.dto';
import { Information } from './entities/information.entity';
import * as moment from 'moment';

@Injectable()
export class InformationService {
    constructor(
        @InjectRepository(Information)
        private InformationRepository: Repository<Information>
    ){}
    async create(createInformationDto: CreateInformationDto){
        console.log(createInformationDto);
        
        const currDate = moment().format();

    }
}
