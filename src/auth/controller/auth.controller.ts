import { Controller, Post, Body, NotFoundException } from '@nestjs/common';
import { AuthService } from '../service/auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async login(@Body() loginDto: { nome:string, email: string, senha: string }) {
        const user = await this.authService.validateUser(loginDto.email, loginDto.senha);
        if (!user) {
            throw new NotFoundException('Credenciais inválidas');
        }
        return this.authService.login(user);
    }

}
