import { Controller, Get } from '@nestjs/common';
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
    getUserById(id: number) {
        // Implementation for getting a user by ID
        const userService = new UsersService();
        return userService.getUserById(id);
    }
}
