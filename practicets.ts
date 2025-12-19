interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}
function getBear():Bear{
    return { name:"Annshuman", honey:true}
    
}
const bear = getBear();
bear.name;
bear.honey;
console.log(bear.name)
console.log(bear.honey)

 enum UserRole {
  Admin = 'ADMIN',
  Teacher = 'TEACHER',
  Student = 'STUDENT'
}
 interface User {
  id: number;
  name: string;
  role: UserRole;
}
const user : User = {
    id: 1,
    name: "Anshuman",
    role: UserRole.Student
}
console.log(user,"user")
