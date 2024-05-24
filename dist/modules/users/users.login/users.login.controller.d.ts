import { UsersLoginService } from './users.login.service';
import { UsersLoginDTO } from './users.login.dto';
export declare class UsersLoginController {
    private readonly usersLoginService;
    constructor(usersLoginService: UsersLoginService);
    login(data: UsersLoginDTO): Promise<{
        accessToken: string;
    }>;
}
