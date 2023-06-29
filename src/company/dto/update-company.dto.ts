import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyDto } from './create-company.dto';
import { EnumStatus } from '@prisma/client';

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {
  code?: string;
  cnpj?: string;
  businessName?: string;
  contactPerson?: string;
  contactPhone?: string;
  contactEmail?: string;
  inclusionDtae?: Date;
  status?: EnumStatus;
  municipalRegistration?: string;
}
