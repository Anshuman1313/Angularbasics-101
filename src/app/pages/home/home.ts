import { Component, computed, effect, signal } from '@angular/core';
import { subscribe } from 'diagnostics_channel';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  counter = signal(1);
  triple = computed(() => this.counter() * 3)

  double() {
    this.counter.update(n => n * 2)
    console.log("double hit")
  }
  restart() {
    this.counter.set(1)
  }
  constructor() {
    effect(() => {
      console.log('Count is now:', this.counter());
    });
    //tyring rxjs
    // const numbers = from([1, 2, 3, 4]);
    // numbers.subscribe((data) => {
    //   console.log(data, "subscirber")

    //   this.counter.set(data)

    // })

    const users = [
      { id: 1, name: "Anshuman" },
      { id: 3, name: "Anmol" },
      { id: 4, name: "Sushant" }
    ]
    const userpromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve("Promise Resolved")
      }, 5000);
    })
    const user1 = of(users)
    const user2 = from(users)
    const message1 = of(userpromise)
    const message2 = from(userpromise)

    user1.subscribe((data) => {
      console.log(data, "user1 of")
    })
    message1.subscribe((data) => {
      console.log(data, "message1 of")
    })
    message2.subscribe((data) => {
      console.log(data, "message2 from")
    })
    user2.subscribe((data) => {
      console.log(data, "user2 from")
    })


  }


}
