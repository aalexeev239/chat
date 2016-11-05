import {Injectable} from '@angular/core';
import {IUser} from '../interfaces/iuser';


@Injectable()
export class UsersService {

  private _users: IUser[] = [
    {
      name: 'Яна Крикливая',
      url: 'https://vk.com/kyarun',
      img_url: 'https://pp.vk.me/c408922/v408922649/9890/SbRn7JGM4BA.jpg',
      online: true
    }, {
      name: 'Татьяна Алейникова',
      url: 'https://vk.com/aleynikova',
      img_url: 'https://pp.vk.me/c636421/v636421510/9976/8f4v_F3zXpo.jpg',
      online: true
    }, {
      name: 'Natalia Yorkina',
      url: 'https://vk.com/id276420781',
      img_url: 'https://pp.vk.me/c630517/v630517781/203d9/5DIWztxsqDI.jpg',
      online: false
    }, {
      name: 'Алексей Алексеев',
      url: 'https://vk.com/unrealalex',
      img_url: 'https://pp.vk.me/c623819/v623819655/2dea0/4yzO0kWQAZA.jpg',
      online: false
    }, {
      name: 'Чайка Чурсина',
      url: 'https://vk.com/kaija',
      img_url: 'https://pp.vk.me/c637221/v637221471/19736/DLy3OfCKpok.jpg',
      online: true
    }, {
      name: 'Саша Матроскин',
      url: 'https://vk.com/cqb.matroskin',
      img_url: 'https://pp.vk.me/c619726/v619726383/2413f/IupfGtCSbzw.jpg',
      online: true
    }, {
      name: 'Александр Сенченко',
      url: 'https://vk.com/alex_permanent',
      img_url: 'https://pp.vk.me/c631225/v631225827/41ea9/yI39VaaPjqQ.jpg',
      online: false
    }];

  public getUsers(): IUser[] {
    return this._users;
  }

}
