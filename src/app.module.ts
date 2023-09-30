import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { toDoListModule } from './modules/toDoList/toDoList.module';

@Module({
  imports: [toDoListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
