import { UsersService } from './users.service';
import { UsersDTO } from './users.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(data: UsersDTO): Promise<{
        id: number;
        email: string;
        password: string;
        profileImage: string;
    }>;
}
