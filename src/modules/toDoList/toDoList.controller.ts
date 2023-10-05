import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { toDoListService } from './toDoList.service';
import { CreateToDoDTO } from './../../dtos/create-toDo.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('toDoList')
@ApiTags('toDoList')
export class toDoListController {
  constructor(private readonly _toDoListService: toDoListService) {}

  @Post('create')
  create(@Body() body: CreateToDoDTO) {
    const result = this._toDoListService.create(body);
    return { message: 'Add toDo successufly', result };
  }

  @Get('getAll')
  getAll() {
    const result = this._toDoListService.getAll();
    return { message: 'Get toDo successufly', result };
  }

  @Delete('delete-one/:id')
  delete(@Param('id') id: number) {
    this._toDoListService.delete(id);
    return { message: 'Delete toDo successufly' };
  }
}
