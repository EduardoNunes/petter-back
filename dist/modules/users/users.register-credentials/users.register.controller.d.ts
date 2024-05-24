import { UsersService } from './users.register.service';
import { UsersDTO } from './users.register.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(data: UsersDTO): Promise<{
        id: number;
        name: string;
        email: string;
        profileImage: string;
    }>;
}
