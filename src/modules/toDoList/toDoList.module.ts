import { Module } from '@nestjs/common';
import { toDoListController } from './toDoList.controller';
import { toDoListService } from './toDoList.service';

@Module({
  imports: [],
  controllers: [toDoListController],
  providers: [toDoListService],
})
export class toDoListModule {}
