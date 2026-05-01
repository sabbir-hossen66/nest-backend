import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  users: {
    id: number;
    name: string;
    age: number;
    gender: string;
    isMarried: boolean;
  }[] = [
    { id: 1, name: 'sabbir', age: 26, gender: 'male', isMarried: true },
    { id: 2, name: 'rahim', age: 36, gender: 'female', isMarried: false },
    { id: 3, name: 'sakib', age: 22, gender: 'male', isMarried: false },
  ];

  getAllUsers() {
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  createUser(user: {
    id: number;
    name: string;
    age: number;
    gender: string;
    isMarried: boolean;
  }) {
    this.users.push(user);
    return user;
  }
}
