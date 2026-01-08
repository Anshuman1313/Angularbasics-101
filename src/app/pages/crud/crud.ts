import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { CrudService, Phone } from '../../services/crud';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-crud',
  imports: [CommonModule],
  templateUrl: './crud.html',
  styleUrl: './crud.css',
})
export class Crud {
  private productService = inject(CrudService);
 product : Phone[] = [];

 constructor () {
   this.productService.getObjects().subscribe({
    next: (data:Phone[])=>{
     this.product = data
     console.log("procuct",this.product)
    },
    error: (error)=>{
      console.log(error,"error")
    }
  }) 
 }
  // users$ = of<Phone[]>([]);
  // loading = true;
  // error: string | null = null;

  // constructor(private dataService: CrudService) {
  //   this.users$ = this.dataService.getObjects().pipe(
  //     catchError(() => {
  //       this.error = 'Failed to load users';
  //       return of([]);
  //     }),
  //   );
  // }
}
