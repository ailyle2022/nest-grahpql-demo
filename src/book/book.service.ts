import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { Book } from './entities/book.entity';
import { v4 as uuidv4 } from 'uuid';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class BookService {
  books: Book[] = []

  create(createBookInput: CreateBookInput) {
    const user = new User()
    user.id= uuidv4()
    user.name="test"
    const book = new Book()
    book.id = uuidv4()
    book.name = createBookInput.name
    book.user = user
    this.books.push(book)
    return book
  }

  async findAll():Promise<Book[]> {
    return this.books;
  }

  async findOne(id: string): Promise<Book> {
    const user = this.books.filter((item) => {
      return item.id === id
    })
    return user[0];
  }

  async update(id: string, updateBookInput: UpdateBookInput) {
    let book = await this.findOne(id)
    book.name = updateBookInput.name
    return book
  }

  remove(id: string) {
    return `This action removes a #${id} book`;
  }
}

