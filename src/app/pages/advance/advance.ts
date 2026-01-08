import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { from, map, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';
import { FormControl,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-advance',
  imports: [ReactiveFormsModule ],
  templateUrl: './advance.html',
  styleUrl: './advance.css',
})

export class Advance {
  data : any[] = [];
  // data = signal<any[]>([]);
  title = "aman";
  data2 : any[] = [];
  idControl = new FormControl('')


  constructor(private http: HttpClient,private cdr: ChangeDetectorRef){}
 
  // Fetch data based on input ID
  fetchById() {
    const id = this.idControl.value;
    
    if (id) {
      const params = new HttpParams().append("id",id)
      const paramskey = params.keys()
      console.log(paramskey,"Paramkeys")
      console.log("param",params)
      this.http.get('https://api.restful-api.dev/objects', { params }).subscribe({
        next: (response: any) => {
          this.data = response;
          console.log('Data loaded:', this.data);
          this.cdr.detectChanges();
        },
        error: (error) => console.error('Error:', error)
      });
    }
  }

  // Fetch multiple IDs (comma-separated: 3,5,10)
  fetchMultipleIds() {
    const ids = this.idControl.value?.split(',').map(id => id.trim());
    
    if (ids && ids.length > 0) {
      let params = new HttpParams();
      ids.forEach(id => {
        params = params.append('id', id);
      });
      
      this.http.get('https://api.restful-api.dev/objects', { params }).subscribe({
        next: (response: any) => {
          this.data = response;
          console.log('Data loaded:', this.data);
          this.cdr.detectChanges();

        },
        error: (error) => console.error('Error:', error)
      });
    }
  }

  // Fetch all objects
  fetchAll() {
    this.http.get('https://api.restful-api.dev/objects').subscribe({
      next: (response: any) => {
        this.data = response;
        console.log('All data loaded:', this.data);
          this.cdr.detectChanges();

      },
      error: (error) => console.error('Error:', error)
    });
  }

  getuser(){
        this.http.get('https://api.restful-api.dev/objects').subscribe({
      next: (response: any) => {
        this.data = response;
        // this.data.set(response);
      console.log('Data loaded:', this.data);
      // this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });

  } 
  getUserDummy(){
    this.data = [{
      id:1,
      name : 'asadf'
    }]
  }

  testclick(){
    this.title="asdf";
  }
}
