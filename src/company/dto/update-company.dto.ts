import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyDto } from './create-company.dto';
import { EnumStatus } from '@prisma/client';
import { IsString, IsNotEmpty, IsEnum } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '0123',
    description: 'Código que define as atividades exercidas por uma empresa',
  })
  code: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '00.000.000/0001-00',
    description: 'Cadastro Nacional de Pessoas Jurídicas (CNPJ)',
  })
  cnpj: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Empresa ABC',
    description: 'Razão social da empresa',
  })
  businessName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'João Silva',
    description: 'Responsável da empresa',
  })
  contactPerson: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '1234567890',
    description: 'Telefone de contato da empresa',
  })
  contactPhone: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'joao@empresa.com',
    description: 'E-mail de contato da empresa',
  })
  contactEmail: string;

  @IsEnum(EnumStatus)
  @IsNotEmpty()
  @ApiProperty({
    example: 'ACTIVE',
    description: 'Status da empresa',
  })
  status: EnumStatus;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '123456789',
    description: 'Inscrição municipal da empresa',
  })
  municipalRegistration: string;
}
