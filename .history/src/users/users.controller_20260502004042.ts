import { Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    @Get()
    getAllUsers() {
        // Implementation for getting all users
        const userService = new UsersService();
        return userService.getAllUsers();
    }

    @Get(':id')
      getUserById(@Param('id') id: string) {
        const userService = new UsersService();
        return userService.getUserById(Number(id));
    }

    @Post()
    {
        const userService = new UsersService();
        const newUser = {
            id: 4,
            name: 'new user',
            age: 30,    
    }
        return userService.createUser(newUser);
    }
}
