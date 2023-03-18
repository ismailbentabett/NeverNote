import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonDestringify'
})
export class JsonDestringifyPipe implements PipeTransform {

  transform(value: any): any {
    return JSON.parse(value as string);
  }

}
