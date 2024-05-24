import { JwtService } from '@nestjs/jwt';
import { UsersLoginService } from 'src/modules/users/users.login/users.login.service';
import { AuthResponseDTO } from './auth.dto';
export declare class AuthService {
    private readonly userLoginService;
    private readonly jwtService;
    constructor(userLoginService: UsersLoginService, jwtService: JwtService);
    signIn(username: string, password: string): Promise<AuthResponseDTO>;
}
