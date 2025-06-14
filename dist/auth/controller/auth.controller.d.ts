import { AuthService } from '../service/auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(loginDto: {
        nome: string;
        email: string;
        senha: string;
    }): Promise<{
        access_token: string;
    }>;
}
