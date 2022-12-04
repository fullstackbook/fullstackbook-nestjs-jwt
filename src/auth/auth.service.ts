import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) { }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    if (user) {
      const isMatch = await bcrypt.compare(pass, user.password);
      if (!isMatch) {
        return null;
      }
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  async signup(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user) {
      throw new HttpException('Username taken', HttpStatus.BAD_REQUEST);
    }
    const hash = await bcrypt.hash(password, saltOrRounds);
    const newUser = await this.usersService.create(username, hash);
    return {
      id: newUser.id
    };
  }
}