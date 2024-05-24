import { UsersLoginService } from './users.login.service';
import { UsersLoginDTO } from './users.login.dto';
export declare class UsersLoginController {
    private readonly usersLoginService;
    constructor(usersLoginService: UsersLoginService);
    create(data: UsersLoginDTO): Promise<{
        token: void;
    }>;
}
