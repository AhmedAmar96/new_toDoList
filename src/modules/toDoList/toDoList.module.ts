import { Module } from '@nestjs/common';
import { toDoListController } from './toDoList.controller';
import { toDoListService } from './toDoList.service';
import { APP_NAME } from 'src/toDo.constants';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: 'ahmed',
      signOptions: {expiresIn: '3600'}
    })
  ],
  controllers: [toDoListController],
  providers: [
    toDoListService,
    JwtStrategy,
    // {
    //   provide: APP_NAME,
    //   useValue: 'test app name'
    // }
  ],
})
export class toDoListModule {}
