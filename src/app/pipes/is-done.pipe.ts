import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isDone'
})
export class IsDonePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value ? "Done" : "Pending";
  }
}
