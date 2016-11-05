import {Component, Input} from '@angular/core';
import {IUser} from '../shared/interfaces/iuser';


@Component({
  selector: 'chat-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input()
  public user: IUser;

  @Input()
  public isSelected: boolean;
}
