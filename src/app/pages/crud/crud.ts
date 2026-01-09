import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { CrudService, Phone,PhonePost,PhonePostResponse, } from '../../services/crud';
import { catchError, of } from 'rxjs';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './crud.html',
  styleUrl: './crud.css',
})
export class Crud {
  private productService = inject(CrudService);
 product : Phone[] = [];

 ngOnInit() {
  this.productService.getObjects().subscribe(data => {
    this.product = data;
  });
}
//for reacive form 
profileForm = new FormGroup({
  name: new FormControl('Anmol'),
  favplayer: new FormControl('Messi')
});



form: PhonePost  = {
  name: 'Anshuman',
  data: {
    year: 2026,
    price: 100,
    'CPU model': '15thGen',
    "Hard disk size": '1tb',
  }
}
id = 7; //for put request

sendgetall(){
   this.productService.getObjects().subscribe(data => {
    this.product = data;
    console.log("data from get response",data)
  });
}

sendput(phonedata: PhonePost, id: number){
  this.productService.putObject(phonedata,id).subscribe({
     next: (data)=>{
      console.log("Put reqeust response",data)
    },
    error: (e)=>{
      console.log("Error put",e)
    }
  })
}

sendpost(phonedata: PhonePost) {
  const dummy_data: PhonePost = {
   "name": "Apple MacBook Pro 16",
   "data": {
      "year": 2019,
      "price": 1849.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB"
   }
};

  this.productService.postObject(phonedata ).subscribe({
    next: (data)=>{
      console.log("Post reqeust response",data)
    },
    error: (e)=>{
      console.log("Error Post",e)
    }
  }
  )
}

  
}
