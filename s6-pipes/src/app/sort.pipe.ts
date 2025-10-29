import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform<T>(value: T[], order: 'asc' | 'desc' = 'asc'): T[] {
    return value.sort((a, b) => {
      if (order === 'asc') {
        return a > b ? 1 : -1;
      } else {
        return a > b ? -1 : 1;
      }
    });
  }
}
