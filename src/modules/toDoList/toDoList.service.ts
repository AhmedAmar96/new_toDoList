import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateToDoDTO,
  CreateUserDTO,
  UserLoginDTO,
} from './../../dtos/create-toDo.dto';
import * as os from 'os';
import { APP_NAME } from 'src/toDo.constants';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class toDoListService {
  constructor(
    // @Inject(APP_NAME) private _appName: string,
    private readonly jwtService: JwtService,
  ) {}
  // private allToDoList: CreateToDoDTO[] = [
  //   {
  //     title: 'play test',
  //     description: 'I test game',
  //     from: '22-22',
  //     to: '22-22',
  //     macAddress: '1ttttttttttt',
  //     id: 1,
  //   },
  // ];
  private allUsers: CreateUserDTO[] = [
    {
      id: 1,
      userName: 'ahmed test',
      email: 'ahmedTest@gmail.com',
      phone: '01223456789',
      password: 'ahmed',
    },
  ];
  private nextId: number = 1;

  // create(body: CreateToDoDTO) {
  //   // const networkInterfaces = os.networkInterfaces();
  //   // const macAddress = networkInterfaces.wlp2s0[0].mac;
  //   // body['macAddress'] = macAddress;
  //   const foundToDo = this.allToDoList.find((e) => e.id == this.nextId);
  //   if (foundToDo) this.nextId++;
  //   body.id = this.nextId;
  //   this.allToDoList.push(body);
  //   this.nextId++;
  //   return true;
  // }

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
    return this.allUsers;
  }

  // delete(id: number) {
  //   const foundToDo = this.allToDoList.find((e) => e.id == id);
  //   if (!foundToDo) throw new NotFoundException('This ToDo Not Found');
  //   this.allToDoList = this.allToDoList.filter((e) => e.id != id);
  //   return this.allToDoList;
  // }

  signUp(body: CreateUserDTO) {
    // const networkInterfaces = os.networkInterfaces();
    // const macAddress = networkInterfaces.wlp2s0[0].mac;
    // body['macAddress'] = macAddress;
    const foundUser = this.allUsers.find((e) => e.email == body.email);
    if (foundUser) throw new BadRequestException('User Already Exists')
    this.nextId++;
    body.id = this.nextId;
    this.allUsers.push(body);
    this.nextId++;
    return true;
  }

  login(body: UserLoginDTO) {
    const foundUser = this.allUsers.find(
      (user) => user.email == body.email && user.password == body.password,
    );
    if(!foundUser) throw new NotFoundException('Invalid email or password')
    const paload = {
      userName: foundUser.userName,
      email: foundUser.email,
      phone: foundUser.phone,
    };
    const accessToken = this.jwtService.sign(paload);

    return accessToken;
  }
}
