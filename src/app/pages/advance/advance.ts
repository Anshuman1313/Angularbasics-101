import { Component } from '@angular/core';
import { from, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-advance',
  imports: [],
  templateUrl: './advance.html',
  styleUrl: './advance.css',
})

export class Advance {
  data : any = null;
  
  
  data$ = this.getuser()
  constructor(private http: HttpClient){
  //   const data = data$.subscribe(e=>{
  //   console.log(e,"e");
  // })
  // console.log(data,"data")
  }
  getuser(){
    
    this.data = this.http.get('https://api.restful-api.dev/objects')
    console.log(typeof(this.data))
    return this.http.get('https://api.restful-api.dev/objects')
  } 


 

  

  

  
  


 
  // constructor(){
  //   const number$ = of(1,2,3,4)
  //   console.log(typeof(number$),"type of number$")
  //   number$.subscribe(val=>console.log("val",val))
  //   const mappedNumber =number$.pipe(map(n=>n*2))
  //   console.log(mappedNumber,"mappedNumber")
  //   number$.pipe(map(n=>n*2)).subscribe(console.log)
  // }
}
