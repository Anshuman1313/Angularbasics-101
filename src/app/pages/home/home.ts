import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  counter = signal(1);
  triple = computed(()=>this.counter()*3)

  double () {
    this.counter.update(n=>n*2)
    console.log("double hit")
  }
  restart( ) {
    this.counter.set(1)
  }
   constructor() {
    effect(() => {
      console.log('Count is now:', this.counter());
    });
  }
}
