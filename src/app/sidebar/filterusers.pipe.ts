import {Pipe, PipeTransform} from '@angular/core';
import {IUser} from '../shared/interfaces/iuser';


@Pipe({
  name: 'filterusers'
})
export class FilterusersPipe implements PipeTransform {

  transform(value: IUser[], args?: string): any {

    if (args && args.length) {
      return value.filter((item)=> {
        return item.name.toUpperCase().indexOf(args.toUpperCase()) === 0;
      });
    }
    return value;
  }

}
