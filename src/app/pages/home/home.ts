import { Component, computed, DOCUMENT, effect, Inject, signal } from '@angular/core';
import { from, fromEvent, Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  currentValue = '';
  counter = signal(1);
  triple = computed(() => this.counter() * 3)

  double() {
    this.counter.update(n => n * 2)
    console.log("double hit")
  }
  restart() {
    this.counter.set(1)
  }
  
  
  constructor(@Inject(DOCUMENT) private document: Document) {
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
    const message3 = of(userpromise)
    const clickbody$ = fromEvent(this.document,"click")
    clickbody$.subscribe((event)=>{
      
      console.log("event pointer",event)
    })
    user1.subscribe((data) => {
      console.log(data, "user1 of")
    })
    message1.subscribe((data) => {
      console.log(data, "message1 of")
    })
    message2.subscribe((data) => {
      console.log(data, "message2 from")
    })
    message3.subscribe((data) => {
      console.log(data, "message3 from")
    })
    
    user2.subscribe((data) => {
      console.log(data, "user2 from")
    })


    const numbers$ = new Observable((subscriber) => {
    subscriber.next(10);
    subscriber.next(20);
    subscriber.next(30);
    subscriber.complete();
  });
  
  numbers$.subscribe({
    next: (value) => console.log('Received:', value),
    complete: () => console.log('Done!')
  });
  const delayed$ = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  
  setTimeout(() => {
    subscriber.next(3);
    subscriber.next(4);
    subscriber.complete();
  }, 2000);
});

console.log('Before subscribe');
delayed$.subscribe({
  next: (x) => console.log('Value:', x),
  complete: () => console.log('Complete!')
});
console.log('After subscribe');
  }


}
