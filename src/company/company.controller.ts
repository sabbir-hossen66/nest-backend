import { Controller, Get } from '@nestjs/common';

@Controller('company')
export class CompanyController {
  @Get()
  getCompany() {
    return `hello company how are you today`;
  }
}
