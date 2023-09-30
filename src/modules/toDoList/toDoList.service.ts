import { Injectable } from '@nestjs/common';

@Injectable()
export class toDoListService {
  getWelcome(): string {
    return 'welcome on our site';
  }
}
