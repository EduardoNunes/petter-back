import { AuthService } from './auth.service';
import { AuthResponseDTO } from './auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(username: string, password: string): AuthResponseDTO;
}
