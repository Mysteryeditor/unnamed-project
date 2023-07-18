import { Pipe, PipeTransform } from '@angular/core';
import { taskAssignment } from 'src/models/tasks';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(tasks: taskAssignment[], args: string[]): taskAssignment[] {
    const sortingParam = args[0];
    const sortingDirection = args[1];
    console.log(sortingParam, sortingDirection);
    if (sortingParam === 'userName') {
      let multiplier = 1;
      if (sortingDirection === 'desc') {
        multiplier = -1;
      }
      tasks.sort((a: any, b: any) => {
        if (a[sortingParam] < b[sortingParam]) return 1 * multiplier;
        else if (a[sortingParam] > b[sortingParam]) return -1 * multiplier;
        else return 0;
      });
      return tasks;

    }

    return tasks;

   
  }

}
