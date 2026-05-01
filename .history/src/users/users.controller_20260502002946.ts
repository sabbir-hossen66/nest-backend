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

    @P
}
