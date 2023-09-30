import { Controller, Get } from '@nestjs/common';
import { toDoListService } from './toDoList.service';

@Controller('toDoList')
export class toDoListController {
  constructor(private readonly _toDoListService: toDoListService) {}

  @Get('hy')
  getHy(): string {
    return this._toDoListService.getWelcome();
  }
}
