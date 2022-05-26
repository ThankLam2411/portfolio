import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsOptional } from 'class-validator';
import { CommonPaginationDto } from 'src/common/dto/pagination.dto';

export class GetUsersDto extends CommonPaginationDto {
 
}
