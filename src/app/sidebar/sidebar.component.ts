import {Component, OnInit, Input} from '@angular/core';
import {IUser} from '../shared/interfaces/iuser';
import {UsersService} from '../shared/services/users.service';


@Component({
  selector: 'chat-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [UsersService]
})
export class SidebarComponent implements OnInit {

  public users: IUser[] = [];
  public currentUser: IUser;
  public valueToFilter: string;

  constructor(private _usersService: UsersService) {
    this.users = _usersService.getUsers();
  }

  ngOnInit() {
  }

  public setCurrentUser(user: IUser): void {
    if (this.currentUser !== user) {
      this.currentUser = user;
    }
  }

  public onInput(ev: KeyboardEvent): void {
    let el = ev.target as HTMLInputElement;
    this.valueToFilter = el.value;
  }

}
