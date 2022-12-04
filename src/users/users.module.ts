import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database.module';
import { userProviders } from './users.providers';
import { UsersService } from './users.service';

@Module({
  imports: [DatabaseModule],
  providers: [UsersService, ...userProviders],
  exports: [UsersService],
})
export class UsersModule { }