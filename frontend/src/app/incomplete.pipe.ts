import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'incompletePipe',
  standalone: true,
  pure: false
})
export class IncompletePipe implements PipeTransform {

  
  transform(tasks: any): any {
    return tasks.filter(filterComplete);

    function filterComplete(item: any) {
       if(item.completed == false) {
        return item;
       } 
    }
  }

}
