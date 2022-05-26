import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsDate, IsDateString, IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class CreateInformationDto{
  @IsString()
  @IsNotEmpty()
  @ApiProperty({type: 'string', required: true})
  fullname: string;

  @IsDate()
  @IsOptional()
  @Type(()=>Date)
  @ApiProperty({type: 'string', required: false})
  birthdate: Date;

  @IsString()
  @IsOptional()
  @ApiProperty({type: 'string', required: false})
  address: string;

  @IsString()
  @IsOptional()
  @ApiProperty({type: 'string', required: false})
  phone: string;

  @IsEmail()
  @IsOptional()
  @ApiProperty({type: 'string', required: false})
  email: string;

  @IsString()
  @IsOptional()
  @ApiProperty({type: 'string', required: false})
  facebook: string;

  @IsString()
  @IsOptional()
  @ApiProperty({type: 'string', required: false})
  instagram: string;

  @IsString()
  @IsOptional()
  @ApiProperty({type: 'string', required: false})
  github: string;

  @IsArray()
  @IsOptional()
  @ApiProperty({type: 'array', items: { type: 'string'}, required: false})
  technologies: string[];

  @IsArray()
  @IsOptional()
  @ApiProperty({type: 'array', items: { type: 'string'}, required: false})
  tools: string[];

  @IsString()
  @IsOptional()
  @ApiProperty({type: 'string', required: false})
  cv: string;
}