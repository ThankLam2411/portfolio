import { Body, Controller, Post, Req, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FormDataRequest } from 'nestjs-form-data';
import { CreateInformationDto } from './dtos/create-information.dto';
import { InformationService } from './information.service';

@ApiTags('Information')
@ApiBearerAuth()
@Controller('information')
export class InformationController {
    constructor(
        private informationService: InformationService
    ){}

    @Post()
    @ApiConsumes('multipart/form-data')  
    async create(@Body() createInformationDto: CreateInformationDto){
        console.log(createInformationDto);
        return await this.informationService.create(createInformationDto);
    }
}
