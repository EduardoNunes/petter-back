import { UsersLoginDTO } from './users.login.dto';
import { UsersLoginService } from './users.login.service';
export declare class UsersLoginController {
    private readonly usersLoginService;
    constructor(usersLoginService: UsersLoginService);
    login(data: UsersLoginDTO): Promise<{
        accessToken: string;
    }>;
}
