import { Component, signal,input } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import gsap from 'gsap';
@Component({
  selector: 'app-arrayfn',
  templateUrl: './arrayfn.html',
  imports: [RouterOutlet]
})
export class Arrayfn {

  nums = [0, 15, 20, 25, 30];
  users = [
    {name:'A',age:15},
    {name:'B',age:25},
    {name:'C',age:5},
    {name:'D',age:32}
  ]
 fruits = ['apple', 'banana', 'guava','orange'];

 occupation = input<string>();


 FruitsReduce(){
  let  fruitsObject = this.fruits.reduce((acc,fruit,i)=>{
    acc[fruit] = i
   return acc
}, {} as Record<string, number>);
console.log(fruitsObject);
console.log(this.fruits,"this is the original fruits")
 }
  SumOfNumbers(){
    let sum = this.nums.reduce((prev,next)=>{
      console.log("prev",prev,"next",next);
      return (next +prev)
    })
    console.log("Sum of numbers ",sum)


    
  }

  findUser(){
    console.log("Finding User the user",this.users)
    let found = this.users.find((user)=>user.age>18)
    let found2 = this.users.find(isA)

    function isA (user:{name:string,age:number}){
      return user.name === 'A'
    }
    console.log("if the user is found1",found)
    console.log("if the user is found2",found2)
  }

  findevennumber() {
    console.log("find even num called")
    this.nums = this.nums.filter((num) => {
      console.log('checking', num);
      if(num === 0) console.log("THe number is neither odd nor even")
      return num % 2 === 0;

    })
  }

  square() {
    console.log("nums before ", this.nums)
    this.nums = this.nums.map((num) => num * num)
    console.log("nums after ", this.nums)
  }
  original() {
    console.log("i am clicking original")
    this.nums = [1, 2, 3, 4, 5]
  }
}


@Component({
  selector: 'app-user',
  template: `
  <div>Username: {{username}} the number is {{number}}</div>
  <button (click)="increment()">Increment</button>
  <button (click)="decrement()">Decrement</button>
  @if (number == 2) {
  <div> The number is 2</div>
  }
  @else {
    <div> The number is after else statement {{number}}</div>
    }

  @for (a of users; track a.id){
  <p >{{a.name}}</p>
  }
  <div class="box"> Hi heelo how are you </div>
  `,
})
export class User {
  username = 'Anshuman';
  number = 1;
  users = [{ id: 1, name: "Anshuman" }, { id: 2, name: "Anmol" }, { id: 3, name: "Sushant" }]

  increment() {
    console.log()
    this.number++;
  }
  decrement() {
    this.number--;
  }

}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [User, Arrayfn, RouterOutlet]
})
export class App {
  name = 'Anshuman';
}

@Component({
  selector: 'app-user2',
  templateUrl: './user.html' ,
    standalone: true
})
export class User2 {
    username = 'youngTech';
  favoriteFramework = '';
}
