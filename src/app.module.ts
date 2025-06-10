import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserService } from './user/service/user.service';
import { TarefaService } from './tarefa/service/tarefa.service';
import { TurmaService } from './turma/service/turma.service';
import { UserController } from './user/controller/user.controller';
import { TarefaController } from './tarefa/controller/tarefa.controller';
import { TurmaController } from './turma/controller/turma.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entity/user.entity';
import { Tarefa } from './tarefa/entity/tarefa.entity';
import { Turma } from './turma/entity/turma.entity';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth/service/auth.service';
import { JwtStrategy } from './auth/strategy/jwt.strategy';
import { AuthController } from './auth/controller/auth.controller';


@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([User, Tarefa, Turma]), AuthModule, UserModule, JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: '60m' },
  }),
    UserModule,
    PassportModule,
  ],
  controllers: [AppController, UserController, TarefaController, TurmaController, AuthController],
  providers: [
    AppService,
    UserService,
    TarefaService,
    TurmaService,
    AuthService,
    JwtStrategy,
    AuthService
  ],
})
export class AppModule { }
