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
    { id: 4, name: 'sakib', age: 28, gender: 'male', isMarried: true },
  ];

  getAllUsers() {
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
  getUserByIdAndName(id: number, name: string) {
    return this.users.find((user) => user.id === id && user.name === name);
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
  deleteUser(id: number) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      const deletedUser = this.users.splice(index, 1)[0];
      return deletedUser;
    }
    return null; // User not found
  }
}
