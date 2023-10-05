import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateToDoDTO } from './../../dtos/create-toDo.dto';
import * as os from 'os';

@Injectable()
export class toDoListService {
  private allToDoList: CreateToDoDTO[] = [
    {
      title: 'play test',
      description: 'I test game',
      from: '22-22',
      to: '22-22',
      macAddress: '1ttttttttttt',
      id: 1,
    },
  ];
  private nextId: number = 1;

  create(body: CreateToDoDTO) {
    const networkInterfaces = os.networkInterfaces();
    // const macAddress = networkInterfaces.wlp2s0[0].mac;
    // body['macAddress'] = macAddress;
    const foundToDo = this.allToDoList.find((e) => e.id == this.nextId);
    if (foundToDo) this.nextId++;
    body.id = this.nextId;
    this.allToDoList.push(body);
    this.nextId++;
    return networkInterfaces;
  }

  getAll() {
    // const networkInterfaces = os.networkInterfaces();
    // const macAddress = networkInterfaces.wlp2s0[0].mac;
    // let userToDos = this.allToDoList.filter((e) => e.macAddress == macAddress);
    // let newUserToDos = [];
    // userToDos.forEach((e) => {
    //   newUserToDos.push(e);
    // });
    // newUserToDos.forEach((e) => {
    //   delete e['macAddress'];
    // });
    // return userToDos;
    return this.allToDoList;
  }

  delete(id: number) {
    const foundToDo = this.allToDoList.find((e) => e.id == id);
    if (!foundToDo) throw new NotFoundException('This ToDo Not Found');
    this.allToDoList = this.allToDoList.filter((e) => e.id != id);
    return this.allToDoList;
  }
}
