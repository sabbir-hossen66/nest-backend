import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { CompanyModule } from './company/company.module';
import { BooksModule } from './books/books.module';
import { SpringController } from './spring/spring.controller';

@Module({
  imports: [UserModule, CompanyModule, BooksModule],
  controllers: [AppController, SpringController],
  providers: [AppService],
})
export class AppModule {}
