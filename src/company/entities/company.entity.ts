import { EnumStatus } from '@prisma/client';

export class Company {
  id?: number;
  code: string;
  cnpj: string;
  businessName: string;
  contactPerson: string;
  contactPhone: string;
  contactEmail: string;
  inclusionDtae: Date;
  status: EnumStatus;
  municipalRegistration: string;
}
