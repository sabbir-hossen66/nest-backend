import { Controller, Get, Post } from '@nestjs/common';

@Controller('books')
export class BooksController {
  @Get()
  getBooks() {
    return `hello books`;
  }
  @Post()
  createBook() {
    return `book created`;
  }
}
