import { Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    @Get()
    getAllUsers(@Query() query:any) {
        // Implementation for getting all users
        const userService = new UsersService();
        if(query.name){
            return userService.getAllUsers().filter(user => (user.name) === query.name);
        }
        console.log(query);
        return userService.getAllUsers();
    }

    @Get(':id/')
      getUserById(@Param('id') id: string, @Param('name') name: string) {
        const userService = new UsersService();
        return userService.getUserById(Number(id));
    }
    @Get(':id/:name')
getUserByIdAndName(
  @Param('id') id: number,
  @Param('name') name: string,
) {
     const userService = new UsersService();
     return userService.getUserByIdAndName(Number(id), name);
}

    @Post()
    createUser() {
        const userService = new UsersService();
        const newUser = {
            id: 4,
            name: 'kala',
            age: 30,
            gender:'male',
            isMarried: false
    }
         return userService.createUser(newUser);
        //  return `User created successfully`;
    }
    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        const userService = new UsersService();
        return userService.deleteUser(Number(id));
    }

}
