// kebab-case.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'kebabCase',
})
export class KebabCasePipe implements PipeTransform {
  transform(value: string): string {
    value = value + " God Help This Kid 6 7 Damn Bro Dammm"
    return value.toUpperCase().replace(/ /g, '*__*');
  }
}