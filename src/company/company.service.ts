import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}

  async create(createCompanyDto: CreateCompanyDto) {
    const {
      code,
      cnpj,
      businessName,
      contactPerson,
      contactPhone,
      contactEmail,
      status,
      municipalRegistration,
    } = createCompanyDto;

    const company = await this.prisma.company.create({
      data: {
        code,
        cnpj,
        businessName,
        contactPerson,
        contactPhone,
        contactEmail,
        status,
        municipalRegistration,
      },
    });

    return company;
  }

  async findAll() {
    return this.prisma.company.findMany();
  }

  async findOne(id: number) {
    return this.prisma.company.findUnique({
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
      status,
      municipalRegistration,
    } = updateCompanyDto;

    return this.prisma.company.update({
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
        status,
        municipalRegistration,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.company.delete({
      where: {
        id,
      },
    });
  }
}
