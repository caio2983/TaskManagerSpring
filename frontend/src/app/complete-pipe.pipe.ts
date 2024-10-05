import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completePipe',
  standalone: true,
  pure: false
})
export class CompletePipePipe implements PipeTransform {

  transform(tasks: any): any {
    return tasks.filter(filterComplete);

    function filterComplete(item: any) {
       if(item.completed == true) {
        return item;
       } 
    }
  }

}
