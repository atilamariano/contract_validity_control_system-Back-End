import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyDto } from './create-company.dto';
import { EnumStatus } from '@prisma/client';
import { IsString, IsNotEmpty, IsEnum } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {
  @IsString()
  @ApiProperty({
    example: '0123',
    description: 'Código que define as atividades exercidas por uma empresa',
  })
  code: string;

  @IsString()
  @ApiProperty({
    example: '00.000.000/0001-00',
    description: 'Cadastro Nacional de Pessoas Jurídicas (CNPJ)',
  })
  cnpj: string;

  @IsString()
  @ApiProperty({
    example: 'Nome da Empresa ABC',
    description: 'Razão social da empresa',
  })
  corporateName: string;

  @IsString()
  @ApiProperty({
    example: 'Empresa ABC',
    description: 'Nome Fantasia',
  })
  fantasyName: string;

  @IsString()
  @ApiProperty({
    example: 'João Silva',
    description: 'Responsável da empresa',
  })
  contactPerson: string;

  @IsString()
  @ApiProperty({
    example: '1234567890',
    description: 'Telefone de contato da empresa',
  })
  contactPhone: string;

  @IsString()
  @ApiProperty({
    example: 'joao@empresa.com',
    description: 'E-mail de contato da empresa',
  })
  contactEmail: string;

  @IsEnum(EnumStatus)
  @ApiProperty({
    example: 'ACTIVE',
    description: 'Status da empresa',
  })
  status: EnumStatus;

  @IsString()
  @ApiProperty({
    example: '123456789',
    description: 'Inscrição municipal da empresa',
  })
  municipalRegistration: string;
}
