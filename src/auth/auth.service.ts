import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  login(loginDto: LoginDto) {
    console.log(LoginDto instanceof LoginDto, loginDto);
    return loginDto;
  }
}
