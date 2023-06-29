import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class CompanyService {
  async create(createCompanyDto: CreateCompanyDto) {
    const {
      code,
      cnpj,
      businessName,
      contactPerson,
      contactPhone,
      contactEmail,
      inclusionDate,
      status,
      municipalRegistration,
    } = createCompanyDto;

    return prisma.company.create({
      data: {
        code,
        cnpj,
        businessName,
        contactPerson,
        contactPhone,
        contactEmail,
        inclusionDate,
        status,
        municipalRegistration,
      },
    });
  }

  async findAll() {
    return prisma.company.findMany();
  }

  async findOne(id: number) {
    return prisma.company.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    const {
      code,
      cnpj,
      businessName,
      contactPerson,
      contactPhone,
      contactEmail,
      inclusionDate,
      status,
      municipalRegistration,
    } = updateCompanyDto;

    return prisma.company.update({
      where: {
        id,
      },
      data: {
        code,
        cnpj,
        businessName,
        contactPerson,
        contactPhone,
        contactEmail,
        inclusionDate,
        status,
        municipalRegistration,
      },
    });
  }

  async remove(id: number) {
    return prisma.company.delete({
      where: {
        id,
      },
    });
  }
}
